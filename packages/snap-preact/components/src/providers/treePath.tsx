import { h, createContext, ComponentChildren, ComponentType } from 'preact';
import { useContext } from 'preact/hooks';
import { JSXComponent } from '../types';

const TreePathContext = createContext<null | string>(null);
const TreePathProviderCast = TreePathContext.Provider as JSXComponent;

export const TreePathProvider = ({ children, path }: { children: ComponentChildren; path: string }) => {
	return <TreePathProviderCast value={path}>{children}</TreePathProviderCast>;
};

export const useTreePath = () => useContext(TreePathContext) || undefined;

export function withTreePath<C extends ComponentType<any>>(Component: C): C {
	return ((props: any) => {
		const Comp = Component as JSXComponent;
		const treePath = useTreePath();
		return <Comp treePath={treePath} {...props} />;
	}) as C;
}
