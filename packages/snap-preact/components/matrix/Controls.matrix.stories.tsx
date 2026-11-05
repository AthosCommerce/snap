import { h } from 'preact';

import { Button, ButtonProps } from '../src/components/Atoms/Button';
import { Dropdown, DropdownProps } from '../src/components/Atoms/Dropdown';
import { Checkbox, CheckboxProps } from '../src/components/Molecules/Checkbox';
import { Radio, RadioProps } from '../src/components/Molecules/Radio';
import { Select, SelectProps } from '../src/components/Molecules/Select';
import { SearchInput, SearchInputProps } from '../src/components/Molecules/SearchInput';
import { List, ListProps } from '../src/components/Molecules/List';
import { RadioList, RadioListProps } from '../src/components/Molecules/RadioList';
import { QuantityPicker, QuantityPickerProps } from '../src/components/Molecules/QuantityPicker';
import { Matrix } from './Matrix';
import type { ListOption } from '../src/types';

export default {
	title: 'Matrix/Controls',
};

// sort-like options: one long label, one disabled
const options: ListOption[] = [
	{ value: 'relevance', label: 'Relevance' },
	{ value: 'price-asc', label: 'Price: Low to High' },
	{ value: 'price-desc', label: 'Price: High to Low' },
	{ value: 'newest', label: 'Newest Arrivals in the Last Thirty Days' },
	{ value: 'rating', label: 'Top Rated', disabled: true },
];

// layout-like options with icons
const iconOptions: ListOption[] = [
	{ value: 1, label: 'Grid', icon: 'layout-grid' },
	{ value: 2, label: 'Large Grid', icon: 'layout-large' },
	{ value: 3, label: 'List', icon: 'layout-list' },
];

const brand = { backgroundColor: '#3a23ad', borderColor: '#3a23ad', color: '#ffffff' };

export const Buttons = {
	render: () => (
		<Matrix<ButtonProps>
			minWidth="220px"
			cases={[
				{ props: { content: 'Add to Cart' } },
				{ props: { content: 'Add to Cart and Keep Shopping for More Things' } },
				{ props: { content: 'Add to Cart', icon: 'bag' } },
				{ props: { icon: 'bag', content: '' }, label: 'icon=bag (no content)' },
				{ props: { content: 'Add to Cart', disabled: true } },
				{ props: { content: 'Add to Cart', native: true } },
				{ props: { content: 'Add to Cart', native: true, disabled: true } },
				{ props: brand, label: 'brand colors' },
				{ props: { content: 'Add to Cart', backgroundColor: '#f2e8a8' } },
				{ props: { content: 'Add to Cart', backgroundColor: '#ffffff', borderColor: '#000000' } },
			].map((matrixCase) => ({ ...matrixCase, props: { content: 'Add to Cart', ...matrixCase.props } }))}
			render={(props) => <Button {...props} />}
		/>
	),
};

export const Checkboxes = {
	render: () => (
		<Matrix<CheckboxProps>
			minWidth="160px"
			cases={[
				{},
				{ props: { checked: true } },
				{ props: { disabled: true } },
				{ props: { checked: true, disabled: true } },
				{ props: { native: true } },
				{ props: { native: true, checked: true } },
				{ props: { native: true, disabled: true } },
				{ props: { checked: true, size: '24px' } },
				{ props: { checked: true, color: '#3a23ad', iconColor: '#3a23ad' } },
				{ props: { checked: true, icon: 'check-thin' } },
			]}
			render={(props) => <Checkbox {...props} />}
		/>
	),
};

export const Radios = {
	render: () => (
		<Matrix<RadioProps>
			minWidth="160px"
			cases={[
				{},
				{ props: { checked: true } },
				{ props: { disabled: true } },
				{ props: { checked: true, disabled: true } },
				{ props: { native: true } },
				{ props: { native: true, checked: true } },
				{ props: { native: true, disabled: true } },
				{ props: { checked: true, size: '24px' } },
				{ props: { checked: true, color: '#3a23ad' } },
			]}
			render={(props) => <Radio {...props} />}
		/>
	),
};

