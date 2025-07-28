import React, { useContext } from 'react'
import { StoreContext } from '../contaxt/StoreContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({category}) => {
    const {food_list}=useContext(StoreContext)
    console.log(food_list);
  return (
    <div className='container '>
      <div className="row g-3">
        {
          food_list.map((item,index)=>{
            if (category==item.category || category=="All"){
               return(
              <div className="col-lg-3" key={index}>
                <FoodItem key={index} id={item._id} name={item.name} description={item.discription}  price={item.price} image={item.image} />
              </div> )
            }
          })
        }
      </div>
    </div>
  )
}

export default FoodDisplay