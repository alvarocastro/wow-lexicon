const test = require('ava');
const lexicon = require('..');
const dictionaries = require('../src/dictionary');

const langs = Object.keys(dictionaries);

test('Should be able to translate the loaded languages', t => {
	for (const lang of langs) {
		t.true(lexicon.canTranslateTo(lang));
	}

	t.is(lexicon.languages.length, langs.length);
});

test('Should have translation shortcuts to the loaded languages', t => {
	for (const lang of langs) {
		t.is(typeof lexicon[lang], 'function');
	}
});

test('Should throw an error when traslating to a non-existent language', t => {
	t.throws(() => {
		lexicon.translate('somenonexistentlang', 'Hi');
	}, {
		instanceOf: Error
	});
});

test('Should translate', t => {
	t.truthy(lexicon.translate('dwarven', 'Test'));
});

test('Dictionary words should be trimmed', t => {
	for (const lang of langs) {
		const lengths = Object.keys(dictionaries[lang]);

		for (let length of lengths) {
			const words = dictionaries[lang][length];
			length = Number(length);

			t.true(words.every(word => word.length === word.trim().length), `Not trimmed word in ${length}:${lang}`);
		}
	}
});
