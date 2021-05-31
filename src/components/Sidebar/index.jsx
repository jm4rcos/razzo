import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../store/Cart'

import ItemCart from '../../components/ItemCart'

import './sidebar.scss'

const Sidebar = () => {
  const cartItem = useSelector(state => state.cart)

  console.log('itens do carrinho', cartItem);

  const dispatch = useDispatch()

  function removeItemCart(item){
    dispatch(removeItem(item))
  }

  return (
    <aside>
      <div className="sidebarContainer">
        <section className='sidebarProducts'>
        <strong>Produtos</strong>
          {cartItem && cartItem.map((item, index) => {
            return (
              <ItemCart item={item} key={index} removeItemCart={removeItemCart}/>
            )
          })}
      </section>

        <section className='allPrices'>
        <div className='subtotal'>
          <p>Subtotal</p>
          <strong>R$ 204,32</strong>
        </div>

        <div className='deliver'>
          <p>entrega</p>
          <strong>R$ 7.90</strong>
        </div>

        <hr/>

        <div className='total'>
          <span>Total</span>
          <strong>R$ 212,22</strong>
        </div>
      </section>
      </div>
      <div className='buyBtns'>
        <button className='continue'>Continuar comprando</button>
        <button className='confirm'>Confirmar a compra</button>
      </div>
    </aside>
  )
}

export default Sidebar