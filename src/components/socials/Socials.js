import React from 'react'
import Social from './social/Social'
import Heading from '../common/heading/Heading'

const Socials = () => {
  return (
    <div className="mb-7" id="socials">
      <Heading>Socials</Heading>
      <Social link="https://www.github.com/Jimmy-Du" desc="Jimmy-Du" github/>
      <p className="inline p-1">|</p>
      <Social link="mailto:jdu-dev@outlook.com" desc="jdu-dev@outlook.com" email/>
      <p className="inline p-1">|</p>
      <Social link="https://www.linkedin.com/in/j-du" desc="J-Du" linkedin/>
    </div>
  )
}

export default Socials