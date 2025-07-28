import React, { useContext } from 'react'
import { StoreContext } from '../contaxt/StoreContext'

const Order = () => {
    const { getTotalAmount } = useContext(StoreContext)
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <h3 className='text-center'>Delivery Information</h3>
                    <form>
                        <div className='my-3'>
                            <input type="text" placeholder='First Name' className='form-control' />
                        </div>
                        <div className='my-3'>
                            <input type="text" placeholder='Last Name' className='form-control' />
                        </div>
                        <div className='my-3'>
                            <input type="email" placeholder='Email' className='form-control' />
                        </div>
                        <div className='my-3'>
                            <input type="text" placeholder='Street' className='form-control' />
                        </div>
                        <div className='my-3'>
                            <input type="text" placeholder='City' className='form-control' />
                        </div>
                        <div className='my-3'>
                            <input type="text" placeholder='State' className='form-control' />
                        </div>
                        <div className='my-3'>
                            <input type="text" placeholder='Zip Code' className='form-control' />
                        </div>
                        <div className='my-3'>
                            <input type="text" placeholder='Country' className='form-control' />
                        </div>
                        <div className='my-3'>
                            <input type="text" placeholder='Phone' className='form-control' />
                        </div>
                    </form>
                </div>
                <div className="col-lg-6">
                    <h3 >Payment:{getTotalAmount()}</h3>
                     <button className='btn btn-danger' >PROCEED TO PAYMENT</button>
                </div>
            </div>

        </div>
    )
}

export default Order