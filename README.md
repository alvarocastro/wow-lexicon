# wow-lexicon

[![NPM](https://img.shields.io/npm/v/wow-lexicon)](https://www.npmjs.com/package/wow-lexicon)
[![Build status](https://img.shields.io/github/workflow/status/alvarocastro/wow-lexicon/build)](https://github.com/alvarocastro/wow-lexicon/actions?query=workflow%3Abuild)
[![Maintainability status](https://img.shields.io/codeclimate/maintainability/alvarocastro/wow-lexicon)](https://codeclimate.com/github/alvarocastro/wow-lexicon/maintainability)
[![Coverage status](https://img.shields.io/coveralls/github/alvarocastro/wow-lexicon)](https://coveralls.io/github/alvarocastro/wow-lexicon?branch=master)
[![Bundle size](https://img.shields.io/bundlephobia/min/wow-lexicon)](https://bundlephobia.com/result?p=wow-lexicon)
[![Code style: XO](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Release: Semantic](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

World of Warcraft translator that tries to emulate the same translation process used in the game client.

Translation is unidirectional, you can translate from "common" (human language like this) to any of the [supported languages](#supported-languages), but not the other direction, since the words are simply replaced with another random word of the same lenght.

- [Install](#install)
- [Usage](#usage)
- [Supported languages](#supported-languages)
- [Contributing](#contributing)
- [Support](#support)

## Install

```bash
npm install wow-lexicon
```

## Usage

```js
const lexicon = require('wow-lexicon');

lexicon.translate('dwarven', 'This is JavaScript!!');
// => Helm we Gar-Mogoth!!
```

There is also a shortcut to each language for easier use:

```js
lexicon.orcish('This is JavaScript!!');
// => Tago ag Maza'rotha!!
```

Also you can try it directly from the console:

```bash
$ wow-lexicon draconic Also in the console
[Draconic] Aman il daz toralar
```

### translate(language, text)

Returns the translated text.

#### language

Type: `String`

The name of one of the [supported languages](#supported-languages).

#### text

Type: `String`

The text to translate.

## Supported languages

Language definitions are taken from the wiki and other sources of the game.

- [Common](https://wowwiki.fandom.com/wiki/Common_(language)) (Humans)
- [Darnassian](https://wowwiki.fandom.com/wiki/Darnassian) (Night elves)
- [Draconic](https://wowwiki.fandom.com/wiki/Draconic) (Dragons)
- [Draenei](https://wowwiki.fandom.com/wiki/Draenei_(language)) (Draenei)
- [Dwarven](https://wowwiki.fandom.com/wiki/Dwarven) (Dwarves)
- [Eredun](https://wowwiki.fandom.com/wiki/Eredun) (Demons)
- [Gnomish](https://wowwiki.fandom.com/wiki/Gnomish) (Gnomes)
- [Gutterspeak](https://wowwiki.fandom.com/wiki/Gutterspeak) (Forsaken)
- [Kalimag](https://wowwiki.fandom.com/wiki/Kalimag) (Elementals)
- [Orcish](https://wowwiki.fandom.com/wiki/Orcish) (Orcs)
- [Taurahe](https://wowwiki.fandom.com/wiki/Taur-ahe) (Tauren)
- [Thalassian](https://wowwiki.fandom.com/wiki/Thalassian) (Blood elves and High elves)
- [Zandali](https://wowwiki.fandom.com/wiki/Zandali) (Trolls)

## Contributing

Contributions are always welcome! Please run `npm test` beforehand to ensure everything is ok.

## Support

If you use this package please consider starring it :)
