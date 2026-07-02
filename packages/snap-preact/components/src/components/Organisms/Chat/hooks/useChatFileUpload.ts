import { useRef, useState } from 'preact/hooks';
import type { RefObject } from 'preact';

export type UseChatFileUploadOptions = {
	/**
	 * When false, drag handlers are no-ops and the dragging indicator never activates.
	 */
	enabled: boolean;
	/**
	 * Called when image files are dropped onto the footer. Receives a freshly-built
	 * FileList (filtered to only image/* types).
	 */
	onUpload: (files: FileList) => void | Promise<void>;
};

export type UseChatFileUploadResult = {
	/** Attach to a hidden `<input type="file">` so the upload button can trigger it. */
	fileInputRef: RefObject<HTMLInputElement>;
	/** True while the user is actively dragging files over the footer. */
	isDraggingFile: boolean;
	/** Spread these onto the drop-zone element. */
	dragHandlers: {
		onDragEnter: (e: any) => void;
		onDragOver: (e: any) => void;
		onDragLeave: (e: any) => void;
		onDrop: (e: any) => void;
	};
};

const hasFiles = (e: DragEvent): boolean => Array.from(e.dataTransfer?.types || []).includes('Files');

/**
 * Wires drag-and-drop image upload onto the chat footer plus a ref for the
 * hidden file input. `dragenter` / `dragleave` fire on every child crossing,
 * so a counter is kept to know when the pointer has truly left the footer.
 */
export const useChatFileUpload = ({ enabled, onUpload }: UseChatFileUploadOptions): UseChatFileUploadResult => {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [isDraggingFile, setIsDraggingFile] = useState(false);
	const dragCounterRef = useRef(0);

	const onDragEnter = (e: any): void => {
		if (!enabled || !hasFiles(e as DragEvent)) return;
		e.preventDefault();
		dragCounterRef.current += 1;
		setIsDraggingFile(true);
	};

	const onDragOver = (e: any): void => {
		if (!enabled || !hasFiles(e as DragEvent)) return;
		// Required to allow the drop event to fire
		e.preventDefault();
		if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
	};

	const onDragLeave = (e: any): void => {
		if (!enabled || !hasFiles(e as DragEvent)) return;
		dragCounterRef.current = Math.max(0, dragCounterRef.current - 1);
		if (dragCounterRef.current === 0) setIsDraggingFile(false);
	};

	const onDrop = async (e: any): Promise<void> => {
		if (!enabled || !hasFiles(e as DragEvent)) return;
		e.preventDefault();
		dragCounterRef.current = 0;
		setIsDraggingFile(false);
		const dropped = Array.from((e as DragEvent).dataTransfer?.files || []);
		const firstImage = dropped.find((f) => f.type.startsWith('image/'));
		if (!firstImage) return;
		// Reconstruct a FileList — consumers (e.g. controller.upload) expect FileList | null
		const dt = new DataTransfer();
		dt.items.add(firstImage);
		await onUpload(dt.files);
	};

	return {
		fileInputRef,
		isDraggingFile,
		dragHandlers: { onDragEnter, onDragOver, onDragLeave, onDrop },
	};
};
