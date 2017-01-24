import React from 'react'
import Emoji from '../emoji/emoji'

class ReactEmoji extends React.Component {
  constructor(props) {
    super(props)

    const { emoji, children } = this.props
    // validate props
    if (!children && !(Array.isArray(emoji) && emoji.every(e => typeof e === 'string'))) {
      throw new Error('ReactEmoji prop `emoji` is expected to be an Array of `string`. Instead got `' + typeof emoji + '`.')
    } else if (!emoji && typeof children !== 'string') {
      throw new Error('ReactEmoji is expected to have `children` of type `string`. Instead got `' + typeof children + '`.')
    }

    if (emoji && children) {
      if (process.env.NODE_ENV !== 'test') {
        console.warn('Warning: ReactEmoji expects to receive either `emoji` or `children`. If passed both, `children` will be used.')
      }
    }

    // set component state
    this.state = {emoji}
  }

  componentWillReceiveProps(newProps) {
    const { emoji } = newProps
    this.state = Object.assign({}, this.state, {emoji})
  }

  render() {
    const { children, defaultEmoji = '', style = {} } = this.props
    const { emoji } = this.state

    return (
      <span style={style}>
        {
          children
          ? Emoji.emojify(children, defaultEmoji)
          : Emoji.fromArray(emoji)
        }
      </span>
    )
  }
}

ReactEmoji.propTypes = {
  children: React.PropTypes.string,
  defaultEmoji: React.PropTypes.string,
  emoji: React.PropTypes.array,
  style: React.PropTypes.object
}

export default ReactEmoji
