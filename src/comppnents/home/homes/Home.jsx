import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../assets/flex-removebg-preview.png";

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container flex'>
          <div className='left '>
            <div className='img'>
              <img src={Image} alt='' />
            </div>
          </div>
          <div className='right topMarign'>
            <h1>
              I AM A <br />
              WEB DESIGNER
            </h1>
          {/*   <div className='SocailIcon'>
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              <i className='fab fa-twitter twitter'></i>

            </div> */}
            <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='primary-btn'><Link to="/about">About Us</Link></button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home