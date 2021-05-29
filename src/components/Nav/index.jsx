import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

import './nav.scss'

const Nav = () => {
  return(
  <nav>
    <div>
      <img src='/assets/logo.svg' alt='' draggable='false'/>
      <a href="#">Dashboard</a>
    </div>

    <div className='user'>
      <div>
        <img src='/assets/bag.svg' alt="" className='bag'/>
      </div>
      
      <img src='/assets/user.png' alt=""/>

      <FiChevronDown size={22} color='#8A8A8C' cursor='pointer'/>
    </div>
  </nav>)
} 

export default Nav