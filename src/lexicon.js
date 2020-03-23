const copyCase = require('copy-case');

const Lexicon = function (dictionary) {
	if (!dictionary) {
		throw new Error('No dictionary provided');
	}

	this.dictionary = dictionary;
	this.languages = [];

	// Register shortcuts for each language
	for (const lang of Object.keys(dictionary)) {
		this.languages.push(lang);
		this[lang] = text => {
			return this.translate(lang, text);
		};
	}
};

Lexicon.prototype.canTranslateTo = function (language) {
	const lang = language.toLowerCase();

	return this.languages.includes(lang);
};

Lexicon.prototype.pickWord = function (language, length) {
	const dictionary = this.dictionary[language];
	let targetLength = length;
	let words;

	do {
		words = dictionary[targetLength];
		targetLength--;
	} while (!words);

	return words[Math.floor(Math.random() * words.length)];
};

Lexicon.prototype.translate = function (language, text) {
	if (!this.canTranslateTo(language)) {
		throw new Error(`Can’t find language "${language}"`);
	}

	const lang = language.toLowerCase();
	let result = '';
	let word = '';

	for (const c of text) {
		if (/[^A-Za-z]/.test(c)) {
			if (word.length > 0) {
				result += copyCase(this.pickWord(lang, word.length), word);
			}

			result += c;
			word = '';
		} else {
			word += c;
		}
	}

	if (word.length > 0) {
		result += copyCase(this.pickWord(lang, word.length), word);
	}

	return result;
};

module.exports = Lexicon;
