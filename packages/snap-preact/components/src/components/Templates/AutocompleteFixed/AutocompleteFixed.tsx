import { h } from 'preact';
import { MutableRef, useEffect, useRef, useState } from 'preact/hooks';

import { observer } from 'mobx-react-lite';
import { css } from '@emotion/react';
import type { AutocompleteController } from '@athoscommerce/snap-controller';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { Theme, useTheme, CacheProvider } from '../../../providers';
import { ComponentProps, StyleScript, JSXComponent } from '../../../types';
import { AutocompleteLayout, AutocompleteLayoutProps, AutocompleteLayoutTemplatesLegalProps } from '../../Organisms/AutocompleteLayout';
import { Modal, ModalProps } from '../../Molecules/Modal';
import classNames from 'classnames';
import { SearchInput, SearchInputProps } from '../../Molecules/SearchInput';
import { debounce } from '@athoscommerce/snap-toolbox';
import { useA11y } from '../../../hooks';
import { useAcRenderedInput } from '../../../hooks/useAcRenderedInput';

const defaultStyles: StyleScript<AutocompleteFixedProps & { inputBounds: inputBounds }> = ({ inputBounds, offset, renderInput, width }) => {
	return css({
		position: 'absolute',
		left: '0',
		width: '100%',
		height: '100%',
		right: '0',
		top: '0',
		zIndex: 1001,
		pointerEvents: 'none',
		'.ss__autocomplete-fixed__inner': {
			position: 'absolute',
			left: `calc(0px + ${offset?.left || 0}px)`,
			top: `calc(0px + ${renderInput ? '0px' : `${inputBounds.height}px`} + ${offset?.top || 0}px)`,
			width: `calc(100% + ${offset?.width || 0}px)`,
			zIndex: 1001,
			maxWidth: '100vw',
			pointerEvents: 'auto',

			'.ss__search-input': {
				background: '#fff',
				width: `${inputBounds.width}px`,
				height: `${inputBounds.height}px`,
				border: '0px',
			},
		},

		'.ss__autocomplete-fixed__inner__layout-wrapper': {
			width: width,
			overflowY: 'scroll',
			maxHeight: `calc(90vh - ${inputBounds.top || 0}px - ${renderInput ? `${inputBounds.height}px` : '0px'} + ${offset?.top || 0}px)`,
		},

		'.ss__search-input__button--close-search-icon': {
			border: 'none',
		},
	});
};

