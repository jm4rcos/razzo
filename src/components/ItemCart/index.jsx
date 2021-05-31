import React from 'react'

const ItemCart = ({ item, removeItemCart, index }) => {

  return(
          <div className='bagItem'>
              <div className='leftInfo'>
                <img src={item.imgs[1].url} alt="" className='productImg'/>
                <div className='info'>
                  <p className='productName'>{item.name}</p>
                  <span className='type'>{item.category}</span>
                  <span className='itemPrice'>R$ {item.pricing.toLocaleString()}</span>
                </div>
              </div>
  
              <div className='rightBtns'>
              <div className='bagBtns'>
                <button>
                  <img src='/assets/minor.svg' alt="" />
                </button>
                <button>1</button>
                <button>
                <img src='/assets/plus.svg' alt="" />
                </button>
              </div>
  
                <button onClick={() => removeItemCart(item, index)}>
                  <img src="/assets/trash.svg" alt="" style={{width:'15px'}}/>
                </button>
              </div>
          </div>
  )
}

export default ItemCart