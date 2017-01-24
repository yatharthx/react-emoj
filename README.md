# react-emoj [![Build Status](https://travis-ci.org/yatharthk/react-emoj.svg?branch=master)](https://travis-ci.org/yatharthk/react-emoj) [![Coverage Status](https://coveralls.io/repos/github/yatharthk/react-emoj/badge.svg?branch=master)](https://coveralls.io/github/yatharthk/react-emoj?branch=master)

Easy-use emoji component for React

### Installation

```
npm install --save react-emoj
```

### Usage
`react-emoj` serves a minimal and convenient API for use.

#### Module exports
- `ReactEmoji` as React Component (default export)
- `Emoji` as an emoji utility that serves internally as a helper to `ReactEmoji` (exports.Emoji)

You can import them as:

`import ReactEmoji, { Emoji } from 'react-emoj'`

#### API
##### `ReactEmoji`
*ReactEmoji* shall be rendered with `props`:

###### emoji

Type: `Array(string)`

Example:
```js
<ReactEmoji emoji={['coffee', 'sunglasses']} />
```
Useful when all you need to render is a list of emoticons.

###### style

Type: `Object`

Example:
```js
<ReactEmoji
  emoji={['coffee', 'sunglasses']}
  style={{fontSize: '30px'}}
/>
```
Useful when you need to set color/font size of text or emoticons.

*ReactEmoji* can be used for displaying text that includes emoji by passing the text as child to the component. The text must always be of type `string`. The emoticons to be displayed shall be wrapped in colons in format `:emoji_code:`.

Example:
```js
<ReactEmoji style={{fontSize: '30px'}}>
  I :hearts: coffee
</ReactEmoji>
```

##### `Emoji`

###### .emoji
Serves you a `JSON` object of emoji.

###### .emojify(text)

Type: `text: string`

Emoji Format: `:emoji_code:`

Example:
```js
Emoji.emojify('I love :coffee:') // I love ☕️
```
Useful when all you need is an `emojified` text, not a rendered component.

###### .fromArray(emojiList)

Type: `emojiList: [string] i.e an Array of string`

Emoji Format: `emoji_code`

Example:
```js
Emoji.fromArray(['coffee', 'sunglasses']) // ☕️😎
```
Useful when all you need is an emoji list, not a rendered component.

### License
MIT © Yatharth Khatri
