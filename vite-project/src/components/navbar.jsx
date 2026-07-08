import React, { useRef } from 'react'
import logo from '../assets/vite.svg'
import { useState, } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const navbar = () => {

  const [menu, setmenu] = useState("home");

  const menuRef = useRef()

  const openmenu = () => {
    menuRef.current.style.right = "0"
  }
  const closemenu = () => {
    menuRef.current.style.right = "-350px"
  }

  return (
    <div className='flex items-center justify-between navbar'>
      <img src={logo} alt="" />
      <img onClick={openmenu} className='nav-mob-open' src="data:image/svg+xml,%3csvg%20width='36'%20height='29'%20viewBox='0%200%2036%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='35.9988'%20height='4'%20rx='2'%20fill='white'/%3e%3crect%20x='13.0898'%20y='12.5'%20width='22.9083'%20height='4'%20rx='2'%20fill='white'/%3e%3crect%20x='4.91016'%20y='25'%20width='31.0899'%20height='4'%20rx='2'%20fill='white'/%3e%3c/svg%3e" alt="" class="nav-mob-open"></img>
      <ul ref={menuRef} className='flex gap-10 list-none items-center ul '>
        <img onClick={closemenu} className='nav-mob-close' src="data:image/svg+xml,%3csvg%20width='15'%20height='15'%20viewBox='0%200%2015%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.3216%200.678819C14.6963%201.05359%2014.6963%201.66113%2014.3216%202.0359L2.10786%2014.2521C1.73306%2014.627%201.1253%2014.627%200.750501%2014.2521V14.2521C0.375808%2013.8774%200.375807%2013.2698%200.750501%2012.8951L12.9642%200.678818C13.339%200.303939%2013.9468%200.30394%2014.3216%200.678819V0.678819Z'%20fill='white'/%3e%3cpath%20d='M14.2495%2014.3212C14.6242%2013.9464%2014.6242%2013.3389%2014.2495%2012.9641L2.03576%200.747858C1.66096%200.372979%201.0532%200.372981%200.678402%200.74786V0.74786C0.303708%201.12263%200.303708%201.73017%200.678402%202.10494L12.8921%2014.3212C13.2669%2014.6961%2013.8747%2014.6961%2014.2495%2014.3212V14.3212Z'%20fill='white'/%3e%3c/svg%3e" alt="" class="nav-mob-close"></img>
        {/* <li className={menu==="home"? "active":""}><p onClick={() =>  setmenu("home") }>Home</p></li> */}
        <li><AnchorLink className="anchor-link" href='#home' ><p onClick={() => setmenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="" /> : <></>} </li>
        <li><AnchorLink className="anchor-link" offset={30} href='#about'><p onClick={() => setmenu("about")}>About me</p></AnchorLink>{menu === "about" ? <img src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="" /> : <></>} </li>
        <li><AnchorLink className="anchor-link" offset={30} href='#services'><p onClick={() => setmenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="" /> : <></>} </li>
        <li><AnchorLink className="anchor-link" offset={30} href='#contact'><p onClick={() => setmenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="" /> : <></>} </li>
      </ul>
      <div className='nav-connect connect cursor-pointer'><AnchorLink className="anchor-link" offset={30} href='#contact'>Connect With Me.</AnchorLink></div>
    </div>
  )
}

export default navbar
