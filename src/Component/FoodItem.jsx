import React from 'react'
import { assets } from '../assets/Assets'
import { useContext } from 'react'
import { StoreContext } from '../contaxt/StoreContext'

const FoodItem = ({id,name,description,price,image}) => {
  const{cartItems,addToCart,removeFromCart}=useContext(StoreContext)
  return (
    <div>
        <div className="card" key={id} >
    <img src={image} className="card-img-top" alt="..."/>
    <div >
      {
        !cartItems[id]
        ?
        <img onClick={()=>addToCart(id)} src={assets.add_icon } alt="" />
        :<div className='food-cart'>
        <img src={assets.remove_icon}  onClick={()=>removeFromCart(id)} alt="" />
        <p>{cartItems[id]}</p>
        <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
        </div>
        }
    </div>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description}</p>
    <h6 className='card-text'> Price Rs {price}</h6>
  </div>
</div>
    </div>
  )
}

export default FoodItem