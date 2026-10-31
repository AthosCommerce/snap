import { s as c, y as i } from './iframe-Bc4KSH0T.js';
const d = (o, l, e) => {
	const [a, n] = c(void 0);
	return (
		i(() => {
			o.getController(e.id)
				.then((t) => {
					n(t);
				})
				.catch(async () => {
					let t = e;
					if (l === 'recommendation' && !e.plugins && !e.middleware)
						try {
							const r = await o.getInstantiator('recommendation');
							t = { ...e, plugins: r.config.config.plugins, middleware: r.config.config.middleware };
						} catch {}
					try {
						const r = await o.createController(l, t);
						n(r);
					} catch (r) {
						console.error(`useCreateController: failed to create controller "${e.id}"`, r);
					}
				});
		}, []),
		a
	);
};
export { d as u };
