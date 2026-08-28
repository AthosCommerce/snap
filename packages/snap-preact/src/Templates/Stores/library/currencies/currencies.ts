// Currencies supported by Snap Templates — matches the list of currencies supported by Shopify (ISO 4217).
// Symbols, decimal places and separators are sourced from CLDR — decimalPlaces is only set when not 2, and
// separators are only set when the currency has a single dominant convention that differs from the component
// defaults (multi-locale currencies like EUR/USD/CHF/CAD keep the defaults and can be overridden per site).
export const currencies = {
	// United Arab Emirates Dirham
	aed: {
		components: {
			price: {
				symbol: 'AED ',
			},
		},
	},
	// Afghan Afghani
	afn: {
		components: {
			price: {
				symbol: '؋',
				decimalPlaces: 0,
			},
		},
	},
	// Albanian Lek
	all: {
		components: {
			price: {
				symbol: 'ALL ',
				decimalPlaces: 0,
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Armenian Dram
	amd: {
		components: {
			price: {
				symbol: '֏',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Netherlands Antillean Guilder
	ang: {
		components: {
			price: {
				symbol: 'ANG ',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Angolan Kwanza
	aoa: {
		components: {
			price: {
				symbol: 'Kz',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Argentine Peso
	ars: {
		components: {
			price: {
				symbol: '$',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Australian Dollar
	aud: {
		components: {
			price: {
				symbol: 'AU$',
			},
		},
	},
	// Aruban Florin
	awg: {
		components: {
			price: {
				symbol: 'AWG ',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Azerbaijani Manat
	azn: {
		components: {
			price: {
				symbol: '₼',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Bosnia-Herzegovina Convertible Mark
	bam: {
		components: {
			price: {
				symbol: 'KM',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Barbadian Dollar
	bbd: {
		components: {
			price: {
				symbol: '$',
			},
		},
	},
	// Bangladeshi Taka
	bdt: {
		components: {
			price: {
				symbol: '৳',
			},
		},
	},
	// Bulgarian Lev
	bgn: {
		components: {
			price: {
				symbol: 'BGN ',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Bahraini Dinar
	bhd: {
		components: {
			price: {
				symbol: 'BHD ',
				decimalPlaces: 3,
			},
		},
	},
	// Burundian Franc
	bif: {
		components: {
			price: {
				symbol: 'BIF ',
				decimalPlaces: 0,
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Bermudan Dollar
	bmd: {
		components: {
			price: {
				symbol: '$',
			},
		},
	},
	// Brunei Dollar
	bnd: {
		components: {
			price: {
				symbol: '$',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Bolivian Boliviano
	bob: {
		components: {
			price: {
				symbol: 'Bs',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Brazilian Real
	brl: {
		components: {
			price: {
				symbol: 'R$',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Bahamian Dollar
	bsd: {
		components: {
			price: {
				symbol: '$',
			},
		},
	},
	// Bhutanese Ngultrum
	btn: {
		components: {
			price: {
				symbol: 'BTN ',
			},
		},
	},
	// Botswanan Pula
	bwp: {
		components: {
			price: {
				symbol: 'P',
			},
		},
	},
	// Belarusian Ruble
	byn: {
		components: {
			price: {
				symbol: 'BYN ',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Belize Dollar
	bzd: {
		components: {
			price: {
				symbol: '$',
			},
		},
	},
	// Canadian Dollar
	cad: {
		components: {
			price: {
				symbol: 'CA$',
			},
		},
	},
	// Congolese Franc
	cdf: {
		components: {
			price: {
				symbol: 'CDF ',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Swiss Franc
	chf: {
		components: {
			price: {
				symbol: 'CHF ',
			},
		},
	},
	// Chilean Peso
	clp: {
		components: {
			price: {
				symbol: '$',
				decimalPlaces: 0,
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Chinese Yuan
	cny: {
		components: {
			price: {
				symbol: 'CN¥',
			},
		},
	},
	// Colombian Peso
	cop: {
		components: {
			price: {
				symbol: '$',
				decimalPlaces: 0,
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Costa Rican Colón
	crc: {
		components: {
			price: {
				symbol: '₡',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Cape Verdean Escudo
	cve: {
		components: {
			price: {
				symbol: 'CVE ',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Czech Koruna
	czk: {
		components: {
			price: {
				symbol: 'Kč',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Djiboutian Franc
	djf: {
		components: {
			price: {
				symbol: 'DJF ',
				decimalPlaces: 0,
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Danish Krone
	dkk: {
		components: {
			price: {
				symbol: 'kr',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Dominican Peso
	dop: {
		components: {
			price: {
				symbol: '$',
			},
		},
	},
	// Algerian Dinar
	dzd: {
		components: {
			price: {
				symbol: 'DZD ',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Egyptian Pound
	egp: {
		components: {
			price: {
				symbol: 'E£',
			},
		},
	},
	// Eritrean Nakfa
	ern: {
		components: {
			price: {
				symbol: 'ERN ',
			},
		},
	},
	// Ethiopian Birr
	etb: {
		components: {
			price: {
				symbol: 'ETB ',
			},
		},
	},
	// Euro
	eur: {
		components: {
			price: {
				symbol: '€',
			},
		},
	},
	// Fijian Dollar
	fjd: {
		components: {
			price: {
				symbol: '$',
			},
		},
	},
	// Falkland Islands Pound
	fkp: {
		components: {
			price: {
				symbol: '£',
			},
		},
	},
	// British Pound
	gbp: {
		components: {
			price: {
				symbol: '£',
			},
		},
	},
	// Georgian Lari
	gel: {
		components: {
			price: {
				symbol: '₾',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Ghanaian Cedi
	ghs: {
		components: {
			price: {
				symbol: 'GH₵',
			},
		},
	},
	// Gibraltar Pound
	gip: {
		components: {
			price: {
				symbol: '£',
			},
		},
	},
	// Gambian Dalasi
	gmd: {
		components: {
			price: {
				symbol: 'GMD ',
			},
		},
	},
	// Guinean Franc
	gnf: {
		components: {
			price: {
				symbol: 'FG',
				decimalPlaces: 0,
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Guatemalan Quetzal
	gtq: {
		components: {
			price: {
				symbol: 'Q',
			},
		},
	},
	// Guyanaese Dollar
	gyd: {
		components: {
			price: {
				symbol: '$',
			},
		},
	},
	// Hong Kong Dollar
	hkd: {
		components: {
			price: {
				symbol: 'HK$',
			},
		},
	},
	// Honduran Lempira
	hnl: {
		components: {
			price: {
				symbol: 'L',
			},
		},
	},
	// Croatian Kuna
	hrk: {
		components: {
			price: {
				symbol: 'kn',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Haitian Gourde
	htg: {
		components: {
			price: {
				symbol: 'HTG ',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Hungarian Forint
	huf: {
		components: {
			price: {
				symbol: 'Ft',
				decimalPlaces: 0,
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Indonesian Rupiah
	idr: {
		components: {
			price: {
				symbol: 'Rp',
				decimalPlaces: 0,
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Israeli New Shekel
	ils: {
		components: {
			price: {
				symbol: '₪',
			},
		},
	},
	// Indian Rupee
	inr: {
		components: {
			price: {
				symbol: '₹',
			},
		},
	},
	// Iraqi Dinar
	iqd: {
		components: {
			price: {
				symbol: 'IQD ',
				decimalPlaces: 0,
			},
		},
	},
	// Iranian Rial
	irr: {
		components: {
			price: {
				symbol: 'IRR ',
				decimalPlaces: 0,
			},
		},
	},
	// Icelandic Króna
	isk: {
		components: {
			price: {
				symbol: 'kr',
				decimalPlaces: 0,
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Jersey Pound
	jep: {
		components: {
			price: {
				symbol: '£',
			},
		},
	},
	// Jamaican Dollar
	jmd: {
		components: {
			price: {
				symbol: '$',
			},
		},
	},
	// Jordanian Dinar
	jod: {
		components: {
			price: {
				symbol: 'JOD ',
				decimalPlaces: 3,
			},
		},
	},
	// Japanese Yen
	jpy: {
		components: {
			price: {
				symbol: '¥',
				decimalPlaces: 0,
			},
		},
	},
	// Kenyan Shilling
	kes: {
		components: {
			price: {
				symbol: 'KES ',
			},
		},
	},
	// Kyrgyz Som
	kgs: {
		components: {
			price: {
				symbol: '⃀',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Cambodian Riel
	khr: {
		components: {
			price: {
				symbol: '៛',
			},
		},
	},
	// Kiribati Dollar
	kid: {
		components: {
			price: {
				symbol: '$',
			},
		},
	},
	// Comorian Franc
	kmf: {
		components: {
			price: {
				symbol: 'CF',
				decimalPlaces: 0,
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// South Korean Won
	krw: {
		components: {
			price: {
				symbol: '₩',
				decimalPlaces: 0,
			},
		},
	},
	// Kuwaiti Dinar
	kwd: {
		components: {
			price: {
				symbol: 'KWD ',
				decimalPlaces: 3,
			},
		},
	},
	// Cayman Islands Dollar
	kyd: {
		components: {
			price: {
				symbol: '$',
			},
		},
	},
	// Kazakhstani Tenge
	kzt: {
		components: {
			price: {
				symbol: '₸',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Laotian Kip
	lak: {
		components: {
			price: {
				symbol: '₭',
				decimalPlaces: 0,
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Lebanese Pound
	lbp: {
		components: {
			price: {
				symbol: 'L£',
				decimalPlaces: 0,
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Sri Lankan Rupee
	lkr: {
		components: {
			price: {
				symbol: 'Rs',
			},
		},
	},
	// Liberian Dollar
	lrd: {
		components: {
			price: {
				symbol: '$',
			},
		},
	},
	// Lesotho Loti
	lsl: {
		components: {
			price: {
				symbol: 'LSL ',
			},
		},
	},
	// Lithuanian Litas
	ltl: {
		components: {
			price: {
				symbol: 'Lt',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Latvian Lats
	lvl: {
		components: {
			price: {
				symbol: 'Ls',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Libyan Dinar
	lyd: {
		components: {
			price: {
				symbol: 'LYD ',
				decimalPlaces: 3,
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Moroccan Dirham
	mad: {
		components: {
			price: {
				symbol: 'MAD ',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Moldovan Leu
	mdl: {
		components: {
			price: {
				symbol: 'MDL ',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Malagasy Ariary
	mga: {
		components: {
			price: {
				symbol: 'Ar',
				decimalPlaces: 0,
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Macedonian Denar
	mkd: {
		components: {
			price: {
				symbol: 'MKD ',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Myanmar Kyat
	mmk: {
		components: {
			price: {
				symbol: 'K',
				decimalPlaces: 0,
			},
		},
	},
	// Mongolian Tugrik
	mnt: {
		components: {
			price: {
				symbol: '₮',
			},
		},
	},
	// Macanese Pataca
	mop: {
		components: {
			price: {
				symbol: 'MOP ',
			},
		},
	},
	// Mauritanian Ouguiya
	mru: {
		components: {
			price: {
				symbol: 'MRU ',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Mauritian Rupee
	mur: {
		components: {
			price: {
				symbol: 'Rs',
			},
		},
	},
	// Maldivian Rufiyaa
	mvr: {
		components: {
			price: {
				symbol: 'MVR ',
			},
		},
	},
	// Malawian Kwacha
	mwk: {
		components: {
			price: {
				symbol: 'MWK ',
			},
		},
	},
	// Mexican Peso
	mxn: {
		components: {
			price: {
				symbol: 'MX$',
			},
		},
	},
	// Malaysian Ringgit
	myr: {
		components: {
			price: {
				symbol: 'RM',
			},
		},
	},
	// Mozambican Metical
	mzn: {
		components: {
			price: {
				symbol: 'MZN ',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Namibian Dollar
	nad: {
		components: {
			price: {
				symbol: '$',
			},
		},
	},
	// Nigerian Naira
	ngn: {
		components: {
			price: {
				symbol: '₦',
			},
		},
	},
	// Nicaraguan Córdoba
	nio: {
		components: {
			price: {
				symbol: 'C$',
			},
		},
	},
	// Norwegian Krone
	nok: {
		components: {
			price: {
				symbol: 'kr',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Nepalese Rupee
	npr: {
		components: {
			price: {
				symbol: 'Rs',
			},
		},
	},
	// New Zealand Dollar
	nzd: {
		components: {
			price: {
				symbol: 'NZ$',
			},
		},
	},
	// Omani Rial
	omr: {
		components: {
			price: {
				symbol: 'OMR ',
				decimalPlaces: 3,
			},
		},
	},
	// Panamanian Balboa
	pab: {
		components: {
			price: {
				symbol: 'PAB ',
			},
		},
	},
	// Peruvian Sol
	pen: {
		components: {
			price: {
				symbol: 'PEN ',
			},
		},
	},
	// Papua New Guinean Kina
	pgk: {
		components: {
			price: {
				symbol: 'PGK ',
			},
		},
	},
	// Philippine Peso
	php: {
		components: {
			price: {
				symbol: '₱',
			},
		},
	},
	// Pakistani Rupee
	pkr: {
		components: {
			price: {
				symbol: 'Rs',
				decimalPlaces: 0,
			},
		},
	},
	// Polish Zloty
	pln: {
		components: {
			price: {
				symbol: 'zł',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Paraguayan Guarani
	pyg: {
		components: {
			price: {
				symbol: '₲',
				decimalPlaces: 0,
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Qatari Riyal
	qar: {
		components: {
			price: {
				symbol: 'QAR ',
			},
		},
	},
	// Romanian Leu
	ron: {
		components: {
			price: {
				symbol: 'lei',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Serbian Dinar
	rsd: {
		components: {
			price: {
				symbol: 'RSD ',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Russian Ruble
	rub: {
		components: {
			price: {
				symbol: '₽',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Rwandan Franc
	rwf: {
		components: {
			price: {
				symbol: 'RF',
				decimalPlaces: 0,
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Saudi Riyal
	sar: {
		components: {
			price: {
				symbol: 'SAR ',
			},
		},
	},
	// Solomon Islands Dollar
	sbd: {
		components: {
			price: {
				symbol: '$',
			},
		},
	},
	// Seychellois Rupee
	scr: {
		components: {
			price: {
				symbol: 'SCR ',
			},
		},
	},
	// Sudanese Pound
	sdg: {
		components: {
			price: {
				symbol: 'SDG ',
			},
		},
	},
	// Swedish Krona
	sek: {
		components: {
			price: {
				symbol: 'kr',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Singapore Dollar
	sgd: {
		components: {
			price: {
				symbol: '$',
			},
		},
	},
	// St. Helena Pound
	shp: {
		components: {
			price: {
				symbol: '£',
			},
		},
	},
	// Sierra Leonean Leone
	sll: {
		components: {
			price: {
				symbol: 'Le',
				decimalPlaces: 0,
			},
		},
	},
	// Somali Shilling
	sos: {
		components: {
			price: {
				symbol: 'SOS ',
				decimalPlaces: 0,
			},
		},
	},
	// Surinamese Dollar
	srd: {
		components: {
			price: {
				symbol: '$',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// South Sudanese Pound
	ssp: {
		components: {
			price: {
				symbol: '£',
			},
		},
	},
	// São Tomé & Príncipe Dobra
	stn: {
		components: {
			price: {
				symbol: 'Db',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Syrian Pound
	syp: {
		components: {
			price: {
				symbol: '£',
				decimalPlaces: 0,
			},
		},
	},
	// Swazi Lilangeni
	szl: {
		components: {
			price: {
				symbol: 'SZL ',
			},
		},
	},
	// Thai Baht
	thb: {
		components: {
			price: {
				symbol: '฿',
			},
		},
	},
	// Tajikistani Somoni
	tjs: {
		components: {
			price: {
				symbol: 'TJS ',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Turkmenistani Manat
	tmt: {
		components: {
			price: {
				symbol: 'TMT ',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Tunisian Dinar
	tnd: {
		components: {
			price: {
				symbol: 'TND ',
				decimalPlaces: 3,
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Tongan Paʻanga
	top: {
		components: {
			price: {
				symbol: 'T$',
			},
		},
	},
	// Turkish Lira
	try: {
		components: {
			price: {
				symbol: '₺',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Trinidad & Tobago Dollar
	ttd: {
		components: {
			price: {
				symbol: '$',
			},
		},
	},
	// New Taiwan Dollar
	twd: {
		components: {
			price: {
				symbol: 'NT$',
			},
		},
	},
	// Tanzanian Shilling
	tzs: {
		components: {
			price: {
				symbol: 'TZS ',
			},
		},
	},
	// Ukrainian Hryvnia
	uah: {
		components: {
			price: {
				symbol: '₴',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Ugandan Shilling
	ugx: {
		components: {
			price: {
				symbol: 'UGX ',
				decimalPlaces: 0,
			},
		},
	},
	// US Dollar
	usd: {
		components: {
			price: {
				symbol: '$',
			},
		},
	},
	// Uruguayan Peso
	uyu: {
		components: {
			price: {
				symbol: '$',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Uzbekistani Som
	uzs: {
		components: {
			price: {
				symbol: 'UZS ',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Venezuelan Digital Bolívar
	ved: {
		components: {
			price: {
				symbol: 'Bs.D',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Venezuelan Bolívar
	ves: {
		components: {
			price: {
				symbol: 'VES ',
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Vietnamese Dong
	vnd: {
		components: {
			price: {
				symbol: '₫',
				decimalPlaces: 0,
				thousandsSeparator: '.',
				decimalSeparator: ',',
			},
		},
	},
	// Vanuatu Vatu
	vuv: {
		components: {
			price: {
				symbol: 'VUV ',
				decimalPlaces: 0,
			},
		},
	},
	// Samoan Tala
	wst: {
		components: {
			price: {
				symbol: 'WST ',
			},
		},
	},
	// Central African CFA Franc
	xaf: {
		components: {
			price: {
				symbol: 'FCFA',
				decimalPlaces: 0,
			},
		},
	},
	// East Caribbean Dollar
	xcd: {
		components: {
			price: {
				symbol: 'EC$',
			},
		},
	},
	// West African CFA Franc
	xof: {
		components: {
			price: {
				symbol: 'F CFA',
				decimalPlaces: 0,
			},
		},
	},
	// CFP Franc
	xpf: {
		components: {
			price: {
				symbol: 'CFPF',
				decimalPlaces: 0,
			},
		},
	},
	// Yemeni Rial
	yer: {
		components: {
			price: {
				symbol: 'YER ',
				decimalPlaces: 0,
			},
		},
	},
	// South African Rand
	zar: {
		components: {
			price: {
				symbol: 'R',
				thousandsSeparator: '\u00A0',
				decimalSeparator: ',',
			},
		},
	},
	// Zambian Kwacha
	zmw: {
		components: {
			price: {
				symbol: 'ZK',
			},
		},
	},
};
