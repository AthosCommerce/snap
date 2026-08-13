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
		const userId = requestParameters.personalization?.shopper || requestParameters.tracking.userId;
		const chatSessionId = requestParameters.context?.sessionId;

		let response: MoiResponseModel;
		try {
			response = await this.request<MoiResponseModel>({
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

		// some error conditions (e.g. session limit CS_003) are returned as a
		// 200 response with an errorCode body — surface as a thrown error so
		// the controller's existing error handling can react
		const errorBody = response as unknown as ChatBadRequestResponseModel & { errorCode?: string };
		if (errorBody?.errorCode) {
			throw {
				err: new Error(errorBody.errorMessage || 'Bad Request'),
				fetchDetails: { status: 200, message: 'OK' },
				responseBody: errorBody,
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
					...trackingQuery(queryParameters.tracking),
				},
			});

			return response;
		} catch (err: any) {
			this.handleError(err);
		}
	}

	async postInit(queryParameters: ChatInitRequestModel & ClientGlobals): Promise<ChatInitResponseModel> {
		try {
			const response = await this.request<ChatInitResponseModel>({
				path: this.configuration.paths.init || '/v1/chat/init',
				method: 'POST',
				headers: JSON_HEADERS,
				query: {
					siteId: queryParameters.siteId,
					...trackingQuery(queryParameters.tracking),
				},
				body: queryParameters,
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
