function a(o) {
	return (o == null ? [] : Array.isArray(o) ? o : [o]).map((n) => `${n?.value}:${n?.label}`).join('|');
}
export { a as s };
