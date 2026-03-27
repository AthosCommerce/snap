import { h } from 'preact';

import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { Button, ButtonProps } from '../../Atoms/Button';
import { Icon, IconProps, IconType } from '../../Atoms/Icon';
import type { Filter as FilterType } from '@athoscommerce/snap-store-mobx';
import type { UrlManager } from '@athoscommerce/snap-url-manager';
import { Lang, useComponent, useLang } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';
import deepmerge from 'deepmerge';

const defaultStyles: StyleScript<FilterProps> = ({}) => {
	return css({
		textDecoration: 'none',
		display: 'inline-flex',
		'& .ss__filter__button': {
			alignItems: 'center',
			'& .ss__filter__button__icon': {
				margin: '0 5px 0 0',
			},
		},
		'& .ss__filter__label': {
			marginRight: '5px',
			marginLeft: '5px',
			fontWeight: 'bold',
		},
	});
};

// TODO: look into urlManager and how it connects in this case, left the href out for the time being
export const Filter = observer((properties: FilterProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();
	const defaultProps: Partial<FilterProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('filter', globalTheme, defaultProps, properties);

	const {
		filter,
		facetLabel,
		valueLabel,
		url,
		hideFacetLabel,
		onClick,
		icon,
		separator,
		disableStyles,
		className,
		internalClassName,
		treePath,
		customComponent,
	} = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.filter || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const link = filter?.url?.link || url?.link;
	const value = filter?.value.label || valueLabel;
	const label = filter?.facet.label || facetLabel;

	const subProps: FilterSubProps = {
		button: {
			// default props
			internalClassName: 'ss__filter__button',
			disableA11y: true,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
		icon: {
			// default props
			icon: 'close-thin',
			internalClassName: 'ss__filter__button__icon',
			size: '10px',
			// inherited props
			...defined({
				disableStyles,
				icon,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
	};

	const styling = mergeStyles<FilterProps>(props, defaultStyles);

	//initialize lang
	const defaultLang = {
		filter: {
			attributes: {
				'aria-label': !label ? value : `remove selected ${label} filter ${value}`,
			},
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});
	const mergedLang = useLang(lang as any, {
		label,
		value,
	});

	return value ? (
		<CacheProvider>
			<a
				{...styling}
				className={classnames('ss__filter', className, internalClassName)}
				onClick={(e) => {
					link?.onClick && link.onClick(e);
					onClick && onClick(e);
				}}
				href={link?.href}
				tabIndex={0}
				{...mergedLang.filter?.all}
			>
				<Button {...subProps.button}>
					<Icon {...subProps.icon} {...(typeof icon == 'string' ? { icon: icon } : (icon as Partial<IconProps>))} />
					{!hideFacetLabel && (
						<span className="ss__filter__label">
							{label}
							{separator && <span className="ss__filter__label__separator">{separator}</span>}
						</span>
					)}
					<span className="ss__filter__value">{value}</span>
				</Button>
			</a>
		</CacheProvider>
	) : null;
});

export type FilterProps = {
	lang?: Partial<FilterLang>;
	filter?: FilterType;
	url?: UrlManager;
} & FilterTemplatesLegalProps &
	ComponentProps<FilterProps>;

export type FilterTemplatesLegalProps = {
	facetLabel?: string;
	valueLabel?: string;
	hideFacetLabel?: boolean;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
	icon?: IconType | Partial<IconProps>;
	separator?: string;
};

export interface FilterLang {
	filter: Lang<{
		label?: string;
		value?: string;
	}>;
}

interface FilterSubProps {
	button: ButtonProps;
	icon: IconProps;
}

export type FilterNames = 'clear-all';
