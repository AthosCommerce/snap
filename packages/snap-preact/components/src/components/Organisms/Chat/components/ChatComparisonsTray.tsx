import { h } from 'preact';

import { css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';
import { observer } from 'mobx-react-lite';

import type { ChatController } from '@athoscommerce/snap-controller';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../../providers';
import { Colour, mergeProps, mergeStyles } from '../../../../utilities';
import { ComponentProps, StyleScript } from '../../../../types';
import { useLang } from '../../../../hooks';
import { useA11y } from '../../../../hooks/useA11y';
import { Button } from '../../../Atoms/Button';
import { Icon } from '../../../Atoms/Icon';
import { Image } from '../../../Atoms/Image';
import { ChatLang, chatDefaultLang, langAttrOf } from '../Chat.lang';

const defaultStyles: StyleScript<ChatComparisonsTrayProps> = ({ primaryColorBg, primaryColorFg }) => {
	const colorPrimary = primaryColorBg!;
	const colorPrimaryText = primaryColorFg!;
	return css({
		display: 'flex',
		flexDirection: 'column',
		gap: '0.5em',
		background: new Colour(colorPrimary).lightenHex(0.95),
		padding: '0.5em 1em',

		'.ss__chat__content__header__comparisons__header': {
			display: 'flex',
			justifyContent: 'space-between',

			'.ss__chat__content__header__comparisons__header__title': {
				fontWeight: 'bold',
				fontSize: '1.2em',
				display: 'flex',
				alignItems: 'center',
				gap: '0.5em',
				'.ss__chat__content__header__comparisons__header__title__icon': {
					background: colorPrimary,
					borderRadius: '50%',
					padding: '5px',
					fill: colorPrimaryText,
					height: '25px',
					width: '25px',
				},
			},
			'.ss__chat__content__header__comparisons__header__actions': {
				'.ss__button': {
					border: 'none',
					background: 'none',
				},
			},
		},
		'.ss__chat__content__header__comparisons__content': {
			display: 'flex',
			gap: '1em',
			alignItems: 'stretch',

			'.ss__chat__content__header__comparisons__content__items': {
				display: 'flex',
				flex: '1 1 calc(100% - 100px)',
				justifyContent: 'space-between',
				gap: '0.5em',
			},

			'.ss__chat__content__header__comparisons__content__comparison': {
				background: '#fff',
				padding: '0.5em',
				borderRadius: '1em',
				display: 'flex',
				flexDirection: 'column',
				gap: '0.5em',
				flex: '0 1 25%',
				position: 'relative',

				'&.ss__chat__content__header__comparisons__content__comparison--placeholder': {
					border: '2px dashed #ddd',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					'.ss__chat__content__header__comparisons__content__comparison--placeholder__text': {
						color: '#999',
						fontStyle: 'italic',
					},
				},

				'.ss__chat__content__header__comparisons__content__comparison__remove': {
					position: 'absolute',
					top: '-3px',
					right: '-3px',
					cursor: 'pointer',
					background: 'red',
					borderRadius: '50%',
					padding: '0.4em',
					height: 20,
					width: 20,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					svg: {
						fill: '#fff',
						stroke: '#fff',
					},
				},
			},

			'.ss__chat__content__header__comparisons__action': {
				display: 'flex',
				alignItems: 'center',
				marginLeft: 'auto',
				flex: '1 1 auto',

				'&.ss__chat__content__header__comparisons__action--hidden': {
					visibility: 'hidden',
				},

				'.ss__button': {
					flexDirection: 'row-reverse',
					borderRadius: '1em',
					padding: '0.5em 1em',
					background: colorPrimary,
					color: colorPrimaryText,
					textAlign: 'center',
					svg: {
						fill: colorPrimaryText,
						stroke: colorPrimaryText,
					},
				},
			},
		},
	});
};

export const ChatComparisonsTray = observer((properties: ChatComparisonsTrayProps): JSX.Element | null => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatComparisonsTrayProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatComparisonsTray', globalTheme, defaultProps, properties);

	const { className, internalClassName, controller } = props;
	const { store } = controller;
	const comparisons = store.currentChat?.comparisons;

	const lang = deepmerge(chatDefaultLang, props.lang || {});
	const mergedLang = useLang(
		{
			comparisonsTitle: lang.comparisonsTitle!,
			comparisonsClearButton: lang.comparisonsClearButton!,
			comparisonsAddText: lang.comparisonsAddText!,
			comparisonsCompareButton: lang.comparisonsCompareButton!,
		} as any,
		{ controller, count: comparisons?.compared.length || 0, max: comparisons?.maxItems || 0 }
	);

	const styling = mergeStyles<ChatComparisonsTrayProps>(props, defaultStyles);

	if (!comparisons?.compared || comparisons.compared.length === 0) {
		return null;
	}

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__chat__content__header__comparisons', className, internalClassName)}>
				<div className={'ss__chat__content__header__comparisons__header'}>
					<div className={'ss__chat__content__header__comparisons__header__title'}>
						<Icon className={'ss__chat__content__header__comparisons__header__title__icon'} icon={'clipboard'} />
						<span className={'ss__chat__content__header__comparisons__header__title__text'} {...mergedLang.comparisonsTitle?.all}></span>
					</div>
					<div className={'ss__chat__content__header__comparisons__header__actions'}>
						<Button onClick={() => comparisons.reset()}>
							<span {...mergedLang.comparisonsClearButton?.all}></span>
						</Button>
					</div>
				</div>
				<div className={'ss__chat__content__header__comparisons__content'}>
					<div className={'ss__chat__content__header__comparisons__content__items'}>
						{Array.from({ length: comparisons.maxItems }).map((_, index) => {
							const comparisonItem = comparisons.compared[index];
							return (
								<div
									className={classnames('ss__chat__content__header__comparisons__content__comparison', {
										'ss__chat__content__header__comparisons__content__comparison--placeholder': !comparisonItem,
									})}
									key={index}
								>
									{comparisonItem ? (
										<>
											<Image
												alt={(comparisonItem?.result?.display || comparisonItem?.result)?.mappings?.core?.name || ''}
												src={
													(comparisonItem?.result?.display || comparisonItem?.result)?.mappings?.core?.imageUrl ||
													(comparisonItem?.result?.display || comparisonItem?.result)?.mappings?.core?.parentImageUrl ||
													''
												}
											/>
											<div
												className="ss__chat__content__header__comparisons__content__comparison__remove"
												role="button"
												ref={(e) => useA11y(e)}
												aria-label={langAttrOf(lang.comparisonsRemoveButton, 'aria-label', {
													name: (comparisonItem?.result?.display || comparisonItem?.result)?.mappings?.core?.name || '',
												})}
												onClick={() => {
													comparisons.remove(comparisonItem.result.id);
												}}
											>
												<Icon icon={'close-thin'} size={'12px'} />
											</div>
										</>
									) : (
										<>
											<Icon icon={'plus-thin'} />
											<div
												className={'ss__chat__content__header__comparisons__content__comparison--placeholder__text'}
												{...mergedLang.comparisonsAddText?.all}
											></div>
										</>
									)}
								</div>
							);
						})}
					</div>
					<div
						className={classnames('ss__chat__content__header__comparisons__action', {
							'ss__chat__content__header__comparisons__action--hidden': (comparisons.compared.length || 0) < 2,
						})}
					>
						<Button onClick={() => controller.search()} icon={{ icon: 'compare', title: langAttrOf(lang.comparisonsCompareButton, 'title') }}>
							<span {...mergedLang.comparisonsCompareButton?.value}></span>
						</Button>
					</div>
				</div>
			</div>
		</CacheProvider>
	);
});

export type ChatComparisonsTrayProps = {
	controller: ChatController;
	lang?: Partial<ChatLang>;
	primaryColorBg?: string;
	primaryColorFg?: string;
} & ComponentProps<ChatComparisonsTrayProps>;
