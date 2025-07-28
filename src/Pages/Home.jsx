import React, { useState } from 'react'
import Banner from '../Component/Banner'
import About from '../Component/About'
import Menu from '../Component/Menu'
import FoodDisplay from '../Component/FoodDisplay'
import BannerTop from '../Component/BannerTop'
// import AppDownload from '../Component/AppDownload'
import OurChefs from '../Component/OurChefs'
import OurGallery from '../Component/OurGallery'
import Testimonials from '../Component/Testimonials'
import Footer from '../Component/Footer'

const Home = () => {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <BannerTop />
      <Banner />
      <About />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <OurChefs />
      <OurGallery />
      <Testimonials />
      <Footer />
       

    </div>
  )
}

export default Home