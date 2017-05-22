import React from 'react'

import App from 'components/home'
import Loader from 'components/loader'

export default (props) => {
  const {
    actions: { helpMe, search }
    loaded
  } = props

  return !loaded
    ? <Loader className='loader' />
    : (
      <div className='container'>
        <div className='menu'>
          <a href='/home'>Home</a>
          <a href='/browse'>Browse</a>
          <a onClick={helpMe}>Help</a>
          <input onChange={search} placeholder='search...' />
        </div>
        <App className='app' {...props} />
      </div>
    )
}