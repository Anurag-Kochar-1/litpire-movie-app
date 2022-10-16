import React from 'react'
import "../utils/utils.css"
import "../App.css"
import SidebarLogoBranding from './Sidebar/SidebarLogoBranding'
import SideBarCategories from './Sidebar/SideBarCategories'
import SideBarGenres from './Sidebar/SideBarGenres'

function SideBar() {
  return (
 
    <div className='hidden hiding-scrollbar addedSidebarClass 

     lg:h-screen lg:bg-[#121212] lg:w-3/12 lg:fixed lg:top-0 lg:left-0 lg:overflow-y-scroll      lg:flex lg:flex-col lg:items-start
     xl:h-screen xl:bg-[#121212] xl:w-[20%] xl:fixed xl:top-0 xl:left-0 xl:overflow-y-scroll          xl:flex xl:flex-col xl:items-start
    '>
        

        
        
        <SidebarLogoBranding />
        <SideBarCategories />
        <SideBarGenres />
        

        
    
    </div>
  )
}

export default SideBar