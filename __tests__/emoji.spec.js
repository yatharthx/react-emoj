import test from 'ava'
import { Emoji } from '../src'
import emoji from '../src/emoji/emoji.json'

test('Emoji provides `emoji` and `emojify`', t => {
  t.is(typeof Emoji.emoji, 'object')
  t.is(typeof Emoji.emojify, 'function')
  t.deepEqual(Emoji.emoji, emoji)
})

test('read emoji from `Emoji.emoji`', t => {
  t.is(Emoji.emoji['sunglasses'], '😎')
})

test('.emojify() should replace emoji codes with emoji', t => {
  const tpl = `I had a :coffee:`
  const emojifiedTpl = Emoji.emojify(tpl)
  t.is(emojifiedTpl, 'I had a ☕️')
})

test('.emojify() should apply defaultEmo when missing emoji', t => {
  const tpl = `I had some :syrup:`
  const emojifiedTpl = Emoji.emojify(tpl, 'hearts')
  t.is(emojifiedTpl, `I had some ♥️`)
})

test('.emojify() should throw error for invalid `template` type', t => {
  const err = t.throws(function() { Emoji.emojify(1) })
  t.is(err.message, `\n        the \`template\` is expected to be of type \`string\`.\n        Instead, got \`number\`.\n      `)
})

test('.emojify() should throw error for invalid `missing emoji` type', t => {
  const err = t.throws(function() { Emoji.emojify(':coffee:', () => {}) })
  t.is(err.message, `\n        the default emoji character is expected to be of type \`string\`.\n        Instead, got \`function\`.\n      `)
})

test('.fromArray() should generate an emoji string from array', t => {
  const emojiList = ['coffee', 'sunglasses']
  t.is(Emoji.fromArray(emojiList), '☕️😎')
})

test('.fromArray() should apply defaultEmo when missing emoji', t => {
  const emojiList = ['coffee', 'syrup']
  t.is(Emoji.fromArray(emojiList, 'sunglasses'), '☕️😎')
})
