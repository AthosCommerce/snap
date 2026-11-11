import { API, Json } from './Abstract';
import {
	ChatBadRequestResponseModel,
	ChatInitRequestModel,
	ChatInitResponseModel,
	ChatRequesterPaths,
	ChatRequestModel,
	ChatResponseModel,
	ChatStatusRequestModel,
	ChatStatusResponseModel,
	ChatTrackingContext,
	ClientGlobals,
	HTTPHeaders,
	MoiResponseModel,
	UploadImageRequestModel,
	UploadImageResponseModel,
} from '../../types';
import { transformChatResponse } from '../transforms/chatResponse';
import { defined } from '../utils/defined';

const JSON_HEADERS: HTTPHeaders = { 'Content-Type': 'application/json' };

export const CHAT_MAX_MESSAGE_LENGTH = 256;
export const CHAT_ERROR_CODES = {
	QUOTA_LIMIT: 'CS_002',
	SESSION_LIMIT: 'CS_003',
	CONTENT_POLICY: 'CS_006',
	IMAGE_FILE_TOO_SMALL: 'VS_001',
	IMAGE_DIMENSIONS_TOO_SMALL: 'VS_004',
} as const;

const trackingQuery = (tracking: ChatTrackingContext): Record<string, string> => {
	return defined({
		pageUrl: tracking.pageUrl,
		sessionId: tracking.sessionId,
		pageLoadId: tracking.pageLoadId,
		shopperId: tracking.shopperId,
		currency: tracking.currency,
	});
};

export class ChatAPI extends API<ChatRequesterPaths> {
	// a quota limit (CS_002) will not clear within the retry window, so retrying only delays surfacing the error
	protected shouldRetry(responseJSON: Json): boolean {
		return responseJSON?.errorCode !== CHAT_ERROR_CODES.QUOTA_LIMIT;
	}

	// chat responses identify the chat session via an `x-session-id` response header;
	// apply it as the body `context` only when the body does not provide one
	protected handleResponseHeaders(responseJSON: Json, headers?: Headers): Json {
		const sessionId = headers?.get('x-session-id');
		if (sessionId && responseJSON && typeof responseJSON === 'object' && !Array.isArray(responseJSON) && !responseJSON.context) {
			responseJSON.context = { sessionId };
		}
		return responseJSON;
	}

	private handleError(err: any): never {
		if (err?.fetchDetails?.status === 400) {
			const body = err?.responseBody as ChatBadRequestResponseModel;
			throw {
				err: new Error(body?.errorMessage || 'Bad Request'),
				fetchDetails: err.fetchDetails,
				responseBody: err.responseBody,
			};
		}
		throw err;
	}

	async postMessage(requestParameters: ChatRequestModel & ClientGlobals): Promise<ChatResponseModel> {
		const { userId } = requestParameters.tracking;
		const chatSessionId = requestParameters.context?.sessionId;

		let response: MoiResponseModel | ChatBadRequestResponseModel;
		try {
			response = await this.request<MoiResponseModel | ChatBadRequestResponseModel>({
				path: this.configuration.paths.send || '/v1/chat/send',
				method: 'POST',
				headers: JSON_HEADERS,
				query: {
					siteId: requestParameters.siteId,
					...(chatSessionId ? { chatSessionId } : {}),
					...(userId ? { userId } : {}),
					...trackingQuery(requestParameters.tracking),
				},
				body: requestParameters.data,
			});
		} catch (err: any) {
			this.handleError(err);
		}

		// some error conditions (session limit CS_003, content policy CS_006) are returned as a
		// 200 response with an errorCode body — surface as a thrown error so
		// the controller's existing error handling can react
		if ('errorCode' in response) {
			throw {
				err: new Error(response.errorMessage || 'Bad Request'),
				fetchDetails: { status: 200, message: 'OK' },
				responseBody: response,
			};
		}

		return transformChatResponse(response);
	}

	async getStatus(queryParameters: ChatStatusRequestModel & ClientGlobals): Promise<ChatStatusResponseModel> {
		try {
			const response = await this.request<ChatStatusResponseModel>({
				path: this.configuration.paths.status || '/v1/chat/status',
				method: 'GET',
				headers: {},
				query: {
					siteId: queryParameters.siteId,
				},
			});

			return response;
		} catch (err: any) {
			this.handleError(err);
		}
	}

	async postInit(queryParameters: ChatInitRequestModel & ClientGlobals): Promise<ChatInitResponseModel> {
		const { userId, languageCode, searchConfig } = queryParameters;
		try {
			const response = await this.request<ChatInitResponseModel>({
				path: this.configuration.paths.init || '/v1/chat/init',
				method: 'POST',
				headers: JSON_HEADERS,
				query: {
					siteId: queryParameters.siteId,
				},
				body: { userId, languageCode, searchConfig },
			});

			return response;
		} catch (err: any) {
			this.handleError(err);
		}
	}

	async postUploadImage(requestParameters: UploadImageRequestModel & ClientGlobals): Promise<UploadImageResponseModel> {
		const extension = (requestParameters.image.type.split('/')[1] || 'jpg').split('+')[0];
		const formData = new FormData();
		formData.append('file', requestParameters.image, `image.${extension}`);

		try {
			const response = await this.request<UploadImageResponseModel>({
				path: this.configuration.paths.uploadImage || '/v1/chat/upload-image',
				method: 'POST',
				headers: {},
				query: { siteId: requestParameters.siteId },
				body: formData,
			});
			return response;
		} catch (err: any) {
			this.handleError(err);
		}
	}
}
