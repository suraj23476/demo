import React from 'react'
import { chif } from '../assets/Assets'

const OurChefs = () => {
    return (
        <>
            <div className="container text-center mt-5 ">
                <h6>CHEF’S</h6>
                <h2>Our  <span>PROFESSIONAL CHEF’S</span></h2>
                <div className="row gy-3 mt-5">
                    <div className='chef-info'>
                        <div className="col-lg-3  mt-5">
                            <div className="card ">
                                <img src={chif.chif_3} className="card-img-top" alt="..." />
                                <div className="card-body ">
                                    <h4>Wlter White</h4>
                                    <h5>Executive Chef</h5>
                                    <p className="card-text">
                                        With over 20 years of experience in international cuisine, Chef Walter leads our kitchen with creativity and precision.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3  mt-5">
                            <div className="card">
                                <img src={chif.chif_2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4>Sushil Kumar</h4>
                                    <h5>Master Chef</h5>
                                    <p className="card-text">
                                        Known for his innovation in Indian fusion, Chef Sushil blends tradition with modern techniques to deliver unforgettable dishes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-5">
                            <div className="card">
                                <img src={chif.chif_1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4>Rahul kumar</h4>
                                    <h5>Pastry Chef</h5>
                                    <p className="card-text">
                                        Specializing in artisan desserts and pastries, Chef Rahul brings sweetness and creativity to every plate.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurChefs