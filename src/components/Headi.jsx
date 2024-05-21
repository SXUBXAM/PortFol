import React from 'react'

function Headi() {
  return (
    <><nav>
    <a class="head" href="#">
      <h1>𝔖𝔥𝔲𝔟𝔥𝔞𝔪</h1>
    </a>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/service">Service</a></li>
      <li><a href="/portfolio">Portfolio</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/contact">Contact</a></li>
      {/* <!-- <li></li> --> */}
      {/* <!-- <li><i style="font-size:24px" class="fa">&#xf09b;</i> --> */}
      {/* </li> */}
    </ul>
    
    <label class="switch">
      <input type="checkbox" onclick="theme()"/>
      <span class="slider"></span>
  </label>
  </nav></>
  )
}

export default Headi