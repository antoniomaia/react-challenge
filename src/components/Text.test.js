import React from 'react'
import { shallow } from 'enzyme'
import expect, { createSpy } from 'expect'

import Text from './Text'

/* Testing structure */
it('should render text when a children is given', () => {
  const children = 'css'
  const wrapper = shallow(<Text>{children}</Text>)

  expect(wrapper.type()).toBe('li')
  const wrapperChildren = wrapper.children()
  expect(wrapperChildren.text()).toBe(children)
})

it('should not render text when a children is not given', () => {
  const wrapper = shallow(<Text></Text>)

  const wrapperChildren = wrapper.children()
  expect(wrapperChildren.children().length).toBe(0)
})
