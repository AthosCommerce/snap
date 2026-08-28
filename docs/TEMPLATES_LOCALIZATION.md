## Localization

Snap Templates localization is controlled by two [config](TEMPLATES_CONFIG.md) options: `config.language` selects the text translations applied across components, and `config.currency` selects how prices are displayed. Both can also be changed at run-time via `window.athos.templates.setLanguage()` and `window.athos.templates.setCurrency()`.

### Supported Languages

Languages use ISO 639 codes and are case-insensitive. Default translations can be overridden per component via `config.translations`.

| Code | Language |
|------|----------|
| `EN` | English |
| `ES` | Spanish (Español) |
| `FR` | French (Français) |
| `AR` | Arabic (العربية) |
| `ZH` | Chinese (中文) |
| `DE` | German (Deutsch) |
| `RU` | Russian (Русский) |
| `JA` | Japanese (日本語) |
| `PT` | Portuguese (Português) |
| `KO` | Korean (한국어) |
| `IT` | Italian (Italiano) |
| `HI` | Hindi (हिन्दी) |
| `TR` | Turkish (Türkçe) |
| `VI` | Vietnamese (Tiếng Việt) |
| `NL` | Dutch (Nederlands) |

### Supported Currencies

Currencies use ISO 4217 codes and are case-insensitive - the list matches the currencies supported by Shopify. The example column shows how a price is displayed by default for each currency; the symbol, decimal places, and separators can each be overridden via theme overrides on the `price` component.

