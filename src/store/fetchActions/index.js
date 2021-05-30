import axios from 'axios'
import { addBusinesses, addProducts } from '../Business'

export const getBusiness = () => {
  return dispatch => {
    axios.get("https://api-test-carrinho.herokuapp.com/business")
      .then(res => {
        dispatch(addBusinesses(res.data.data))
      })
      .catch(console.log)
      
  } 
}

export const getProducts = id => {
  return dispatch => {
    axios.get(`https://api-test-carrinho.herokuapp.com/product/business/${id}`)
      .then(res => {
        dispatch(addProducts(res.data.data))
        console.log(res.data.data)
      })
      .catch(console.log(id))
  }
}
