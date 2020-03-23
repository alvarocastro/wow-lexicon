#!/usr/bin/env node

const lexicon = require('.');

const args = process.argv.slice(2);
const lang = args.shift();
const input = args.join(' ');

if (!lang || !input) {
	console.info('Usage:   wow-lexicon language text …');
	console.info('Example: wow-lexicon dwarven This is some example!');
	process.exit();
}

if (!lexicon.canTranslateTo(lang)) {
	console.error(`Language "${lang}" not recognized.`);
	process.exit();
}

console.log(`[${lang[0].toUpperCase()}${lang.slice(1).toLowerCase()}] ${lexicon.translate(lang, input)}`);