| Code | Currency | Example |
|------|----------|---------|
| `AED` | United Arab Emirates Dirham | AED 1,234,567.89 |
| `AFN` | Afghan Afghani | ؋1,234,567 |
| `ALL` | Albanian Lek | ALL 1 234 567 |
| `AMD` | Armenian Dram | ֏1 234 567,89 |
| `ANG` | Netherlands Antillean Guilder | ANG 1.234.567,89 |
| `AOA` | Angolan Kwanza | Kz1 234 567,89 |
| `ARS` | Argentine Peso | $1.234.567,89 |
| `AUD` | Australian Dollar | AU$1,234,567.89 |
| `AWG` | Aruban Florin | AWG 1.234.567,89 |
| `AZN` | Azerbaijani Manat | ₼1.234.567,89 |
| `BAM` | Bosnia-Herzegovina Convertible Mark | KM1.234.567,89 |
| `BBD` | Barbadian Dollar | $1,234,567.89 |
| `BDT` | Bangladeshi Taka | ৳1,234,567.89 |
| `BGN` | Bulgarian Lev | BGN 1 234 567,89 |
| `BHD` | Bahraini Dinar | BHD 1,234,567.890 |
| `BIF` | Burundian Franc | BIF 1 234 567 |
| `BMD` | Bermudan Dollar | $1,234,567.89 |
| `BND` | Brunei Dollar | $1.234.567,89 |
| `BOB` | Bolivian Boliviano | Bs1.234.567,89 |
| `BRL` | Brazilian Real | R$1.234.567,89 |
| `BSD` | Bahamian Dollar | $1,234,567.89 |
| `BTN` | Bhutanese Ngultrum | BTN 1,234,567.89 |
| `BWP` | Botswanan Pula | P1,234,567.89 |
| `BYN` | Belarusian Ruble | BYN 1 234 567,89 |
| `BZD` | Belize Dollar | $1,234,567.89 |
| `CAD` | Canadian Dollar | CA$1,234,567.89 |
| `CDF` | Congolese Franc | CDF 1 234 567,89 |
| `CHF` | Swiss Franc | CHF 1,234,567.89 |
| `CLP` | Chilean Peso | $1.234.567 |
| `CNY` | Chinese Yuan | CN¥1,234,567.89 |
| `COP` | Colombian Peso | $1.234.567 |
| `CRC` | Costa Rican Colón | ₡1 234 567,89 |
| `CVE` | Cape Verdean Escudo | CVE 1 234 567,89 |
| `CZK` | Czech Koruna | Kč1 234 567,89 |
| `DJF` | Djiboutian Franc | DJF 1 234 567 |
| `DKK` | Danish Krone | kr1.234.567,89 |
| `DOP` | Dominican Peso | $1,234,567.89 |
| `DZD` | Algerian Dinar | DZD 1.234.567,89 |
| `EGP` | Egyptian Pound | E£1,234,567.89 |
| `ERN` | Eritrean Nakfa | ERN 1,234,567.89 |
| `ETB` | Ethiopian Birr | ETB 1,234,567.89 |
| `EUR` | Euro | €1,234,567.89 |
| `FJD` | Fijian Dollar | $1,234,567.89 |
| `FKP` | Falkland Islands Pound | £1,234,567.89 |
| `GBP` | British Pound | £1,234,567.89 |
| `GEL` | Georgian Lari | ₾1 234 567,89 |
| `GHS` | Ghanaian Cedi | GH₵1,234,567.89 |
| `GIP` | Gibraltar Pound | £1,234,567.89 |
| `GMD` | Gambian Dalasi | GMD 1,234,567.89 |
| `GNF` | Guinean Franc | FG1 234 567 |
| `GTQ` | Guatemalan Quetzal | Q1,234,567.89 |
| `GYD` | Guyanaese Dollar | $1,234,567.89 |
| `HKD` | Hong Kong Dollar | HK$1,234,567.89 |
| `HNL` | Honduran Lempira | L1,234,567.89 |
| `HRK` | Croatian Kuna | kn1.234.567,89 |
| `HTG` | Haitian Gourde | HTG 1 234 567,89 |
| `HUF` | Hungarian Forint | Ft1 234 567 |
| `IDR` | Indonesian Rupiah | Rp1.234.567 |
| `ILS` | Israeli New Shekel | ₪1,234,567.89 |
| `INR` | Indian Rupee | ₹1,234,567.89 |
| `IQD` | Iraqi Dinar | IQD 1,234,567 |
| `IRR` | Iranian Rial | IRR 1,234,567 |
| `ISK` | Icelandic Króna | kr1.234.567 |
| `JEP` | Jersey Pound | £1,234,567.89 |
| `JMD` | Jamaican Dollar | $1,234,567.89 |
| `JOD` | Jordanian Dinar | JOD 1,234,567.890 |
| `JPY` | Japanese Yen | ¥1,234,567 |
| `KES` | Kenyan Shilling | KES 1,234,567.89 |
| `KGS` | Kyrgyz Som | ⃀1 234 567,89 |
| `KHR` | Cambodian Riel | ៛1,234,567.89 |
| `KID` | Kiribati Dollar | $1,234,567.89 |
| `KMF` | Comorian Franc | CF1 234 567 |
| `KRW` | South Korean Won | ₩1,234,567 |
| `KWD` | Kuwaiti Dinar | KWD 1,234,567.890 |
| `KYD` | Cayman Islands Dollar | $1,234,567.89 |
| `KZT` | Kazakhstani Tenge | ₸1 234 567,89 |
| `LAK` | Laotian Kip | ₭1.234.567 |
| `LBP` | Lebanese Pound | L£1.234.567 |
| `LKR` | Sri Lankan Rupee | Rs1,234,567.89 |
| `LRD` | Liberian Dollar | $1,234,567.89 |
| `LSL` | Lesotho Loti | LSL 1,234,567.89 |
| `LTL` | Lithuanian Litas | Lt1 234 567,89 |
| `LVL` | Latvian Lats | Ls1 234 567,89 |
| `LYD` | Libyan Dinar | LYD 1.234.567,890 |
| `MAD` | Moroccan Dirham | MAD 1.234.567,89 |
| `MDL` | Moldovan Leu | MDL 1.234.567,89 |
| `MGA` | Malagasy Ariary | Ar1 234 567 |
| `MKD` | Macedonian Denar | MKD 1.234.567,89 |
| `MMK` | Myanmar Kyat | K1,234,567 |
| `MNT` | Mongolian Tugrik | ₮1,234,567.89 |
| `MOP` | Macanese Pataca | MOP 1,234,567.89 |
| `MRU` | Mauritanian Ouguiya | MRU 1.234.567,89 |
| `MUR` | Mauritian Rupee | Rs1,234,567.89 |
| `MVR` | Maldivian Rufiyaa | MVR 1,234,567.89 |
| `MWK` | Malawian Kwacha | MWK 1,234,567.89 |
| `MXN` | Mexican Peso | MX$1,234,567.89 |
| `MYR` | Malaysian Ringgit | RM1,234,567.89 |
| `MZN` | Mozambican Metical | MZN 1 234 567,89 |
| `NAD` | Namibian Dollar | $1,234,567.89 |
| `NGN` | Nigerian Naira | ₦1,234,567.89 |
| `NIO` | Nicaraguan Córdoba | C$1,234,567.89 |
| `NOK` | Norwegian Krone | kr1 234 567,89 |
| `NPR` | Nepalese Rupee | Rs1,234,567.89 |
| `NZD` | New Zealand Dollar | NZ$1,234,567.89 |
| `OMR` | Omani Rial | OMR 1,234,567.890 |
| `PAB` | Panamanian Balboa | PAB 1,234,567.89 |
| `PEN` | Peruvian Sol | PEN 1,234,567.89 |
| `PGK` | Papua New Guinean Kina | PGK 1,234,567.89 |
| `PHP` | Philippine Peso | ₱1,234,567.89 |
| `PKR` | Pakistani Rupee | Rs1,234,567 |
| `PLN` | Polish Zloty | zł1 234 567,89 |
| `PYG` | Paraguayan Guarani | ₲1.234.567 |
| `QAR` | Qatari Riyal | QAR 1,234,567.89 |
| `RON` | Romanian Leu | lei1.234.567,89 |
| `RSD` | Serbian Dinar | RSD 1.234.567,89 |
| `RUB` | Russian Ruble | ₽1 234 567,89 |
| `RWF` | Rwandan Franc | RF1 234 567 |
| `SAR` | Saudi Riyal | SAR 1,234,567.89 |
| `SBD` | Solomon Islands Dollar | $1,234,567.89 |
| `SCR` | Seychellois Rupee | SCR 1,234,567.89 |
| `SDG` | Sudanese Pound | SDG 1,234,567.89 |
| `SEK` | Swedish Krona | kr1 234 567,89 |
| `SGD` | Singapore Dollar | $1,234,567.89 |
| `SHP` | St. Helena Pound | £1,234,567.89 |
| `SLL` | Sierra Leonean Leone | Le1,234,567 |
| `SOS` | Somali Shilling | SOS 1,234,567 |
| `SRD` | Surinamese Dollar | $1.234.567,89 |
| `SSP` | South Sudanese Pound | £1,234,567.89 |
| `STN` | São Tomé & Príncipe Dobra | Db1 234 567,89 |
| `SYP` | Syrian Pound | £1,234,567 |
| `SZL` | Swazi Lilangeni | SZL 1,234,567.89 |
| `THB` | Thai Baht | ฿1,234,567.89 |
| `TJS` | Tajikistani Somoni | TJS 1 234 567,89 |
| `TMT` | Turkmenistani Manat | TMT 1 234 567,89 |
| `TND` | Tunisian Dinar | TND 1.234.567,890 |
| `TOP` | Tongan Paʻanga | T$1,234,567.89 |
| `TRY` | Turkish Lira | ₺1.234.567,89 |
| `TTD` | Trinidad & Tobago Dollar | $1,234,567.89 |
| `TWD` | New Taiwan Dollar | NT$1,234,567.89 |
| `TZS` | Tanzanian Shilling | TZS 1,234,567.89 |
| `UAH` | Ukrainian Hryvnia | ₴1 234 567,89 |
| `UGX` | Ugandan Shilling | UGX 1,234,567 |
| `USD` | US Dollar | $1,234,567.89 |
| `UYU` | Uruguayan Peso | $1.234.567,89 |
| `UZS` | Uzbekistani Som | UZS 1 234 567,89 |
| `VED` | Venezuelan Digital Bolívar | Bs.D1.234.567,89 |
| `VES` | Venezuelan Bolívar | VES 1.234.567,89 |
| `VND` | Vietnamese Dong | ₫1.234.567 |
| `VUV` | Vanuatu Vatu | VUV 1,234,567 |
| `WST` | Samoan Tala | WST 1,234,567.89 |
| `XAF` | Central African CFA Franc | FCFA1,234,567 |
| `XCD` | East Caribbean Dollar | EC$1,234,567.89 |
| `XOF` | West African CFA Franc | F CFA1,234,567 |
| `XPF` | CFP Franc | CFPF1,234,567 |
| `YER` | Yemeni Rial | YER 1,234,567 |
| `ZAR` | South African Rand | R1 234 567,89 |
| `ZMW` | Zambian Kwacha | ZK1,234,567.89 |
