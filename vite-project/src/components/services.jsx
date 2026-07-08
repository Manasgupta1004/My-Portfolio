import React from 'react'
import servicesarray from '../assets/servicearray.js';

const Services = () => {
  return (
    <div id='services' className='servicess flex flex-col gap-10 items-center justify-center'>
      <div className="services-title ">
        <h1>My Services.</h1>
        <img className='h-20 w-40 border-blue-400' src="" alt="" />
      </div>
      <div className="services-container ">
         {servicesarray.map((services, indx)=>{
          return(
            <div className="service-card flex flex-col justify-center gap-3 rounded-xl border-2 border-white border-solid " key={indx}>
              <h3 className='service-no'>{services.id}</h3>
              <h2 className='service-title'>{services.title}</h2>
              <p className='service-p'>{services.description}</p>
            </div>
          )
         })}
      </div>
    </div>
  )
}

export default Services
