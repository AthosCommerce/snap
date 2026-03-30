import { h, cloneElement } from 'preact';

export const cloneWithProps = (input: any, props?: any): any => {
	if (!input) {
		return;
	} else if (typeof input == 'function') {
		/* 
			calling component functions directly with input(props) doesn't work for all component types. In Preact/React, 
			components should be instantiated as elements using h() (or JSX), not called directly as functions.
			Using Preact's h() function (h(input, props)) which properly creates VNodes and handles component
			instantiation through Preact's lifecycle. This should fix the "Cannot set properties of undefined" error.

			see noResults component default 'Result' example for where this was an issue - the default Result component is a functional component that relies on hooks, which won't work if called directly as a function.
		*/
		return h(input, props);
	} else if (typeof input == 'string' || typeof input == 'number' || typeof input == 'boolean') {
		return input;
	} else if (Array.isArray(input)) {
		return input.map((entry) => {
			return cloneWithProps(entry, props);
		});
	} else if (typeof input?.type == 'string') {
		// don't want to clone native elements
		return input;
	} else if (typeof input?.type == 'function') {
		// VNode with functional component type - create new element with merged props
		return h(input.type, { ...input.props, ...props });
	}

	// clone element and it's children if it has them
	return cloneElement(input, props, input.props?.children && cloneWithProps(input.props.children, props));
};
