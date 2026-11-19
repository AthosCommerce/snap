import { h, createContext, ComponentChildren, ComponentType } from 'preact';
import { useContext } from 'preact/hooks';
import type { AbstractStore } from '@athoscommerce/snap-store-mobx';
import { JSXComponent } from '../types';

const StoreContext = createContext<null | AbstractStore>(null);
const StoreProviderCast = StoreContext.Provider as JSXComponent;

export const StoreProvider = ({ children, store }: { children: ComponentChildren; store: AbstractStore }) => {
	return <StoreProviderCast value={store}>{children}</StoreProviderCast>;
};

export const useStore = () => useContext(StoreContext);

export function withStore<C extends ComponentType<any>>(Component: C): C {
	return ((props: any) => {
		const Comp = Component as JSXComponent;
		return <Comp store={useStore()} {...props} />;
	}) as C;
}
