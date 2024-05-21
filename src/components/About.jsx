import React from 'react'
import resume from '../assets/resume.pdf'

const About = () => {
  return (
    <>
    <div className='conte'>
        <br/>
        <h1>About Myself</h1>
        <br/><br/>
        <p>
          I’m working on a professional, visually sophisticated and
          technologically proficient, responsive and multi-functional React
          Components. I am currently pursuing a B.Tech in Computer Science and
          Engineering from IIIT Pune, an esteemed institute of national
          importance. With a strong passion for technology and innovation, I
          have dedicated myself to mastering various aspects of software
          development.
          <br />
          <br />
          My journey has led me to specialize in web development, where I have
          gained proficiency in a wide range of cutting-edge technologies. I am
          well-versed in the MERN stack, which includes MongoDB, Express.js,
          React.js, and Node.js, allowing me to build robust and scalable web
          applications. Additionally, I have honed my skills in mobile app
          development using frameworks such as React Native and Flutter,
          providing a seamless user experience across different platforms.
          <br />
          <br />
          Apart from my expertise in web and mobile development, I am also
          fascinated by the realms of blockchain and artificial intelligence.
          Exploring these fields has enabled me to understand the transformative
          power they hold and how they can shape the future of technology.
          <br />
          <br />
          In addition to my technical skills, I possess a strong foundation in
          data structures and algorithms, enabling me to design efficient and
          optimized solutions to complex problems.
          <br />
          <br />
          Throughout my academic journey , I have successfully completed
          numerous projects that showcase my practical abilities and commitment
          to delivering high-quality results.
          <br />
          <br />
          I am constantly seeking new challenges and opportunities to expand my
          knowledge and skill set. With a deep enthusiasm for technology, I am
          eager to contribute to innovative projects and collaborate with
          like-minded individuals to make a positive impact.
          <br />
          <br />
          Thank you for your time, and I look forward to connecting with fellow
          enthusiasts and professionals in the world of technology!"
          <br />
        </p>
        <br/><br/><br/>
        <a href={resume} target='_blank' rel='nonreferrer' class="btn">Download CV</a>
      </div></>
  )
}

export default About