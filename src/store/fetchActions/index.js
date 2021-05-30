import axios from 'axios'
import { addBusinesses } from '../Business'
import { addProducts } from '../Products'
import { addCurrentId } from '../BusinessId'

export const getBusiness = () => {
  return dispatch => {
    axios.get("https://api-test-carrinho.herokuapp.com/business")
      .then(res => {
        dispatch(addBusinesses(res.data.data))
      })
      .catch(console.log)
      
  } 
}

export const getProducts = (id, index) => {
  return dispatch => {
    axios.get(`https://api-test-carrinho.herokuapp.com/product/business/${id}`)
      .then(res => {
        dispatch(addProducts(res.data.data))
        dispatch(addCurrentId(index))
      })
      .catch(console.log)
  }
}