import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='container-fulid bg-black mt-5 footer-main p-5 text-white'>
      <div className="row">
        <div className="col-lg-3 footer">
          <ul>
            <li> <FaLocationDot className='footer-logo me-1' /> Address</li>
            <li>A108, Phase-8</li>
            <li>Mohali</li>
          </ul>
        </div>
        <div className="col-lg-3 footer ">
          <ul>
            <li><IoCallSharp className='footer-logo me-1' />  Contact</li>
            <li>Phone: +123456789</li>
            <li>Email: test@gmail.com</li>
          </ul>
        </div>
        <div className="col-lg-3 footer">
          <ul>
            <li><FaClock className='footer-logo me-1' /> Opening Hours</li>
            <li>9AM-10PM</li>
          </ul>
        </div>
        <div className="col-lg-3 footer ">
          <ul>
            <li>Follow Us</li>
            <a href="https://www.facebook.com/"><FaFacebook className='footer-logo mt-3' /></a>
            <a href="https://www.instagram.com/"><FaInstagramSquare className='footer-logo mt-3 ms-3' /></a>
            <a href="https://www.whatsapp.com/"><IoLogoWhatsapp className='footer-logo mt-3 ms-3' /></a>
            <a href="https://x.com/i/flow/login"><FaXTwitter className='footer-logo mt-3 ms-3' /></a>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="text-white text-center ">
        <hr />
        <h6>copyright@2525yummy</h6>
      </div>
      </div>
    </div>
  )
}

export default Footer