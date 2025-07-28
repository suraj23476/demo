import React from 'react'
import { assets } from '../assets/Assets'

const OurGallery = () => {
    return (
        <>
            <div className="container mt-5 text-center">
                <h6>GALLERY</h6>
                <h2>Our  <span>GALLERY</span></h2>
                <div className="row ">
                    <div className="col-lg-3 ">
                        <img src={assets.gallery_1} className="img-thumbnail" alt="..."></img>
                    </div>
                    <div className="col-lg-3 ">
                        <img src={assets.gallery_2} className="img-thumbnail" alt="..."></img>
                    </div>
                    <div className="col-lg-3 ">
                        <img src={assets.gallery_3} className="img-thumbnail" alt="..."></img>
                    </div>
                    <div className="col-lg-3 ">
                        <img src={assets.gallery_4} className="img-thumbnail" alt="..."></img>
                    </div>
                </div>
                 <div className="row mt-4 ">
                    <div className="col-lg-3 ">
                        <img src={assets.gallery_5} className="img-thumbnail" alt="..."></img>
                    </div>
                    <div className="col-lg-3 ">
                        <img src={assets.gallery_6} className="img-thumbnail" alt="..."></img>
                    </div>
                    <div className="col-lg-3 ">
                        <img src={assets.gallery_7} className="img-thumbnail" alt="..."></img>
                    </div>
                    <div className="col-lg-3 ">
                        <img src={assets.gallery_8} className="img-thumbnail" alt="..."></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurGallery