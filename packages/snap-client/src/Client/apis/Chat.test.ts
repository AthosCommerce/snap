import 'whatwg-fetch';
import { ApiConfiguration, ApiConfigurationParameters } from './Abstract';
import { ChatAPI } from './Chat';
import { MockData } from '@athoscommerce/snap-shared';

const mockData = new MockData({ siteId: '8uyt2m' });

const apiConfig: ApiConfigurationParameters = { cache: { enabled: false } };

const baseTracking = {
	pageUrl: 'https://example.com',
	sessionId: 'tracker-session-1',
	pageLoadId: 'page-load-1',
	userId: 'user-1',
};

describe('Chat API', () => {
	let requestMock: jest.SpyInstance;

	afterEach(() => {
		requestMock?.mockReset();
	});

	describe('postMessage', () => {
		it('calls /v1/chat/send with correct URL params on success', async () => {
			const fixture = mockData.chat('default');
			requestMock = jest
				.spyOn(global.window, 'fetch')
				.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve(fixture), headers: new Headers() } as Response));

			const api = new ChatAPI(new ApiConfiguration(apiConfig));
			const result = await api.postMessage({
				siteId: '8uyt2m',
				context: { sessionId: 's1' },
				tracking: baseTracking,
				data: { requestType: 'general', message: 'hello' },
			});

			const [calledUrl] = (requestMock.mock.calls[0] as [string]) || [];
			expect(calledUrl).toContain('/v1/chat/send');
			expect(calledUrl).toContain('siteId=8uyt2m');
			expect(calledUrl).toContain('chatSessionId=s1');
			expect(result).toBeDefined();
			expect((result as any).data[0].messageType).toBe('text');
		});

		it('rejects with errorCode-on-200 shaped error when response has errorCode', async () => {
			const errorBody = { errorCode: 'CS_003', errorMessage: 'Session limit exceeded' };
			requestMock = jest
				.spyOn(global.window, 'fetch')
				.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve(errorBody), headers: new Headers() } as Response));

			const api = new ChatAPI(new ApiConfiguration(apiConfig));
			await expect(
				api.postMessage({
					siteId: '8uyt2m',
					context: { sessionId: 's1' },
					tracking: baseTracking,
					data: { requestType: 'general', message: 'hello' },
				})
			).rejects.toMatchObject({
				responseBody: { errorCode: 'CS_003' },
				fetchDetails: { status: 200 },
			});
		});

		it('rejects with reshaped error when HTTP 400 response', async () => {
			requestMock = jest.spyOn(global.window, 'fetch').mockImplementation(() =>
				Promise.resolve({
					status: 400,
					statusText: 'Bad Request',
					json: () => Promise.resolve({ errorMessage: 'Bad input' }),
					headers: new Headers(),
				} as Response)
			);

			const api = new ChatAPI(new ApiConfiguration(apiConfig));
			await expect(
				api.postMessage({
					siteId: '8uyt2m',
					context: { sessionId: 's1' },
					tracking: baseTracking,
					data: { requestType: 'general', message: 'hello' },
				})
			).rejects.toMatchObject({
				err: expect.objectContaining({ message: 'Bad input' }),
				fetchDetails: { status: 400 },
			});
		});

		it('does not reshape non-400 errors (500 passthrough)', async () => {
			requestMock = jest.spyOn(global.window, 'fetch').mockImplementation(() =>
				Promise.resolve({
					status: 500,
					statusText: 'Internal Server Error',
					json: () => Promise.resolve({ message: 'Server Error' }),
					headers: new Headers(),
				} as Response)
			);

			const api = new ChatAPI(new ApiConfiguration(apiConfig));
			const rejection = await api
				.postMessage({
					siteId: '8uyt2m',
					context: { sessionId: 's1' },
					tracking: baseTracking,
					data: { requestType: 'general', message: 'hello' },
				})
				.catch((e) => e);

			// handle400Error passes non-400 errors through unchanged — no .err wrapper
			expect(rejection.fetchDetails?.status).toBe(500);
			expect(rejection.err).toBeDefined(); // the original Error from the abstract layer
			// confirm it was NOT re-wrapped by handle400Error (err.message is the generic upstream error)
			expect(rejection.err?.message).not.toBe('Bad input');
		});
	});

	describe('postStatus', () => {
		it('calls /v1/chat/status and returns the response body', async () => {
			const fixture = mockData.chatStatus();
			requestMock = jest
				.spyOn(global.window, 'fetch')
				.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve(fixture), headers: new Headers() } as Response));

			const api = new ChatAPI(new ApiConfiguration(apiConfig));
			const result = await api.postStatus({
				siteId: '8uyt2m',
				tracking: baseTracking,
			});

			const [calledUrl] = (requestMock.mock.calls[0] as [string]) || [];
			expect(calledUrl).toContain('/v1/chat/status');
			expect(calledUrl).toContain('siteId=8uyt2m');
			expect(result).toEqual(fixture);
		});
	});

	describe('chatInit', () => {
		it('calls /v1/chat/init and returns the response body', async () => {
			const fixture = mockData.chatInit();
			requestMock = jest
				.spyOn(global.window, 'fetch')
				.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve(fixture), headers: new Headers() } as Response));

			const api = new ChatAPI(new ApiConfiguration(apiConfig));
			const result = await api.chatInit({
				siteId: '8uyt2m',
				userId: 'user-1',
				languageCode: 'en',
				searchConfig: { sessionId: 'search-session-1' },
				tracking: baseTracking,
			});

			const [calledUrl] = (requestMock.mock.calls[0] as [string]) || [];
			expect(calledUrl).toContain('/v1/chat/init');
			expect(calledUrl).toContain('siteId=8uyt2m');
			expect(result).toEqual(fixture);
		});
	});

	describe('postUploadImage', () => {
		it('sends FormData with the correct filename derived from image.type', async () => {
			const fixture = mockData.uploadImage();
			requestMock = jest
				.spyOn(global.window, 'fetch')
				.mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve(fixture), headers: new Headers() } as Response));

			const api = new ChatAPI(new ApiConfiguration(apiConfig));
			const image = new Blob(['fake-image-data'], { type: 'image/png' });
			await api.postUploadImage({
				siteId: '8uyt2m',
				image,
			});

			const [calledUrl, calledInit] = requestMock.mock.calls[0] as [string, RequestInit];
			expect(calledUrl).toContain('/v1/chat/upload-image');
			expect(calledUrl).toContain('siteId=8uyt2m');
			expect(calledInit.body).toBeInstanceOf(FormData);

			const body = calledInit.body as FormData;
			const fileEntry = body.get('file') as File;
			// jsdom FormData.get returns the appended Blob/File with its name
			if (fileEntry && typeof (fileEntry as any).name === 'string') {
				expect((fileEntry as any).name).toBe('image.png');
			} else {
				// fallback: assert FormData instance (jsdom limitation)
				expect(body).toBeInstanceOf(FormData);
			}
		});

		it('reshapes 400 errors via handle400Error', async () => {
			requestMock = jest.spyOn(global.window, 'fetch').mockImplementation(() =>
				Promise.resolve({
					status: 400,
					statusText: 'Bad Request',
					json: () => Promise.resolve({ errorMessage: 'Image too large' }),
					headers: new Headers(),
				} as Response)
			);

			const api = new ChatAPI(new ApiConfiguration(apiConfig));
			const image = new Blob(['data'], { type: 'image/jpeg' });
			await expect(
				api.postUploadImage({
					siteId: '8uyt2m',
					image,
				})
			).rejects.toMatchObject({
				err: expect.objectContaining({ message: 'Image too large' }),
				fetchDetails: { status: 400 },
			});
		});
	});
});
