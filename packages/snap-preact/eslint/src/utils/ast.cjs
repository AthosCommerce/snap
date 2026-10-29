/**
 * AST helpers shared by the rules in this plugin.
 */

/**
 * Find a property by name in an ObjectExpression
 */
function findProperty(objectExpression, name) {
	if (!objectExpression) return undefined;
	return objectExpression.properties.find((p) => p.type === 'Property' && getPropertyName(p) === name);
}

/**
 * Get the name of a property key (handles Identifier and Literal keys)
 */
function getPropertyName(property) {
	if (property.key.type === 'Identifier') return property.key.name;
	if (property.key.type === 'Literal') return String(property.key.value);
	return null;
}

module.exports = { findProperty, getPropertyName };
