import { h, createContext, ComponentChildren, ComponentType } from 'preact';
import { useContext } from 'preact/hooks';
import type { Snap, SnapTemplates } from '../../../src';
import { JSXComponent } from '../types';

const SnapContext = createContext<undefined | Snap | SnapTemplates>(undefined);
const SnapProviderCast = SnapContext.Provider as JSXComponent;

export const SnapProvider = ({ children, snap }: { children: ComponentChildren; snap: Snap }) => {
	return <SnapProviderCast value={snap}>{children}</SnapProviderCast>;
};

export const useSnap = () => useContext(SnapContext);

export function withSnap<C extends ComponentType<any>>(Component: C): C {
	return ((props: any) => {
		const Comp = Component as JSXComponent;
		return <Comp snap={useSnap()} {...props} />;
	}) as C;
}
