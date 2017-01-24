import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import ReactEmoji from '../src'

test('ReactEmoji should render a <span>', t => {
  const wrapper = shallow(<ReactEmoji emoji={['hearts']} />)
  t.is(wrapper.find('span').length, 1)
})

test('ReactEmoji should render emoji constructed from prop `emoji`', t => {
  const wrapper = shallow(<ReactEmoji emoji={['hearts']} />)
  t.is(wrapper.find('span').text(), '♥️')
})

test('ReactEmoji should render emojified string from `children`', t => {
  const wrapper = shallow(<ReactEmoji>I :hearts: React</ReactEmoji>)
  t.is(wrapper.find('span').text(), 'I ♥️ React')
})

test('ReactEmoji should prefer child text over prop `emoji`', t => {
  const wrapper = shallow(
    <ReactEmoji emoji={['coffee', 'sunglasses']}>
      I :hearts: JavaScript
    </ReactEmoji>
  )
  t.is(wrapper.find('span').text(), 'I ♥️ JavaScript')
})

test('ReactEmoji should throw error for no `emoji` prop', t => {
  const err = t.throws(function() { shallow(<ReactEmoji />) })
  t.is(err.message, 'ReactEmoji prop `emoji` is expected to be an Array of `string`. Instead got `undefined`.')
})

test('ReactEmoji should throw error for invalid `emoji` prop', t => {
  const err = t.throws(function() { shallow(<ReactEmoji emoji={() => {}} />) })
  t.is(err.message, 'ReactEmoji prop `emoji` is expected to be an Array of `string`. Instead got `function`.')
})

test('ReactEmoji should throw error for invalid text', t => {
  const invalidText = () => {}
  const err = t.throws(function() { shallow(<ReactEmoji>{invalidText}</ReactEmoji>) })
  t.is(err.message, 'ReactEmoji is expected to have `children` of type `string`. Instead got `function`.')
})

test('ReactEmoji should update text when new `emoji` prop passed', t => {
  const wrapper = shallow(<ReactEmoji emoji={['sunglasses', 'coffee']} />)
  t.is(wrapper.find('span').text(), '😎☕️')
  wrapper.setProps({emoji: ['coffee']})
  t.is(wrapper.find('span').text(), '☕️')
})

test('ReactEmoji should update text when new text passed as `child`', t => {
  const wrapper = shallow(<ReactEmoji>I love :coffee:</ReactEmoji>)
  t.is(wrapper.find('span').text(), 'I love ☕️')
  wrapper.setProps({children: 'I like :sunglasses:'})
  t.is(wrapper.find('span').text(), 'I like 😎')
})
