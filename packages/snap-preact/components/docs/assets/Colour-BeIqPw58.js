class e {
	get hex() {
		return this.hexValue ? this.hexValue : this.value;
	}
	get rgb() {
		return this.rgbValue ? this.rgbValue : this.value;
	}
	get contrast() {
		if (this.hexValue) {
			const t = parseInt(this.hexValue.slice(1, 3), 16),
				i = parseInt(this.hexValue.slice(3, 5), 16),
				n = parseInt(this.hexValue.slice(5, 7), 16),
				a = [t / 255, i / 255, n / 255].map((h) => (h <= 0.03928 ? h / 12.92 : Math.pow((h + 0.055) / 1.055, 2.4)));
			return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2] <= 0.179 ? '#ffffff' : '#000000';
		}
		return this.value;
	}
	constructor(t) {
		(this.value = t),
			t &&
				(t.match(/^#[a,b,c,d,e,f,0-9]{3}$/i) && (t = `#${t[1].repeat(2)}${t[2].repeat(2)}${t[3].repeat(2)}`),
				e.isHex(t) ? ((this.hexValue = t), (this.rgbValue = e.hexToRgb(t))) : e.isRgb(t) && ((this.rgbValue = t), (this.hexValue = e.rgbToHex(t))));
	}
	shift(t) {
		return new e(e.brightness(this.hex, t));
	}
	lighten(t) {
		return t < 0 ? this : new e(e.brightness(this.hex, t));
	}
	darken(t) {
		return t < 0 ? this : new e(e.brightness(this.hex, -t));
	}
	opacity(t) {
		return new e(e.opacity(this.hex, t));
	}
	transparency(t) {
		return t < 0 ? this : new e(e.opacity(this.hex, t));
	}
	opaque(t) {
		return t < 0 ? this : new e(e.opacity(this.hex, -t));
	}
	static isRgb(t) {
		return !!(
			t.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]*\)$/i) ||
			t.match(/^rgba?\([0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+[0-9]{1,3}[\s,\,]+0?\.?[0-9]+%?[\s,\,]*\)$/i)
		);
	}
	static isHex(t) {
		return !!(t.match(/^#[a,b,c,d,e,f,0-9]{6}$/i) || t.match(/^#[a,b,c,d,e,f,0-9]{8}$/i));
	}
	static hexToRgb(t) {
		if (!e.isHex(t)) throw 'invalid hex supplied';
		const i = parseInt(t.slice(1, 3), 16),
			n = parseInt(t.slice(3, 5), 16),
			c = parseInt(t.slice(5, 7), 16),
			a = parseInt(t.slice(7, 9), 16);
		return Number.isInteger(a) ? `rgba(${i}, ${n}, ${c}, ${u(a / 255)})` : `rgb(${i}, ${n}, ${c})`;
	}
	static rgbToHex(t) {
		if (!e.isRgb(t)) throw 'invalid rgb supplied';
		const [i, n, c, a] = (t.match(/[0-9]?\.?[0-9]+%?/g) || []).map((s, h) => {
			if (h == 3) {
				s.match(/%/) && (s = (Number(s.replace('%', '').trim()) / 100).toString());
				let r = Number(s);
				(Number.isNaN(r) || r > 1) && (r = 1), r < 0 && (r = 0), (s = Math.floor(r * 255).toString());
			}
			return Number(s).toString(16).padStart(2, '0');
		});
		return `#${i}${n}${c}${a || ''}`;
	}
	static opacity(t, i) {
		let n = !1;
		if ((t && e.isRgb(t) && ((n = !0), (t = e.rgbToHex(t))), !t || !e.isHex(t) || !Number.isInteger(i))) return t;
		i > 255 && (i = 255), i < -255 && (i = -255);
		const c = t.slice(7, 9) || 'ff';
		let s = parseInt(c, 16) - i;
		s > 255 ? (s = 255) : s < 0 && (s = 0);
		const h = s.toString(16).padStart(2, '0'),
			r = `${t.slice(0, 7)}${h}`;
		return n ? e.hexToRgb(r) : r;
	}
	static brightness(t, i) {
		let n = !1;
		if ((t && e.isRgb(t) && ((n = !0), (t = e.rgbToHex(t))), !t || !e.isHex(t) || !Number.isInteger(i))) return t;
		i > 255 && (i = 255), i < -255 && (i = -255);
		const c = t.slice(1, 7),
			a = parseInt(c, 16);
		let s = (a & 255) + i;
		s > 255 ? (s = 255) : s < 0 && (s = 0);
		let h = ((a >> 8) & 255) + i;
		h > 255 ? (h = 255) : h < 0 && (h = 0);
		let r = (a >> 16) + i;
		r > 255 ? (r = 255) : r < 0 && (r = 0);
		const b = `#${(s | (h << 8) | (r << 16)).toString(16).padStart(6, '0')}${t.slice(7, 9)}`;
		return n ? e.hexToRgb(b) : b;
	}
}
function u(g) {
	const t = Math.floor(g),
		i = g - t;
	if (!i) return g;
	const n = Math.floor(i * 10) * 10,
		c = Math.round(g * 100 - n);
	return t + (n + c) / 100;
}
export { e as C };
