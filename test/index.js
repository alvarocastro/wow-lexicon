const test = require('ava');
const lexicon = require('../.');

const langs = [
	'darnassian',
	'draconic',
	'draenei',
	'dwarven',
	'eredun',
	'gnomish',
	'gutterspeak',
	'kalimag',
	'orcish',
	'taurahe',
	'thalassian',
	'zandali'
];

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
