import React from 'react'

import App from 'components/home'
import Loader from 'components/loader'
import Menu from 'components/menu'

export default (props) => {
  const {
    actions: { helpMe, search }
    loaded
  } = props

  return !loaded
    ? <Loader />
    : (
      <div className='container'>
        <Menu {...props}
        <App {...props} />
      </div>
    )
}