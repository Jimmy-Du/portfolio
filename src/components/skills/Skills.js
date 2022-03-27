import React from 'react'
import Heading from '../common/heading/Heading'
import { IconContext } from 'react-icons/lib'
import { FaReact, FaNodeJs, FaJava, FaGitSquare } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { 
  SiCsharp, 
  SiMongodb, 
  SiMysql, 
  SiHtml5, 
  SiKotlin, 
  SiChakraui, 
  SiTailwindcss, 
  SiPython, 
  SiExpress,
  SiVuedotjs,
  SiTypescript
} from 'react-icons/si'

const Skills = () => {
  return (
    <IconContext.Provider value={{ className: 'inline pb-1 m-1' }}>
      <div className="mb-3 3xl:max-w-6xl" id="skills">
        <Heading>Skills</Heading>
        <SiHtml5 size={60}/>
        <FaReact size={60}/>
        <SiVuedotjs size={60}/>
        <SiChakraui size={60}/>
        <SiTailwindcss size={60}/>
        <IoLogoJavascript size={60}/>
        <SiTypescript size={60}/>
        <FaNodeJs size={60}/>
        <SiExpress size={60}/>
        <SiMongodb size={60}/>
        <SiMysql size={60}/>
        <SiCsharp size={60}/>
        <FaJava size={60}/>
        <SiKotlin size={60}/>
        <SiPython size={60}/>
        <FaGitSquare size={60}/>
      </div>
    </IconContext.Provider>
  )
}

export default Skills