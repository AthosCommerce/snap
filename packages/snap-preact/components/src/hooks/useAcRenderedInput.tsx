import type { AutocompleteController } from '@athoscommerce/snap-controller';
import { useState, MutableRef, useEffect, useRef } from 'preact/hooks';

const RENDERED_INPUT_SELECTOR = '.ss__autocomplete__search-input input';

export function useAcRenderedInput({
	input,
	controllers,
	renderInput,
	buttonSelector,
	renderedInputRef,
	setActive,
}: {
	input: Element;
	controllers: AutocompleteController[];
	renderedInputRef: MutableRef<HTMLInputElement | null>;
	renderInput: boolean;
	buttonSelector?: string | Element;
	setActive?: (active: boolean) => void;
}) {
	const [_input, setInput] = useState<Element | null>(input);
	const [renderedInputInitialized, setRenderedInputInitialized] = useState(false);
	const boundController = useRef<AutocompleteController | null>(null);

	// adds the rendered input to the controller's selector (once) and binds it
	const bindRenderedInput = async (cntrlrs: AutocompleteController[]) => {
		for (const cntrlr of cntrlrs) {
			if (!cntrlr.config.selector.includes(RENDERED_INPUT_SELECTOR)) {
				cntrlr.config.selector = `${cntrlr.config.selector}, ${RENDERED_INPUT_SELECTOR}`;
			}
			boundController.current = cntrlr;
			await cntrlr.bind();
		}
	};
	const onClick = () => {
		if (setActive) {
			setActive(true);
		}

		//this is needed to await the rendered input to render before binding the controller
		setTimeout(async () => {
			if (!renderedInputInitialized) {
				setInput(renderedInputRef!.current);
				await bindRenderedInput(controllers);
				renderedInputRef?.current?.focus();
			}
			setRenderedInputInitialized(true);
		});
	};

	useEffect(() => {
		// track pointer-initiated focus to avoid rendering the overlay between mousedown and mouseup,
		// which splits the click target to the nearest common ancestor instead of the input element
		let pointerFocus = false;
		const clearPointerFocus = () => {
			pointerFocus = false;
		};

		if (renderInput && buttonSelector) {
			let button: Element | null;
			if (typeof buttonSelector == 'string') {
				button = document.querySelector(buttonSelector);
			} else {
				button = buttonSelector;
			}
			if (button) {
				const onMousedown = () => {
					pointerFocus = true;
				};
				const onClickBtn = (e: Event) => {
					pointerFocus = false;
					e.stopPropagation();
					onClick();
				};
				const onFocusBtn = () => {
					if (!pointerFocus) {
						onClick();
					}
				};
				const onSelectBtn = () => onClick();

				button.addEventListener('mousedown', onMousedown);
				document.addEventListener('mouseup', clearPointerFocus, true);
				button.addEventListener('click', onClickBtn);
				button.addEventListener('focus', onFocusBtn);
				button.addEventListener('select', onSelectBtn);

				return () => {
					button!.removeEventListener('mousedown', onMousedown);
					document.removeEventListener('mouseup', clearPointerFocus, true);
					button!.removeEventListener('click', onClickBtn);
					button!.removeEventListener('focus', onFocusBtn);
					button!.removeEventListener('select', onSelectBtn);
				};
			}
		} else {
			if (setActive) {
				const onMousedown = () => {
					pointerFocus = true;
				};
				const onClickInput = (e: Event) => {
					pointerFocus = false;
					e.stopPropagation();
					setActive(true);
				};
				const onFocusInput = () => {
					if (!pointerFocus) {
						setActive(true);
					}
				};
				const onSelectInput = () => setActive(true);

				(input as Element)!.addEventListener('mousedown', onMousedown);
				document.addEventListener('mouseup', clearPointerFocus, true);
				(input as Element)!.addEventListener('click', onClickInput);
				(input as Element)!.addEventListener('focus', onFocusInput);
				(input as Element)!.addEventListener('select', onSelectInput);

				return () => {
					(input as Element)!.removeEventListener('mousedown', onMousedown);
					document.removeEventListener('mouseup', clearPointerFocus, true);
					(input as Element)!.removeEventListener('click', onClickInput);
					(input as Element)!.removeEventListener('focus', onFocusInput);
					(input as Element)!.removeEventListener('select', onSelectInput);
				};
			}
		}
	}, []);

	// this is used to keep the values consistent between the native input and the rendered input
	useEffect(() => {
		if (input !== _input && _input) {
			const onInput = () => {
				(input as HTMLInputElement).value = (_input as HTMLInputElement).value;
			};
			_input.addEventListener('input', onInput);
			return () => {
				_input.removeEventListener('input', onInput);
			};
		}
	}, [_input]);

	return _input;
}
