import { renderHook, act } from '@testing-library/preact';
import { useChatFileUpload, UseChatFileUploadOptions } from './useChatFileUpload';

// jsdom has no DataTransfer constructor — the hook uses it to rebuild a FileList on drop
class MockDataTransfer {
	public items = {
		add: (file: File) => {
			(this.files as File[]).push(file);
		},
	};
	public files: any = [];
}

const makeDragEvent = (files: File[] = [], types: string[] = ['Files']) => ({
	preventDefault: jest.fn(),
	dataTransfer: {
		types,
		files,
		dropEffect: '',
	},
});

const imageFile = () => new File(['image-bytes'], 'photo.png', { type: 'image/png' });
const textFile = () => new File(['text'], 'notes.txt', { type: 'text/plain' });

describe('useChatFileUpload', () => {
	beforeAll(() => {
		(globalThis as any).DataTransfer = MockDataTransfer;
	});

	const setup = (options: Partial<UseChatFileUploadOptions> = {}) => {
		const onUpload = jest.fn();
		const utils = renderHook((props: UseChatFileUploadOptions) => useChatFileUpload(props), {
			initialProps: { enabled: true, onUpload, ...options } as UseChatFileUploadOptions,
		});
		return { onUpload, ...utils };
	};

	it('activates the dragging indicator on dragenter with files', () => {
		const { result } = setup();
		expect(result.current.isDraggingFile).toBe(false);

		act(() => result.current.dragHandlers.onDragEnter(makeDragEvent()));
		expect(result.current.isDraggingFile).toBe(true);
	});

	it('ignores drags without files', () => {
		const { result } = setup();
		act(() => result.current.dragHandlers.onDragEnter(makeDragEvent([], ['text/plain'])));
		expect(result.current.isDraggingFile).toBe(false);
	});

	it('keeps the indicator active across child dragenter/dragleave crossings (drag counter)', () => {
		const { result } = setup();
		act(() => {
			result.current.dragHandlers.onDragEnter(makeDragEvent());
			result.current.dragHandlers.onDragEnter(makeDragEvent());
		});
		expect(result.current.isDraggingFile).toBe(true);

		act(() => result.current.dragHandlers.onDragLeave(makeDragEvent()));
		expect(result.current.isDraggingFile).toBe(true);

		act(() => result.current.dragHandlers.onDragLeave(makeDragEvent()));
		expect(result.current.isDraggingFile).toBe(false);
	});

	it('never goes below zero on stray dragleave events', () => {
		const { result } = setup();
		act(() => result.current.dragHandlers.onDragLeave(makeDragEvent()));
		act(() => result.current.dragHandlers.onDragEnter(makeDragEvent()));
		expect(result.current.isDraggingFile).toBe(true);
	});

	it('uploads the first image file on drop and resets the drag state', async () => {
		const { result, onUpload } = setup();
		act(() => result.current.dragHandlers.onDragEnter(makeDragEvent()));

		await act(async () => {
			await result.current.dragHandlers.onDrop(makeDragEvent([textFile(), imageFile()]));
		});

		expect(onUpload).toHaveBeenCalledTimes(1);
		const uploaded = onUpload.mock.calls[0][0];
		expect(uploaded[0].name).toBe('photo.png');
		expect(result.current.isDraggingFile).toBe(false);
	});

	it('does not upload when no image file was dropped', async () => {
		const { result, onUpload } = setup();
		await act(async () => {
			await result.current.dragHandlers.onDrop(makeDragEvent([textFile()]));
		});
		expect(onUpload).not.toHaveBeenCalled();
	});

	it('ignores all drag events when disabled', () => {
		const { result } = setup({ enabled: false });
		act(() => result.current.dragHandlers.onDragEnter(makeDragEvent()));
		expect(result.current.isDraggingFile).toBe(false);
	});

	it('resets the dragging indicator when enabled flips to false mid-drag', () => {
		const onUpload = jest.fn();
		const { result, rerender } = renderHook((props: UseChatFileUploadOptions) => useChatFileUpload(props), {
			initialProps: { enabled: true, onUpload },
		});

		act(() => result.current.dragHandlers.onDragEnter(makeDragEvent()));
		expect(result.current.isDraggingFile).toBe(true);

		rerender({ enabled: false, onUpload });
		expect(result.current.isDraggingFile).toBe(false);

		// re-enabling requires a fresh dragenter — the counter was reset
		rerender({ enabled: true, onUpload });
		expect(result.current.isDraggingFile).toBe(false);
		act(() => result.current.dragHandlers.onDragLeave(makeDragEvent()));
		expect(result.current.isDraggingFile).toBe(false);
	});
});
