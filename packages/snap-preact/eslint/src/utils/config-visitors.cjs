/**
 * AST visitors that find Snap Templates config object literals, shared by the rules in this
 * plugin. `onConfig` is called with the config ObjectExpression for:
 *
 *  - variables typed SnapTemplatesConfig / SnapTemplatesConfigLocked / SnapTemplatesConfigUnlocked
 *  - validateTemplatesConfig({...}) / validateTemplatesConfigUnlocked({...}) calls
 *  - inline configs passed to new SnapTemplates({...}) / new SnapHybrid({...})
 */

const VALIDATE_CONFIG_FUNCTION_NAMES = ['validateTemplatesConfig', 'validateTemplatesConfigUnlocked'];
const TEMPLATES_CONSTRUCTOR_NAMES = ['SnapTemplates', 'SnapHybrid'];

function createConfigVisitors(onConfig) {
	return {
		// Find variable declarations typed as SnapTemplatesConfig
		VariableDeclarator(node) {
			const typeAnnotation = node.id?.typeAnnotation?.typeAnnotation;
			if (!typeAnnotation) return;

			const typeName = typeAnnotation.typeName?.name || typeAnnotation.typeName?.right?.name;

			if (typeName === 'SnapTemplatesConfig' || typeName === 'SnapTemplatesConfigUnlocked' || typeName === 'SnapTemplatesConfigLocked') {
				const init = node.init;
				if (!init || init.type !== 'ObjectExpression') return;

				onConfig(init);
			}
		},

		// Find calls to validateTemplatesConfig/validateTemplatesConfigUnlocked
		CallExpression(node) {
			const calleeName = node.callee?.name;
			if (!VALIDATE_CONFIG_FUNCTION_NAMES.includes(calleeName)) return;

			const [configArg] = node.arguments;
			if (!configArg || configArg.type !== 'ObjectExpression') return;

			onConfig(configArg);
		},

		// Find inline configs passed directly to new SnapTemplates({...}) / new SnapHybrid({...})
		NewExpression(node) {
			const calleeName = node.callee?.name;
			if (!TEMPLATES_CONSTRUCTOR_NAMES.includes(calleeName)) return;

			let [configArg] = node.arguments;
			// Unwrap a single-argument wrapper call (e.g. an aliased validateTemplatesConfig import)
			// around the inline config. Calls named validateTemplatesConfig* are skipped here since
			// the CallExpression path already reports on them.
			if (
				configArg &&
				configArg.type === 'CallExpression' &&
				configArg.arguments.length === 1 &&
				!VALIDATE_CONFIG_FUNCTION_NAMES.includes(configArg.callee?.name)
			) {
				[configArg] = configArg.arguments;
			}
			if (!configArg || configArg.type !== 'ObjectExpression') return;

			onConfig(configArg);
		},
	};
}

module.exports = { createConfigVisitors };
