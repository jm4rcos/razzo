/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

import { addItem } from '../../store/Cart'
import { useSelector } from 'react-redux'

import './nav.scss'

const Nav = () => {

  const cartLength = useSelector(state => state.cart.length)
  console.log(cartLength);

  return(
  <nav>
    <div>
      <img src='/assets/logo.svg' alt='' draggable='false'/>
      <a href="#">Dashboard</a>
    </div>

    <div className='user'>
      <div>
        <img src='/assets/bag.svg' alt="" className='bag'/>
        {!cartLength <= 0 && (<span className='cartLength'>{cartLength}</span>)}
      </div>
      
      
      <img src='/assets/user.png' alt=""/>

      <FiChevronDown size={22} color='#8A8A8C' cursor='pointer'/>
    </div>
  </nav>)
} 

export default Nav