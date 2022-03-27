import React from 'react'
import Project from './project/Project'
import Heading from '../common/heading/Heading'
import { projectList } from '../../info/info'

const Projects = () => {
  return (
    <div className="p-3 mb-3" id="projects">
      <Heading>Projects</Heading>
      {projectList.map((data, index) => {
        return <Project 
                  key={index} 
                  title={data.title} 
                  image={data.image}
                  desc={data.description} 
                  tech={data.tech}
                  github={data.github}
                />
      })}
    </div>
  )
}

export default Projects