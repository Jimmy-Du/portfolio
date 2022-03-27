import React from 'react'
import ProjectTech from './projectTech/ProjectTech'
import ProjectGithub from './projectGithub/ProjectGithub'

const Project = (props) => {
  return (
    <div className="grid sm:grid-cols-2 3xl:max-w-6xl p-5 mb-8 mt-5 shadow-lg rounded-lg bg-pink-400">
      <h1 
        className="mb-3 underline col-span-2 font-semibold text-xl text-gray-200 sm:text-left 3xl:text-xl"
      >
        {props.title}
      </h1>
      <img className="hidden sm:block self-center rounded-md border-2 p-2" src={props.image} alt="Project Preview"/>
      <div className="self-center flex flex-col">
        <p className="m-2 text-gray-100 w-11/12 self-center text-lg 3xl:text-xl">{props.desc}</p>
        <span className="block m-3">
          {props.tech.map((tech, index) => {
            return <ProjectTech key={index}>{tech}</ProjectTech>
          })}
        </span>
        <ProjectGithub link={props.github}/>
      </div>
    </div>
  )
}

export default Project