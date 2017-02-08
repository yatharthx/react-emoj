import emoji from 'emotikon'

const tplSplitter = tpl => tpl.split(/:([a-zA-Z0-9_\-+]+):/g)
const colonTrimmer = emo => emo.replace(/^[:\uFEFF\xA0]+|[:\uFEFF\xA0]+$/g, '')

const emojify = (tpl, defaultEmo = '') => {
  if (typeof tpl !== 'string') {
    throw new Error(`
        the \`template\` is expected to be of type \`string\`.
        Instead, got \`${typeof tpl}\`.
      `)
  }

  if (typeof defaultEmo !== 'string') {
    throw new Error(`
        the default emoji character is expected to be of type \`string\`.
        Instead, got \`${typeof defaultEmo}\`.
      `)
  }

  if (!tpl) return ''

  return tplSplitter(tpl)
           .map((str, index) => {
             if (!str) { return '' }

             return (index % 2 === 0)
               ? str
               : (emoji[str] ? emoji[str] : (
                 emoji[defaultEmo] ? emoji[defaultEmo] : ''
               ))
           })
           .join('')
}

const fromArray = (emojiList, defaultEmo = '') => {
  defaultEmo = colonTrimmer(defaultEmo)

  return emojiList.map(emo => {
    emo = colonTrimmer(emo)
    return emoji[emo] ? emoji[emo] : (
      emoji[defaultEmo] ? emoji[defaultEmo] : ''
    )
  })
  .join('')
}

const Emoji = {
  emoji,
  emojify,
  fromArray
}

export default Emoji
