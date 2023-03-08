export const WORD_ELEMENT = [
	{key: 0, attr: "wrd",  nm: "word", 		  label: "Word", 		addLimit: 0,  empty: ""},
	{key: 1, attr: "def",  nm: "definition",  label: "Definition",	addLimit: 10, empty: {d:"", t:""}},
	{key: 2, attr: "syn",  nm: "synonym", 	  label: "Synonym",		addLimit: 25, empty: {h:"", c:0}},
	{key: 3, attr: "ex",   nm: "example", 	  label: "Example",		addLimit: 30, empty: ""},
	{key: 4, attr: "expr", nm: "expression",  label: "Expression",	addLimit: 30, empty: ""},
	{key: 5, attr: "syl",  nm: "syllable", 	  label: "Syllable", 	addLimit: 0,  empty: ""}
];
export const NM_WRD = {
	word: 		"word",
	definition: "definition",
	synonym: 	"synonym",
	example: 	"example",
	expression: "expression",
	syllable:   "syllable"
}
export const WORD_TYPE = [
	{key: -1, id: 0,  tk: "...",  nm: "...", sh: "..."},
	{key: 0,  id: 1,  tk: "adjective", nm: "adjective", sh: "adj"},
	{key: 1,  id: 2,  tk: "adverb", nm: "adverb", sh: "adv"},
	{key: 2,  id: 3,  tk: "antiquated", nm: "antiquated", sh: "antiq"},
	{key: 3,  id: 4,  tk: "attributive", nm: "attributive", sh: "attrib"},
	{key: 4,  id: 5,  tk: "compare", nm: "compare", sh: "cf"},
	{key: 5,  id: 6,  tk: "conjunction", nm: "conjunction", sh: "conj"},
	{key: 6,  id: 7,  tk: "definite_article", nm: "definite article", sh: "def"},
	{key: 7,  id: 8,  tk: "euphemism", nm: "euphemism", sh: "euph"},
	{key: 8,  id: 9,  tk: "familiar", nm: "familiar", sh: "fam"},
	{key: 9,  id: 10, tk: "feminine", nm: "feminine", sh: "f"},
	{key: 10, id: 11, tk: "figurative", nm: "figurative", sh: "fig"},
	{key: 11, id: 12, tk: "interjection", nm: "interjection", sh: "interj"},
	{key: 12, id: 13, tk: "literally", nm: "literally", sh: "lit"},
	{key: 13, id: 14, tk: "masculine", nm: "masculine", sh: "m"},
	{key: 14, id: 15, tk: "military", nm: "military", sh: "milit"},
	{key: 15, id: 16, tk: "noun", nm: "noun", sh: "n"},
	{key: 16, id: 17, tk: "number", nm: "number", sh: "num"},
	{key: 17, id: 18, tk: "onomatopoeia", nm: "onomatopoeia", sh: "onom"},
	{key: 18, id: 19, tk: "pejorative", nm: "pejorative", sh: "pej"},
	{key: 19, id: 20, tk: "plural", nm: "plural", sh: "pl"},
	{key: 20, id: 21, tk: "preposition", nm: "preposition", sh: "prep"},
	{key: 21, id: 22, tk: "see", nm: "see", sh: "see"},
	{key: 22, id: 23, tk: "singular", nm: "singular", sh: "sing"},
	{key: 23, id: 24, tk: "synonym", nm: "synonym", sh: "syn"},
	{key: 24, id: 25, tk: "verb", nm: "verb", sh: "v"},
	{key: 25, id: 26, tk: "abbreviation", nm: "abbreviation", sh: "abbrev"},
	{key: 26, id: 27, tk: "acronym", nm: "acronym", sh: "acron"},
	{key: 27, id: 28, tk: "future", nm: "future", sh: "fut"},
	{key: 28, id: 29, tk: "prefix", nm: "prefix", sh: "prefix"},
	{key: 29, id: 30, tk: "reflexive_verb", nm: "reflexive verb", sh: "refl"},
	{key: 30, id: 31, tk: "suffix", nm: "suffix", sh: "suffix"},
	{key: 31, id: 32, tk: "vulgar", nm: "vulgar", sh: "vulg"},
	{key: 32, id: 33, tk: "pronoun", nm: "pronoun", sh: "pron"},
	{key: 33, id: 34, tk: "proper_noun", nm: "proper noun", sh: "prop"},
	{key: 34, id: 35, tk: "usually", nm: "usually", sh: "usu"},
	{key: 35, id: 36, tk: "variety_variant", nm: "variety variant", sh: "var"},
	{key: 36, id: 37, tk: "medicine_medicinal", nm: "medicine medicinal", sh: "med"},
	{key: 37, id: 38, tk: "especially", nm: "especially", sh: "esp"},
	{key: 38, id: 39, tk: "short_form_of", nm: "short form of", sh: "sh.form"},
	{key: 39, id: 40, tk: "contraction", nm: "contraction", sh: "contr"},
	{key: 40, id: 41, tk: "negative", nm: "negative", sh: "neg"},
	{key: 41, id: 42, tk: "auxiliary_verb", nm: "auxiliary verb", sh: "aux"},
];
export const ALPHA = [
	{key: 0,  id: 0,  nm: "#", ct: "#"},
	{key: 1,  id: 1,  nm: "a", ct: "A"},
	{key: 2,  id: 2,  nm: "b", ct: "B"},
	{key: 3,  id: 3,  nm: "ch",ct: "CH"},
	{key: 4,  id: 4,  nm: "d", ct: "D"},
	{key: 5,  id: 5,  nm: "e", ct: "E"},
	{key: 6,  id: 6,  nm: "f", ct: "F"},
	{key: 7,  id: 7,  nm: "g", ct: "G"},
	{key: 8,  id: 8,  nm: "h", ct: "H"},
	{key: 9,  id: 9,  nm: "i", ct: "I"},
	{key: 10, id: 10, nm: "j", ct: "J"},
	{key: 11, id: 11, nm: "k", ct: "K"},
	{key: 12, id: 12, nm: "l", ct: "L"},
	{key: 13, id: 13, nm: "m", ct: "M"},
	{key: 14, id: 14, nm: "n", ct: "N"},
	{key: 15, id: 15, nm: "o", ct: "O"},
	{key: 16, id: 16, nm: "p", ct: "P"},
	{key: 17, id: 17, nm: "q", ct: "Q"},
	{key: 18, id: 18, nm: "r", ct: "R"},
	{key: 19, id: 19, nm: "s", ct: "S"},
	{key: 20, id: 20, nm: "t", ct: "T"},
	{key: 21, id: 21, nm: "u", ct: "U"},
	{key: 22, id: 22, nm: "v", ct: "V"},
	{key: 23, id: 23, nm: "w", ct: "W"},
	{key: 24, id: 24, nm: "x", ct: "X"},
	{key: 25, id: 25, nm: "y", ct: "Y"},
	{key: 26, id: 26, nm: "z", ct: "Z"}
];
export const VOWEL = ["a","e","i","o","u"];
export const KEYBOARD_ONE   = ["q","w","e","r","t","y","u","i","o","p"];
export const KEYBOARD_TWO   = ["a","s","d","f","g","h","j","k","l"];
export const KEYBOARD_THREE = ["z","x","c","v","b","n","m"];
export const MONTH = ["","jan","feb","mar","apr","mai","jun","jul","aug","sep","oct","nov","dec"];
export const PAGE  = ["copyright","privacy","contact-us","about"];
export const PAGE_URL = [
	{key: "about",     nm: "about us",   url: "/about"},
	{key: "copyright", nm: "copyright",  url: "/copyright"},
	{key: "privacy",   nm: "privacy",	 url: "/privacy"},
	{key: "contact",   nm: "contact us", url: "/contact-us"},
];
export const LANGUAGE    = ["ht","en","fr"];
export const DOMAINE_WEB = ".net";
export const DOMAINE_NM  = "diksyone";
export const NAME_WEB    = "Diksyone";
export const URL_WEB_WWW = `https://www.${DOMAINE_NM}${DOMAINE_WEB}`;
export const URL_WEB     = `https://${DOMAINE_NM}${DOMAINE_WEB}`;
export const TITLE_WEB   = `:: ${NAME_WEB}${DOMAINE_WEB}`;
export default NAME_WEB;