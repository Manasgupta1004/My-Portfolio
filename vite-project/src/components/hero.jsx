import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import myImag from '../assets/myimg1.JPG'
import resume from '../assets/ManassResume.pdf'
const hero = () => {
    return (
        <div  id='home'  className='flex items-center flex-col gap-8 hero'>
            <img className='border-2 rounded-4xl h-45 w-45 hero-img' src={myImag} alt="" />
            <h1 className='text-center hero-h'><span>Hey! I'm Manas Gupta,</span> frontend developer based in INDIA.</h1>
            <p className='hero-p text-center'> I'm passionate  Full Stack Developer (Frontend Focused), currently building my skills in modern web tecnologies and creating clean. </p>
            <div className="hero-action flex gap-6 items-center">
                <div className="hero-connect cursor-pointer"><AnchorLink className="anchor-limk" offset={30} href='#contact'>Connect with me</AnchorLink></div>
                {/* <a href={resume} download='Manas_Resume.pdf'>My Resume</a> */}
                <a href={resume} className='hero-resume' target='_blank'>My Resume</a>
            </div>
        </div>
    )
}

export default hero
