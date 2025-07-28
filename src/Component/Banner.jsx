import React from 'react';
import { assets } from '../assets/Assets';

const Banner = () => {
  return (
    <div className="banner">
      <div className="container-fluid">
        <div className="row align-items-center gy-3">
          <div className="col-lg-6">
            <div className="banner-content">
              <h1>
                Enjoy Your Healthy <br />
                <span>Delicious Food</span>
              </h1>
              <p>
                Discover the perfect blend of taste and nutrition with our chef-crafted meals. Whether you're craving something light or indulgent, our menu is packed with flavorful dishes made from fresh, high-quality ingredients. <br />
                From hearty breakfasts to satisfying dinners, we bring you food that's not only delicious but also fuels your day. Taste the difference in every bite and enjoy the goodness your body deserves.
              </p>

              <button className="btn btn-danger" >Order Now</button>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={assets.hero_img} alt="Delicious Food" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
