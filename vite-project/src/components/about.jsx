import React from 'react'

const about = () => {
  return (
    <div id='about' className='about flex flex-col gap-14 items-center justify-center'>
      <div className="about-title">
        <h1>About me.</h1>
      </div>
        <div className="about-section flex gap-20">
            <div className="about-left">
                <img className='h-20 w-40 border-blue-400' src="" alt="" />
            </div>
            <div className="about-right flex flex-col gap-10">
                <div className="about-p flex flex-col gap-2">
                    <p>I am focusing on improving my skills in HTML, CSS, Javascript and React JS While building projects to learn and grow as a developer.</p>
                    <p>As a frontend developer, I building website that combine creativity and functionality.</p>
                </div>
                <div className="about-skills flex flex-col gap-4">
                    <div className="about-skill"><p>HMTL & CSS</p><hr className='w-92' /></div>
                    <div className="about-skill"><p>Tailwind</p><hr className='w-72' /></div>
                    <div className="about-skill"><p>Javascript</p><hr className='w-84' /></div>
                    <div className="about-skill"><p>React Js</p><hr className='w-100' /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about



