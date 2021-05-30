/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FiChevronRight, FiPlus, FiChevronLeft } from 'react-icons/fi'
import { AiOutlineSearch, AiOutlineMinus } from 'react-icons/ai'
import { Link } from  'react-router-dom'

import Sidebar from '../Sidebar'

import { useSelector } from 'react-redux'

import './business.scss'

const BusinessScreen = ({ addItemCart }) => {
  const currentId = useSelector(state => state.currentId)
  const product = useSelector(state => state.products)
  
  const currentProduct = product.length - 1
  const lastCurrentId = product.length - 1

  // eslint-disable-next-line no-redeclare
  function addItemCart(item){
    console.log(item);
  }

  return (
    <section>
    <ul className='linksCurrentBusiness'>
      <Link to='/'>
        <FiChevronLeft color='#8A8A8C' size={40}/>
      </Link>
      <li>
        <a href='#'>Home</a>
        <FiChevronRight size={22} color='#8A8A8C' cursor='pointer'/>
        <a href='#'>Sacola</a>
      </li>
    </ul>

    <div className='homeContainer'>

      <div className='productsContainer'>
        <div className='searchContainer'>
          <AiOutlineSearch className='searchIcon' size={26}color='var(--placeholder)'/>
          <input type="text" name="search" id=""/>
        </div>

        <div className='CurrentBusiness'>

          {currentId[lastCurrentId] && (<>
            <div className='imageDiv'>
              <img src={currentId[lastCurrentId].assets.logo} alt=''/>
            </div>

            <div className='businessInfo'>
              <p>{currentId[lastCurrentId].name}</p>
              <strong>{currentId[lastCurrentId].description}</strong>

              <span>
                {currentId[lastCurrentId].address.street_name}, 
                {currentId[lastCurrentId].address.city} 
                {currentId[lastCurrentId].address.street_number}
              </span>
            </div>
            </>)}
      </div>

        <div className='businessListCurrent'>

          {product[0] ? product[currentProduct].map(product => {
            return (
              <div className='business' key={product._id}>
                <div className='imageDiv'>
                  <img src={product.imgs[1].url} alt=''/>
                </div>

                <div className='businessInfo'>
                  <p>{product.name}</p>
                  <span>{product.description}</span>
                  <span>Tempo de preparo: 40min</span>
                  <p className='businessInfoPrice'>R$: {product.pricing.toLocaleString()}</p>

                  <div className='currentBusinessBtns'>
                    <button>
                      <AiOutlineMinus size={18}/>
                    </button>
                    <button onClick={() => addItemCart(product)}>1</button>
                    <button>
                      <FiPlus size={18}/>
                    </button>
                  </div>
                </div>
              </div>
            )
          }) : <h2>Carregando...</h2>}

        </div>
      </div>  
      
    
      <Sidebar/>
    </div>
  </section>
  )
}

export default BusinessScreen
