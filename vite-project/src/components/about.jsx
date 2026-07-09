import React from 'react'

const about = () => {
  return (
    <div id='about' className='about flex flex-col gap-14 items-center justify-center'>
      <div className="about-title">
        <h1>About me.</h1>
      </div>
      <div className="about-section flex gap-20">
        {/* <div className="about-left">
          <img className='h-20 w-40 border-blue-400' src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="" />
        </div> */}
        <div className="about-right flex flex-col gap-10">
          <div className="about-p flex flex-col gap-2">
            <p>I am focusing on improving my skills in HTML, CSS, Javascript, React JS and Node JS, Express JS, Mongo DB While building projects to learn and grow as a developer.</p>
            <p>As a full stack developer, I building website that combine creativity and functionality.</p>
          </div>
          <div className="about-skills flex flex-col gap-4">
            <div className="about-skill"><p>HMTL & CSS</p><hr className='w-92' /></div>
            <div className="about-skill"><p>Tailwind</p><hr className='w-72' /></div>
            <div className="about-skill"><p>Javascript</p><hr className='w-84' /></div>
            <div className="about-skill"><p>React Js</p><hr className='w-100' /></div>
            <div className="about-skill"><p>Node Js</p><hr className='w-72' /></div>
            <div className="about-skill"><p>Express JS</p><hr className='w-70' /></div>
            <div className="about-skill"><p>Mongo DB</p><hr className='w-75' /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about



