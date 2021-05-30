/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
/* import axios from 'axios' */
import { Link } from 'react-router-dom'

import Sidebar from '../Sidebar'

import './home.scss'
/* import { BusinessContext } from '../../context/BusinessContext' */
import { getBusiness, getProducts } from '../../store/fetchActions'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  /* const [business, setBusiness] = useState([]) */
  /* const { setCurrentId } = useContext(BusinessContext) */

  /* async function fetchBusiness(){
    const { data } = await axios.get("https://api-test-carrinho.herokuapp.com/business")
      
      setBusiness(data.data)
  }

  useEffect(() => {
    fetchBusiness()
  }, []) */
  const business = useSelector(state => state.businesses)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBusiness())
  }, [dispatch])

  const fetchProduct = (id) => {
    dispatch(getProducts(id))
  }


  return (
    <section>
      <ul>
        <a href='#'>Home</a>
        <FiChevronDown size={22} color='#8A8A8C' cursor='pointer' className='rightIcon'/>
        <a href='#'>Sacola</a>
      </ul>

      <div className='homeContainer'>
        <div className='productsContainer'>
          <div className='searchContainer'>
            <AiOutlineSearch className='searchIcon' size={26}color='var(--placeholder)'/>
            <input type="text" name="search" id=""/>
          </div>

          <div className='businessList'>

            {business[0] && business[0].map((item, id) => {
              return (
                <Link 
                className='business' 
                key={id}
                onClick={() => fetchProduct(item._id)}
                to={`/${item._id}`}>

                  <div className='imageDiv'>
                    <img src={item.assets.logo} alt=''/>
                  </div>

                  <div className='businessInfo'>
                    <p>{item.name}</p>
                    <strong>{item.phone}</strong>
                    <span>{item.address.street_name}, {item.address.street_number} {item.address.city}</span>
                  </div>

                </Link>
              )
            })}

          </div>
        </div>  
        
      
        <Sidebar/>
      </div>
    </section>
  )
}

export default Home
