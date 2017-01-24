import emoji from './emoji.json'

const tplSplitter = /:([a-zA-Z0-9_\-+]+):/g

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

  return tpl.split(tplSplitter)
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

const fromArray = (emojiList, defaultEmo = '') => (
  emojiList.map(emo => (
             emoji[emo] ? emoji[emo] : (
               emoji[defaultEmo] ? emoji[defaultEmo] : ''
             )
           ))
           .join('')
)

const Emoji = {
  emoji,
  emojify,
  fromArray
}

export default Emoji