export const AutocompleteFixed = observer((properties: AutocompleteFixedProps) => {
	const globalTheme: Theme = useTheme();

	const defaultProps: Partial<AutocompleteFixedProps> = {
		layout: [['c1', 'c2', 'c3']],
		renderInput: true,
		overlayColor: '',
	};

	const props = mergeProps('autocompleteFixed', globalTheme, defaultProps, properties);

	const [active, setActive] = useState(false);
	// Use an empty inputName so the rendered SearchInput does not participate in form
	// serialization. The original input retains its name (e.g. 'q') so that native form
	// submission still produces the expected ?q= query parameter.
	const inputName = '';

	let input: string | Element | null | undefined = props.input;
	let buttonSelector = props.buttonSelector;
	let inputPlaceholderText: string | null | undefined = undefined;

	if (input) {
		if (typeof input === 'string') {
			input = document.querySelector(input);
		}
		inputPlaceholderText = (input as HTMLInputElement)?.getAttribute('placeholder');
	}

	if (!buttonSelector && input) {
		buttonSelector = input;
	}

	const { layout, disableStyles, controller, renderInput, overlayColor, className, internalClassName, offset, treePath } = props;

	const renderedInputRef: MutableRef<HTMLInputElement | null> = useRef(null);

	// Sync active state with controller's focusedInput.
	// When the controller unfocuses (e.g. document click), close the autocomplete
	// so the modal overlay doesn't persist over the input.
	useEffect(() => {
		const onFocusChange = (_context: any, next: () => void) => {
			if (!controller.store.state.focusedInput) {
				setActive(false);
			}
			next();
		};
		controller.eventManager.on('focusChange', onFocusChange);
		return () => {
			controller.eventManager.events['focusChange']?.remove(onFocusChange);
		};
	}, []);

	const reset = () => {
		controller.setFocused();
		setActive(false);
	};

	const subProps: AutocompleteFixedSubProps = {
		autocompleteLayout: {
			// default props
			layout: layout,
			onReset: () => reset(),
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		modal: {
			// default props
			internalClassName: 'autocomplete-fixed__modal',
			buttonSelector: buttonSelector,
			lockScroll: false,
			onOverlayClick: reset,
			open: active,
			// inherited props
			...defined({
				overlayColor,
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		searchInput: {
			// default props
			// autocomplete__search-input is required for useAcRenderedInput hook.
			internalClassName: 'autocomplete-fixed__search-input autocomplete__search-input',
			placeholderText: inputPlaceholderText || undefined,
			submitSearchButton: {
				onClick: () => {
					() => reset();
					window.location.href = controller.store.state.url.link.href;
				},
			},
			clearSearchButton: {
				icon: 'close-thin',
			},
			closeSearchButton: {
				onClick: () => reset(),
			},
			inputName: inputName,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath: `${treePath} modal`,
		},
	};

	const getInputBounds = (inputElem: Element): inputBounds => {
		if (inputElem) {
			const elem = inputElem.getBoundingClientRect();
			return {
				top: elem.top + window.scrollY + (offset?.top || 0),
				left: elem.left + window.scrollX + (offset?.left || 0),
				width: elem.width,
				height: elem.height,
			};
		} else {
			//fallback if input element is not found
			return {
				top: 0,
				left: 0,
				width: 0,
				height: 0,
			};
		}
	};

	const [inputBounds, setInputBounds] = useState<inputBounds>({
		top: 0,
		left: 0,
		width: 0,
		height: 0,
	});

	const checkForInputChange = () => {
		const currentInputBounds = getInputBounds(input as Element);
		if (
			inputBounds.height !== currentInputBounds.height ||
			inputBounds.left !== currentInputBounds.left ||
			inputBounds.top !== currentInputBounds.top ||
			inputBounds.width !== currentInputBounds.width
		) {
			setInputBounds(currentInputBounds);
		}
	};

	checkForInputChange();

	const debouncedHandleResize = debounce(() => {
		checkForInputChange();
	}, 10);

	useEffect(() => {
		window.addEventListener('resize', debouncedHandleResize);
	}, []);

	const styling = mergeStyles<AutocompleteFixedProps & { inputBounds: inputBounds }>({ ...props, inputBounds }, defaultStyles);

	let _input;
	if (input) {
		_input = useAcRenderedInput({
			input: input as Element,
			controller,
			renderedInputRef,
			renderInput: Boolean(renderInput),
			buttonSelector,
			setActive: setActive,
		});
	}

	const acProps = {
		...props,
	};
	delete acProps.width;
	delete acProps.className;
	delete acProps.internalClassName;
	delete acProps.style;
	delete acProps.styleScript;
	delete acProps.themeStyleScript;

	return layout?.length && active ? (
		<CacheProvider>
			<div {...styling} className={classNames('ss__autocomplete-fixed', className, internalClassName)}>
				<Modal {...subProps.modal}>
					<div className="ss__autocomplete-fixed__inner" ref={(e) => useA11y(e, 0, true, reset)}>
						{renderInput ? (
							<SearchInput {...subProps.searchInput} value={controller.store.state.input || ('' as string)} inputRef={renderedInputRef} />
						) : (
							<></>
						)}
						<div className="ss__autocomplete-fixed__inner__layout-wrapper">
							<AutocompleteLayout
								{...acProps}
								{...subProps.autocompleteLayout}
								input={_input!}
								controller={controller}
								treePath={`${treePath} modal`}
							/>
						</div>
					</div>
				</Modal>
			</div>
		</CacheProvider>
	) : null;
});

interface inputBounds {
	top: number;
	left: number;
	width: number;
	height: number;
}

interface AutocompleteFixedSubProps {
	autocompleteLayout: Partial<AutocompleteLayoutProps>;
	modal: Partial<ModalProps>;
	searchInput: Partial<SearchInputProps>;
}

export type AutocompleteFixedProps = {
	controller: AutocompleteController;
	resultComponent?: JSXComponent | JSX.Element;
} & Omit<AutocompleteFixedTemplatesLegalProps, 'resultComponent'> &
	AutocompleteLayoutProps &
	Omit<ComponentProps, 'customComponent'>;

export type AutocompleteFixedTemplatesLegalProps = {
	resultComponent?: string;
	buttonSelector?: string | Element;
	overlayColor?: string;
	renderInput?: boolean;
	offset?: Partial<Omit<inputBounds, 'height'>>;
} & AutocompleteLayoutTemplatesLegalProps;
