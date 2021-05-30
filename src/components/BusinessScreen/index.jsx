/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState, useEffect } from 'react'
import { BusinessContext } from '../../context/BusinessContext'
import { FiChevronRight, FiPlus, FiChevronLeft } from 'react-icons/fi'
import { AiOutlineSearch, AiOutlineMinus } from 'react-icons/ai'
import { Link } from  'react-router-dom'

import Sidebar from '../Sidebar'

import { getProducts } from '../../store/fetchActions'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts } from '../../store/Business'

import './business.scss'

const Home = () => {
  /* const [currentBusinessProducts, setCurrentBusinessProducts ] = useState([])
  const { currentId } = useContext(BusinessContext)

  console.log(currentBusinessProducts)
  console.log(currentId) */

  /* async function fetchBusiness(){
    const { data } = await axios.get(`https://api-test-carrinho.herokuapp.com/product/business/${currentId}`)
    setCurrentBusinessProducts(data.data)
  }

  useEffect(() => {
    fetchBusiness()
    
  }, []) */

  const products = useSelector(state => state.products)
  const dispatch = useDispatch()


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

          <div className='imageDiv'>
            <img src='/assets/bag.svg' alt=''/>
          </div>

          <div className='businessInfo'>
          <p>asdfadsfa</p>
          <strong>dasfadf</strong>
          <span>dfdsfds, adfdsf 3051</span>
       </div>

        </div>

        <div className='businessListCurrent'>

          {/* {currentBusinessProducts.map(product => {
            return (
              <div className='business' key={product._id}>
                <div className='imageDiv'>
                  <img src={product.imgs[0].url} alt=''/>
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
                    <button>1</button>
                    <button>
                      <FiPlus size={18}/>
                    </button>
                  </div>
                </div>
              </div>
            )
          })} */}

              {/* <div 
              className='business' 
              to={`/`}>

                <div className='imageDiv'>
                  <img src='/assets/bag.svg' alt=''/>
                </div>

                <div className='businessInfo'>
                  <p>Pizza picanha com cheddar</p>
                  <span>Picanha + Cheddar + Borda de Catupiry</span>
                  <span>Tempo de preparo</span>
                  <p className='businessInfoPrice'>R$ 67,90</p>

                  <div className='currentBusinessBtns'>
                    <button>
                      <AiOutlineMinus size={18}/>
                    </button>
                    <button>1</button>
                    <button>
                      <FiPlus size={18}/>
                    </button>
                  </div>
                </div>

              </div> */}

        </div>
      </div>  
      
    
      <Sidebar/>
    </div>
  </section>
  )
}

export default Home
