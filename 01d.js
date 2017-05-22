import assert from 'assert'
import React from 'react'
import { shallow } from 'enzyme'

import App from 'components/app'
import Container from 'components/container'
import Loader from 'components/loader'
import Menu from 'components/menu'

describe('<Menu />', () => {
  it('renders the loader the app has not loaded', () => {
    const wrapper = shallow(<Container loaded={false} />)
    
    assert(wrapper.find(Loader).exists())
  })

  it('renders the menu and app if loaded', () => {
    const wrapper = shallow(<Container loaded={true} />)

    assert(wrapper.find(Menu).exists())
    assert(wrapper.find(App).exists())
  })
})