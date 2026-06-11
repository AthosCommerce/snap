// .storybook/ColorPickerTool.tsx
// Toolbar color picker addon component for theme color overrides.

import React from 'react';
import ReactDOM from 'react-dom';
import { useGlobals } from '@storybook/manager-api';

export const COLOR_KEYS = ['primary', 'secondary', 'accent'] as const;
export type ColorKey = typeof COLOR_KEYS[number];
export const GLOBAL_COLOR_PREFIX = 'themeColor_';
export const DEFAULT_COLOR_PREFIX = 'themeDefaultColor_';

const DEBOUNCE_MS = 150;

export const ColorPickerTool: React.FC = () => {
	const [globals, updateGlobals] = useGlobals();
	const [open, setOpen] = React.useState(false);
	const [hovered, setHovered] = React.useState(false);
	const buttonRef = React.useRef<HTMLButtonElement>(null);
	const [panelPos, setPanelPos] = React.useState({ top: 0, left: 0 });

	// Local state for instant picker feedback.
	const [localColors, setLocalColors] = React.useState<Record<ColorKey, string>>(() => {
		const init = {} as Record<ColorKey, string>;
		COLOR_KEYS.forEach((k) => {
			init[k] = (globals[`${GLOBAL_COLOR_PREFIX}${k}`] as string) || '';
		});
		return init;
	});

	const timers = React.useRef<Partial<Record<ColorKey, ReturnType<typeof setTimeout>>>>({});

	const openDropdown = () => {
		if (buttonRef.current) {
			const rect = buttonRef.current.getBoundingClientRect();
			setPanelPos({ top: rect.bottom + 14, left: rect.left });
		}
		setOpen(true);
	};

	// Close on outside click — covers both the manager document and the story iframe.
	React.useEffect(() => {
		if (!open) return;
		const onMouseDown = (e: MouseEvent) => {
			const panel = document.getElementById('ss-color-picker-panel');
			if (buttonRef.current?.contains(e.target as Node)) return;
			if (panel?.contains(e.target as Node)) return;
			setOpen(false);
		};
		// Manager frame
		document.addEventListener('mousedown', onMouseDown);
		// Story iframe
		const iframe = document.querySelector<HTMLIFrameElement>('#storybook-preview-iframe');
		iframe?.contentDocument?.addEventListener('mousedown', onMouseDown);
		return () => {
			document.removeEventListener('mousedown', onMouseDown);
			iframe?.contentDocument?.removeEventListener('mousedown', onMouseDown);
		};
	}, [open]);

	// Sync local state when globals change externally.
	React.useEffect(
		() => {
			COLOR_KEYS.forEach((k) => {
				const globalVal = (globals[`${GLOBAL_COLOR_PREFIX}${k}`] as string) || '';
				setLocalColors((prev) => (prev[k] === globalVal ? prev : { ...prev, [k]: globalVal }));
			});
		},
		COLOR_KEYS.map((k) => globals[`${GLOBAL_COLOR_PREFIX}${k}`])
	);

	const handleChange = (key: ColorKey, value: string) => {
		setLocalColors((prev) => ({ ...prev, [key]: value }));
		clearTimeout(timers.current[key]);
		timers.current[key] = setTimeout(() => {
			updateGlobals({ [`${GLOBAL_COLOR_PREFIX}${key}`]: value });
		}, DEBOUNCE_MS);
	};

	const handleReset = (key: ColorKey) => {
		clearTimeout(timers.current[key]);
		setLocalColors((prev) => ({ ...prev, [key]: '' }));
		updateGlobals({ [`${GLOBAL_COLOR_PREFIX}${key}`]: '' });
	};

	const anyOverridden = COLOR_KEYS.some((k) => localColors[k]);

	const swatches = COLOR_KEYS.map((k) => {
		const override = localColors[k];
		const defaultColor = globals[`${DEFAULT_COLOR_PREFIX}${k}`] as string | undefined;
		return override || defaultColor || '#cccccc';
	});

	const panel = open
		? ReactDOM.createPortal(
				React.createElement(
					'div',
					{
						id: 'ss-color-picker-panel',
						style: {
							position: 'fixed',
							top: `${panelPos.top}px`,
							left: `${panelPos.left}px`,
							zIndex: 99999,
							background: '#fff',
							borderRadius: '6px',
							boxShadow: '0 4px 16px rgba(0,0,0,0.14)',
							padding: '10px 14px',
							minWidth: '160px',
						},
					},
					React.createElement('div', { style: { fontSize: '11px', fontWeight: 600, color: '#666', marginBottom: '8px' } }, 'Theme Color Overrides'),
					...COLOR_KEYS.map((key) => {
						const override = localColors[key];
						const defaultColor = globals[`${DEFAULT_COLOR_PREFIX}${key}`] as string | undefined;
						const effectiveColor = override || defaultColor || '#000000';
						const isOverridden = Boolean(override);

						return React.createElement(
							'div',
							{
								key,
								style: {
									display: 'flex',
									alignItems: 'center',
									gap: '8px',
									padding: '5px 0',
								},
							},
							// Swatch / color picker — far left
							React.createElement(
								'div',
								{
									style: {
										position: 'relative',
										width: '32px',
										height: '24px',
										borderRadius: '3px',
										border: `2px solid ${isOverridden ? '#1D4990' : 'transparent'}`,
										background: effectiveColor,
										flexShrink: 0,
										overflow: 'hidden',
										cursor: 'pointer',
									},
								},
								React.createElement('input', {
									type: 'color',
									value: effectiveColor,
									onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleChange(key, e.target.value),
									style: {
										position: 'absolute',
										inset: 0,
										width: '200%',
										height: '200%',
										padding: 0,
										margin: '-25%',
										opacity: 0,
										cursor: 'pointer',
										border: 'none',
									},
								})
							),
							// Color name label + hex underneath
							React.createElement(
								'div',
								{ style: { display: 'flex', flexDirection: 'column', flex: 1, gap: '1px' } },
								React.createElement(
									'label',
									{
										style: {
											fontSize: '12px',
											color: isOverridden ? '#1D4990' : '#444',
											textTransform: 'capitalize',
											fontWeight: isOverridden ? '600' : '400',
											lineHeight: '1.2',
										},
									},
									key
								),
								React.createElement(
									'span',
									{
										style: {
											fontSize: '9px',
											color: '#aaa',
											fontFamily: 'monospace',
											lineHeight: '1.2',
										},
									},
									effectiveColor
								)
							),
							// Reset button / spacer
							isOverridden
								? React.createElement(
										'button',
										{
											onClick: () => handleReset(key),
											title: 'Reset to theme default',
											style: {
												width: '22px',
												height: '22px',
												padding: '0',
												fontSize: '13px',
												lineHeight: '1',
												cursor: 'pointer',
												border: '1px solid #ccc',
												borderRadius: '3px',
												background: '#fff',
												color: '#666',
												flexShrink: 0,
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
											},
										},
										'×'
								  )
								: React.createElement('div', { style: { width: '22px', flexShrink: 0 } })
						);
					}),
					anyOverridden
						? React.createElement(
								'button',
								{
									onClick: () => COLOR_KEYS.forEach((k) => handleReset(k)),
									style: {
										marginTop: '8px',
										width: '100%',
										padding: '4px',
										fontSize: '11px',
										cursor: 'pointer',
										border: '1px solid #ccc',
										borderRadius: '3px',
										background: '#f8f8f8',
										color: '#666',
									},
								},
								'Reset all'
						  )
						: null
				),
				document.body
		  )
		: null;

	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			'button',
			{
				ref: buttonRef,
				onClick: () => (open ? setOpen(false) : openDropdown()),
				onMouseEnter: () => setHovered(true),
				onMouseLeave: () => setHovered(false),
				title: 'Theme color overrides',
				style: {
					display: 'inline-flex',
					alignItems: 'center',
					alignSelf: 'center',
					gap: '6px',
					height: '28px',
					padding: '0 10px',
					cursor: 'pointer',
					border: 'none',
					borderRadius: '4px',
					background: open || hovered ? 'rgba(0,0,0,0.12)' : 'rgba(0,0,0,0.06)',
					color: anyOverridden ? '#1D4990' : '#444',
					fontSize: '13px',
					fontWeight: 700,
					whiteSpace: 'nowrap',
					outline: 'none',
					transition: 'background 0.1s',
					lineHeight: '28px',
					verticalAlign: 'middle',
				},
			},
			React.createElement(
				'div',
				{ style: { display: 'flex', gap: '2px', alignItems: 'center' } },
				...swatches.map((color, i) =>
					React.createElement('div', {
						key: i,
						style: {
							width: '9px',
							height: '9px',
							borderRadius: '50%',
							background: color,
							border: '1px solid rgba(0,0,0,0.18)',
							flexShrink: 0,
						},
					})
				)
			),
			React.createElement('span', { style: { letterSpacing: '0.01em' } }, 'Colors'),
			anyOverridden
				? React.createElement('span', {
						title: 'Colors overridden',
						style: {
							width: '6px',
							height: '6px',
							borderRadius: '50%',
							background: '#1D4990',
							flexShrink: 0,
							marginLeft: '1px',
						},
				  })
				: null
		),
		panel
	);
};
