import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const {isSlidebar,setSlidebar} = useGlobalContext();
  
  return <aside className={`sidebar-wrapper ${isSlidebar && 'show'}`}>
    <div className='sidebar'>
      <button onClick={()=>setSlidebar(false)} className='close-btn'><FaTimes/></button>
      <div className='sidebar-links'>
          {sublinks.map(({page,links},index)=>{
            return <article key = {index} className='sidebar-sublinks'>
              <h4>{page}</h4>
              <div className='sidebar-sublinks'>
                {links.map(({label,icon,url},idx)=>{
                  return <a key={idx} href={url}>
                    {icon}
                    {label}
                  </a>
                })}
              </div>
            </article>
          })}
      </div>
    </div>  
  </aside>
}

export default Sidebar;