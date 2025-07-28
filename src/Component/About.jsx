import React from 'react'
import { assets } from '../assets/Assets'

const About = () => {
  return (
    <div className='container mt-5'>
      <div className="row gy-5">
        <div className="text-center">
          <h5>about us</h5>
          <h2>learn more <span>about us</span></h2>
        </div>
        <div className="col-lg-6">
          <img src={assets.about_img} alt="" className='img-fluid' />
        </div>
        <div className="col-lg-6">
          <p>
            Welcome to <strong>YUMMY</strong>, a culinary haven where flavor meets elegance. Nestled in the heart of the city,
            we offer an unforgettable dining experience that blends authentic recipes with a modern twist.
            Whether you're joining us for a romantic dinner, a family gathering, or a casual lunch, our chefs craft each dish
            with passion and precision. <br />
            At YUMMY, every bite tells a story of tradition, quality, and hospitality.
          </p>

          <div className="mt-5">
            <h5>Fresh, Locally-Sourced Ingredients</h5>
            <ul>
              <li className="mt-2">We partner with local farms to bring you the freshest produce, meats, and seafood.</li>
              <li className="mt-2">Our seasonal menu highlights ingredients at their peak for unbeatable flavor.</li>
            </ul>
          </div>

          <div className="mt-5">
            <h5>Exceptional Dining Experience</h5>
            <ul>
              <li className="mt-2">Elegant and cozy atmosphere perfect for any occasion.</li>
              <li className="mt-2">Friendly, attentive staff dedicated to making your visit memorable.</li>
            </ul>
          </div>

          <div className="mt-5">
            <h5>Diverse Culinary Offerings</h5>
            <ul>
              <li className="mt-2">Enjoy a curated menu featuring global cuisines, vegan delights, and chef’s specials.</li>
              <li className="mt-2">Daily specials and exclusive tasting menus keep our guests coming back for more.</li>
            </ul>
          </div>

          <div className="mt-5">
            <h5>Customer Satisfaction</h5>
            <ul>
              <li className="mt-2">Highly rated by food critics and loved by loyal patrons.</li>
              <li className="mt-2">Private dining and event hosting available for special celebrations.</li>
              <li className="mt-2">Join our loyalty program for exclusive events and discounts.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>


  )
}

export default About