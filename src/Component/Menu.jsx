import React from 'react'
import { assets, menu_list } from '../assets/Assets'

const Menu = ({category,setCategory}) => {
  return (
    <div className="container mt-5">
        <div className="text-center mt-3">
            <h5>our menu</h5>
            <h2>
                chech our <span>yummy menu</span>
            </h2>
        </div>
        <div className="menu-list" >
               {
                 menu_list.map((item,index)=>{
                    return(
                        <div key={index} className='menu-card' onClick={()=>setCategory(item.menu_name)}>
                            <img src={item.menu_image} alt="" className='img-fulid'/>
                            <p>{item.menu_name}</p>
                        </div>
                    )
                 })
               }
        </div>
        <button type='submit' onClick={()=>setCategory("All")} className='btn btn-danger my-3' >Food list</button>
    </div>
  )
}

export default Menu