export const Selects = {
	render: () => (
		<Matrix<SelectProps>
			minWidth="280px"
			minHeight="240px"
			cases={[
				{},
				{ props: { hideLabel: true } },
				{ props: { hideLabelOnSelection: true } },
				{ props: { hideSelection: true } },
				{ props: { hideIcon: true } },
				{ props: { separator: ' - ' } },
				{ props: { clearSelection: 'Clear' } },
				{ props: { label: 'Sort Results By This Very Long Label' } },
				{ props: { disabled: true } },
				{ props: { startOpen: true } },
				{ props: { startOpen: true, clearSelection: 'Clear' } },
				{ props: { startOpen: true, options: iconOptions, selected: iconOptions[0], label: 'Layout' } },
				{ props: { startOpen: true, options: iconOptions, selected: iconOptions[0], label: 'Layout', hideOptionIcons: true } },
				{ props: { startOpen: true, options: iconOptions, selected: iconOptions[0], label: 'Layout', hideOptionLabels: true } },
				{ props: { startOpen: true, ...brand, iconColor: '#ffffff' }, label: 'open, brand colors' },
				{ props: { startOpen: true, backgroundColor: '#ffffff', borderColor: '#000000' } },
				{ props: { native: true } },
				{ props: { native: true, hideLabel: true } },
				{ props: { native: true, disabled: true } },
				{ props: { native: true, ...brand }, label: 'native, brand colors' },
			]}
			render={(props) => <Select label="Sort By" options={options} selected={options[1]} {...props} />}
		/>
	),
};

export const Dropdowns = {
	render: () => (
		<Matrix<DropdownProps>
			minHeight="160px"
			cases={[{}, { props: { startOpen: true } }, { props: { disabled: true } }, { props: { startOpen: true, disableOverlay: true } }]}
			render={(props) => <Dropdown button="Toggle Dropdown" content="Dropdown content that is a sentence long." {...props} />}
		/>
	),
};

export const SearchInputs = {
	render: () => (
		<Matrix<SearchInputProps>
			minWidth="300px"
			cases={[
				{},
				{ props: { placeholderText: 'Search over 10,000 products in our catalog' } },
				{ props: { hideSubmitSearchButton: true } },
				{ props: { hideCloseSearchButton: false } },
				{ props: { hideCloseSearchButton: false, hideSubmitSearchButton: true } },
				{ props: { disabled: true } },
			]}
			render={(props) => <SearchInput {...props} />}
		/>
	),
};

export const Lists = {
	render: () => (
		<Matrix<ListProps>
			minWidth="280px"
			cases={[
				{},
				{ props: { titleText: 'Sort By' } },
				{ props: { multiSelect: true, selected: [options[0], options[1]] } },
				{ props: { hideOptionCheckboxes: true } },
				{ props: { disabled: true } },
				{ props: { horizontal: true } },
				{ props: { horizontal: true, hideOptionCheckboxes: true } },
				{ props: { native: true } },
				{ props: { options: iconOptions, selected: iconOptions[0] } },
				{ props: { options: iconOptions, selected: iconOptions[0], hideOptionIcons: true } },
				{ props: { options: iconOptions, selected: iconOptions[0], hideOptionLabels: true } },
				{ props: { options: iconOptions, selected: iconOptions[0], hideOptionLabels: true, hideOptionCheckboxes: true, horizontal: true } },
			]}
			render={(props) => <List options={options} selected={options[1]} {...props} />}
		/>
	),
};

export const RadioLists = {
	render: () => (
		<Matrix<RadioListProps>
			minWidth="280px"
			cases={[
				{},
				{ props: { titleText: 'Sort By' } },
				{ props: { hideOptionRadios: true } },
				{ props: { disabled: true } },
				{ props: { horizontal: true } },
				{ props: { horizontal: true, hideOptionRadios: true } },
				{ props: { native: true } },
				{ props: { options: iconOptions, selected: iconOptions[0] } },
				{ props: { options: iconOptions, selected: iconOptions[0], hideOptionIcons: true } },
				{ props: { options: iconOptions, selected: iconOptions[0], hideOptionLabels: true } },
				{ props: { options: iconOptions, selected: iconOptions[0], hideOptionLabels: true, horizontal: true } },
				{ props: { options: iconOptions, selected: iconOptions[0], hideOptionLabels: true, hideOptionRadios: true, horizontal: true } },
			]}
			render={(props) => <RadioList options={options} selected={options[1]} {...props} />}
		/>
	),
};

export const QuantityPickers = {
	render: () => (
		<Matrix<QuantityPickerProps>
			minWidth="200px"
			cases={[
				{},
				{ props: { startValue: 3 } },
				{ props: { startValue: 5, max: 5 } },
				{ props: { startValue: 1, min: 1 } },
				{ props: { disabled: true } },
				{ props: { hideButtons: true } },
				{ props: { label: 'Quantity' } },
				{ props: { label: 'Quantity', hideButtons: true } },
			]}
			render={(props) => <QuantityPicker {...props} />}
		/>
	),
};
