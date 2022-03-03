import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Navbar = () => {
  const {isSlidebar,setSlidebar,openSubmenu,closeSubmenu} = useGlobalContext();
  const ShowSubmenu = (e) =>{
    const text = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right)/2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(text,{center,bottom});
  }
  const HideSubmenu = (e) =>{
    closeSubmenu();
  }
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="" />
          <button onClick={()=>setSlidebar(true)} className="btn toggle-btn"><FaBars/></button>
      </div>
      <ul className="nav-links" >
        {sublinks.map(({page},index)=>{
          return <li key={index}><button onMouseOver={ShowSubmenu} onMouseLeave={HideSubmenu} className="link-btn">{page}</button></li>
        })}
        {/* <li><button className="link-btn">products</button></li>
        <li><button className="link-btn">developers</button></li>
        <li><button className="link-btn">company</button></li> */}
      </ul>
      <button className="btn signin-btn">Sign in</button></div>
    </nav>
    )
}

export default Navbar
