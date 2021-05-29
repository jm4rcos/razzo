import React from 'react'

import './sidebar.scss'

const Sidebar = () => {
  return (
    <aside>
      <div className="container">
        <section className='products'>
        <strong>Produto</strong>
        <div className='bagItem'>
          <img src="/assets/user.png" alt="" className='productImg'/>

          <div className='info'>
            <p className='productName'>Pizza picanha com cheddar</p>
            <span className='type'>Pizzas</span>
            <span className='itemPrice'>R$ 54,32</span>
          </div>

          <div className='bagBtns'>
            <button>
              <img src='/assets/minor.svg' alt="" />
            </button>
            <button>1</button>
            <button>
            <img src='/assets/plus.svg' alt="" />
            </button>
          </div>

          <button>
            <img src="/assets/trash.svg" alt="" style={{width:'15px'}}/>
          </button>
        </div>
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
