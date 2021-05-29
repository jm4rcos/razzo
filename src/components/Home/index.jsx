import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'

import Sidebar from '../Sidebar'

import './home.scss'

const Home = () => {
  return (
    <section>
      <ul>
        <a href='#'>Home</a>
        <FiChevronDown size={22} color='#8A8A8C' cursor='pointer' className='rightIcon'/>
        <a href='#'>Sacola</a>
      </ul>

      <div className='homeContainer'>
        <div className='searchContainer'>
          <AiOutlineSearch className='searchIcon' size={26}color='var(--placeholder)'/>
          <input type="text" name="search" id=""/>
        </div>
        <div className='wrapper-grid'>
          <div></div>
        </div>

        <Sidebar/>
      </div>
    </section>
  )
}

export default Home
