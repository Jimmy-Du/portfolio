import React from 'react'
import Heading from '../common/heading/Heading'

const About = () => {
  return (
    <div className="mb-3 flex flex-col items-center 3xl:max-w-6xl" id="about">
      <Heading>About</Heading>
      <p className="w-10/12 text-gray-100 text-lg 3xl:text-xl">
        I am a full stack developer that graduated from the Software Engineering Technology program at Conestoga College.
        My interest in programming started when I was in grade 10, and ever since I have always been looking for new technologies and challenges that will further refine my skill set. I am currently seeking the opportunity to put my skills to the test within an industry enviroment.
      </p>
    </div>
  )
}

export default About