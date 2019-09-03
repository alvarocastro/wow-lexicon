const test = require('ava');
const Lexicon = require('../src/lexicon');

const dict = {
	1: ['a', 'b'],
	2: ['zx'],
	3: ['iop'],
	5: ['qwert', 'asdfg'],
	6: ['xcvbnm']
};

test('Should throw error if no dictionary provided', t => {
	t.throws(() => {
		new Lexicon()
	}, Error);
});

test('Should be able to translate the loaded languages', t => {
	const l = new Lexicon({
		test: dict
	});

	t.true(l.canTranslateTo('test'));
	t.false(l.canTranslateTo('not'));
});

test('Should add shortcuts to loaded languages', t => {
	const l = new Lexicon({
		test: dict
	});

	t.is(typeof l.test, 'function');
});

test('Should translate to the given language', t => {
	const l = new Lexicon({
		test: dict
	});

	t.truthy(l.translate('test', 'a'));
	t.is(l.translate('test', 'is our car'), 'zx iop iop');
	t.is(l.test('is our car'), 'zx iop iop');
});
