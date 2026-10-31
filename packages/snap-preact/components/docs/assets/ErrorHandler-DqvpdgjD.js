import {
	o as P,
	u as I,
	a as L,
	m as j,
	b as E,
	c as B,
	n as O,
	B as t,
	j as e,
	l,
	I as c,
	F as W,
	d as F,
	C as H,
	e as S,
} from './iframe-Bc4KSH0T.js';
import { B as D } from './Button-C4cTOUHA.js';
import { d as b } from './defined-CdKp_MB-.js';
import { u as z } from './useLang-Dx66cFD0.js';
import { C as m } from './Colour-BeIqPw58.js';
const r = new m('#ecaa15'),
	d = new m('#cc1212'),
	h = new m('#4c3ce2'),
	A = ({ theme: _ }) =>
		S({
			borderRadius: '2px',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			borderLeft: '4px solid',
			'.ss__error-handler__message': {
				padding: '10px',
				display: 'flex',
				alignItems: 'center',
				'.ss__error-handler__message__type': { fontWeight: 'bold', marginRight: '5px' },
				'.ss__icon': { marginRight: '10px' },
			},
			'& .ss__error-handler__button': {
				backgroundColor: 'unset',
				color: 'inherit',
				borderColor: _?.variables?.colors?.primary,
				width: ['150px', 'fit-content'],
				margin: '5px 10px',
				'&:hover': { backgroundColor: 'unset', borderColor: 'unset', color: 'unset', '.ss__icon': { fill: 'unset', stroke: 'unset' } },
				'.ss__icon': { margin: '0 5px 0 0' },
			},
			'&.ss__error-handler--error': {
				backgroundColor: d.lighten(180).hex,
				borderLeftColor: d.hex,
				'.ss__error-handler__message': { '.ss__icon': { fill: d.hex } },
			},
			'&.ss__error-handler--warning': {
				backgroundColor: r.lighten(180).hex,
				borderLeftColor: r.hex,
				'.ss__icon': { fill: r.hex, stroke: r.hex },
				'.ss__error-handler__button': {
					color: r.hex,
					borderColor: r.hex,
					fontWeight: 'bold',
					textTransform: 'uppercase',
					display: 'inline-flex',
					alignItems: 'center',
					'.ss__button__content': { order: 2 },
					'.ss__button__icon': { order: 1, width: '10px', height: '10px', fill: r.hex, stroke: r.hex },
					'&:hover': {
						color: r.darken(30).hex,
						borderColor: r.darken(30).hex,
						'.ss__button__icon': { fill: r.darken(30).hex, stroke: r.darken(30).hex },
					},
				},
			},
			'&.ss__error-handler--info': {
				backgroundColor: h.lighten(180).hex,
				borderLeftColor: h.hex,
				'.ss__error-handler__message': { '.ss__icon': { fill: h.hex } },
			},
		}),
	U = P((_) => {
		const g = I(),
			f = { treePath: L() },
			o = j('errorHandler', g, f, _),
			{ controller: i, error: C, disableStyles: u, onRetryClick: p, className: y, internalClassName: v, treePath: x } = o,
			{ overrideElement: N, shouldRenderDefault: k } = E('errorHandler', o);
		if (!k) return N;
		const a = {
				icon: { size: '18px', internalClassName: 'ss__error-handler__icon', ...b({ disableStyles: u }), theme: o.theme, treePath: x },
				buttonRetry: {
					internalClassName: 'ss__error-handler__button',
					icon: 'rotate-right',
					...b({ disableStyles: u }),
					theme: o.theme,
					treePath: x,
				},
			},
			s = i?.store?.error || C,
			T = B(o, A),
			w = O(
				{ warningText: { value: 'Warning:' }, infoText: { value: 'Info:' }, errorText: { value: 'Error:' }, reloadText: { value: 'Retry' } },
				o.lang || {}
			),
			n = z(w, { controller: i }, { activeBreakpoint: g?.activeBreakpoint });
		return Object.values(t).includes(s?.type) && s?.message
			? e(H, {
					children: e('div', {
						className: F('ss__error-handler', `ss__error-handler--${s.type}`, y, v),
						...T,
						children: (() => {
							switch (s.type) {
								case t.WARNING:
									return l(W, {
										children: [
											l('div', {
												className: 'ss__error-handler__message',
												children: [
													e(c, { ...a.icon, icon: 'warn' }),
													e('span', { className: 'ss__error-handler__message__type', ...n.warningText?.all }),
													e('span', { className: 'ss__error-handler__message__content', children: s.message }),
												],
											}),
											s?.code == 429
												? e(D, {
														...a.buttonRetry,
														onClick: (R) => {
															p ? p(R) : i?.search();
														},
														...n.reloadText.attributes,
														children: e('span', { className: 'ss__error-handler__button__text', ...n.reloadText.value }),
												  })
												: null,
										],
									});
								case t.ERROR:
									return l('div', {
										className: 'ss__error-handler__message',
										children: [
											e(c, { ...a.icon, icon: 'error' }),
											e('span', { className: 'ss__error-handler__message__type', ...n.errorText?.all }),
											e('span', { className: 'ss__error-handler__message__content', children: s.message }),
										],
									});
								case t.INFO:
									return l('div', {
										className: 'ss__error-handler__message',
										children: [
											e(c, { ...a.icon, icon: 'info' }),
											e('span', { className: 'ss__error-handler__message__type', ...n.infoText?.all }),
											e('span', { className: 'ss__error-handler__message__content', children: s.message }),
										],
									});
							}
						})(),
					}),
			  })
			: null;
	});
export { U as E };
