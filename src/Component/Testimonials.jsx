import React from 'react'
import { assets } from '../assets/Assets'

const Testimonials = () => {
    return (
        <>

            <div className="container text-center mt-5">
                <h6>TESTMONIALS</h6>
                <h2>WHAT ARE THEY <span>SAYING ABOUT US</span></h2>
                <div className="row gy-5">
                    <div className="col-lg-3">
                        <div className="card testmonial-card">
                            <img src={assets.test_img} className="card-img-top testmonial-img" alt="..." />
                            <div className="card-body">
                                 <h5>Mark Thompson</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                         <div className="card testmonial-card">
                            <img src={assets.test_2} className="card-img-top testmonial-img" alt="..." />
                            <div className="card-body">
                                 <h5>Daisy Carter</h5>
                                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                         <div className="card testmonial-card">
                            <img src={assets.test_3} className="card-img-top testmonial-img" alt="..." />
                            <div className="card-body">
                                 <h5>Ethan Garcia</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                         <div className="card testmonial-card">
                            <img src={assets.test_4} className="card-img-top testmonial-img" alt="..." />
                            <div className="card-body">
                                 <h5>Grace Kim</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Testimonials