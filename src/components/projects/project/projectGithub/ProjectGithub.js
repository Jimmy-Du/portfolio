import React from 'react'
import { IoLogoGithub } from "react-icons/io"
import { IconContext } from 'react-icons/lib'
import { BiLinkExternal } from 'react-icons/bi'

const ProjectGithub = (props) => {
  return (
    <IconContext.Provider value={{ className: 'inline pb-1' }}>
      <a className="p-px border-2 border-indigo-700 text-gray-700 self-center 3xl:text-xl" href={props.link} target="_blank" rel="noreferrer">
        <IoLogoGithub size={20}/>Github<BiLinkExternal/>
      </a>
    </IconContext.Provider>
  )
}

export default ProjectGithub