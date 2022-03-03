import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {coord,isSubmenu,page:{page,links}} = useGlobalContext();
  const container = useRef(null);
  useEffect(()=>{
    const {center,bottom} = coord;
    const submenu = container.current;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  },[coord])
  // console.log(Object.keys(links).length);
  // console.log(links.length)
  return <aside ref={container} className={`submenu ${isSubmenu && 'show'}`}>
          <div className={`submenu-center col-${links.length}`}>
          {links.length && links.map((link, index) => {
            const { url, icon, label } = link
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </aside>
}

export default Submenu
