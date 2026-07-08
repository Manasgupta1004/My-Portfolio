import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const hero = () => {
    return (
        <div  id='home'  className='flex items-center flex-col gap-8 hero'>
            <img className='border-2 rounded-4xl h-44 w-44 hero-img' src="" alt="" />
            <h1 className='text-center hero-h'><span>Hey! I'm Manas Gupta,</span> frontend developer based in INDIA.</h1>
            <p className='hero-p text-center'> I'm passionate frontend developer, currently building my skills in modern web tecnologies and creating clean. </p>
            <div className="hero-action flex gap-6 items-center">
                <div className="hero-connect cursor-pointer"><AnchorLink className="anchor-limk" offset={30} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default hero
