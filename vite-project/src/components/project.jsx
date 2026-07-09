import React from 'react'
import projectarray from '../assets/projectarray.js';

const Projects = () => {
  return (
    <div id='project' className='servicess flex flex-col gap-10 items-center justify-center'>
      <div className="services-title ">
        <h1 className='relative z-10'>My Projects.</h1>
        <img className='h-20 w-40 absolute border-blue-400 bottom-0 right-0' src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="" />
      </div>
      <div className="services-container ">
        {projectarray.map((project, indx) => {
          return (
            <div className="service-card flex flex-col justify-center gap-3 rounded-xl border-2 border-white border-solid " key={indx}>
              <h3 className='service-no'>{project.id}</h3>
              <h2 className='service-title'>{project.title}</h2>
              <p className='service-p'>{project.description}</p>
              <div>
                <div className='project-title'>Live Demo:</div>
                <a href={project.live} target="_blank" rel="noopener noreferrer">{project.live}</a>
              </div>
              <div>
                <div className='project-title'>Git Hub:</div>
                <a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects