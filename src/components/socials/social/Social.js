import React from 'react'
import { IconContext } from 'react-icons/lib'
import { IoLogoGithub } from "react-icons/io"
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'

const Social = (props) => {
  return (
    <IconContext.Provider value={{ className: 'inline pb-1' }}>
      <a className="3xl:text-xl" href={props.link} target="_blank" rel="noreferrer">
        {props.github ? <IoLogoGithub size={40}/> : null}
        {props.email ? <AiOutlineMail size={40}/> : null}
        {props.linkedin ? <AiFillLinkedin size={40}/> : null}
        <p className="inline underline text-lg sm:text-xl text-gray-100">{props.desc}</p>
      </a>
    </IconContext.Provider>
  )
}

export default Social