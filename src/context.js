import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

const AppContext = createContext();

export const AppProvider = ({children}) =>{
  const [isSlidebar,setSlidebar] = useState(false);
  const [isSubmenu,setSubmenu] = useState(false);
  const [coord,setCoord]=useState({});
  const [page,setPage] = useState({page:'',links:[]})
  const openSubmenu = (text,coordinates) =>{
    const Page = sublinks.find((link)=>text===link.page);
    setPage(Page);
    setCoord(coordinates);
    setSubmenu(true);
  }
  const closeSubmenu = () =>{
    setSubmenu(false);
  }
  return <AppContext.Provider value={{isSlidebar,isSubmenu,setSlidebar,openSubmenu,closeSubmenu,coord,page}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () =>{
  return useContext(AppContext);
}
