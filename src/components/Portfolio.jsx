import React from 'react'
import flutter from '../assets/images/flutter.png'
import images from '../assets/images/images.png'
import React_Hero from '../assets/images/React_Hero.png'
import rust from '../assets/images/rust.png'
import tensor from '../assets/images/tensor.png'
import torch from '../assets/images/torch.png'

const Portfolio = () => {
  return (
    <><div className="conte">
         <br/><br/><br/><br/>
    <h1>Projects</h1>
    <br/><br/><br/><br/>
    
    
    <ul id="skill">
      <li>
        <img src={images} alt='images' height="100 px" width="200px" />
      </li>
      <li class="ok">
        <img src={React_Hero} alt='React_Hero' height="100 px" width="100px" />
      </li>
      <li class="ok">
        <img src={flutter} alt='flutter' height="80 px" width="220px" />
      </li>
      <li class="ok">
        <img src={rust} alt='rust' height="100 px" width="130px" />
      </li>
      <li class="ok">
        <img src={torch} alt='torch' height="100 px" width="150px" />
      </li>
      <li class="ok">
        <img src={tensor} alt='tensor' height="100 px" width="150px" />
      </li>
    </ul>
    <br/><br/><br/><br/>

    <p>I specialize in developing powerful eCommerce solutions using MERN (MongoDB, Express.js, React, and Node.js) stack for web and React Native for mobile. With seamless web and native mobile experiences, I create robust applications with features like product listings, search, secure payments, and order management. My expertise in MERN and React Native ensures efficient and engaging eCommerce solutions for businesses.</p>
  </div></>
  )
}

export default Portfolio