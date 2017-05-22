import assert from 'assert'
import React from 'react'
import { shallow } from 'enzyme'

import Container from 'components/container'

describe('<Menu />', () => {
  it('renders the loader the app has not loaded', () => {
    const wrapper = shallow(<Container loaded={false} />)
    const loader = wrapper.find('.loader')

    assert.equal(loader.length, 1)
  })

  it('renders the menu and app if loaded', () => {
    const wrapper = shallow(<Container loaded={true} />)
    const menu = wrapper.find('.menu')
    const app = wrapper.find('.app')

    assert.equal(menu.length, 1)
    assert.equal(app.length, 1)
  })
})