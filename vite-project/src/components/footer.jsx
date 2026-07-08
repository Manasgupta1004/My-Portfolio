import React from 'react'
import logo from '../../public/vite.svg'
const footer = () => {
    return (
        <div className='flex flex-col gap-6 footer'>
            <div className="footer-top flex justify-between ">
                <div className="footer-top-left">
                    <img src={logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, enim.</p>
                </div>
                <div className="footer-top-right flex items-center gap-6">
                    <div className="footer-email-input flex gap-6">
                        <img src="data:image/svg+xml,%3csvg%20width='24'%20height='27'%20viewBox='0%200%2024%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_2270_41)'%3e%3cpath%20d='M12.0007%2010.0003C14.3018%2010.0003%2016.1673%208.13485%2016.1673%205.83366C16.1673%203.53247%2014.3018%201.66699%2012.0007%201.66699C9.69946%201.66699%207.83398%203.53247%207.83398%205.83366C7.83398%208.13485%209.69946%2010.0003%2012.0007%2010.0003Z'%20stroke='white'%20stroke-opacity='0.72'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M19.1585%2018.3333C19.1585%2015.1083%2015.9501%2012.5%2012.0001%2012.5C8.05013%2012.5%204.8418%2015.1083%204.8418%2018.3333'%20stroke='white'%20stroke-opacity='0.72'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_2270_41'%20x='-2'%20y='0'%20width='28'%20height='28'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_2270_41'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_2270_41'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e" alt=""></img>
                        <input className='border-none outline-none bg-transparent' type="email" placeholder='Enter your email' name="" id="" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom flex justify-between">
                <div className="footer-bottom-left">
                    <p>© 2025 Manas Gupta. All rights reserved.</p>
                </div>
                <div className="footer-bottom-right flex gap-8">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default footer
