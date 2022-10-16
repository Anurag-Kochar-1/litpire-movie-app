import React from 'react'
import logoFire from "../../images/logoFire.png"

function SidebarLogoBranding() {
  return (
    <div className=' w-full py-2 flex flex-row justify-start items-center'>

        <img src={logoFire} alt="logoFire" className='w-16 hover:cursor-pointer' />
        <h1 className='text-white text-2xl font-bold hover:cursor-pointer'> LitMovies </h1>

    </div>

  )
}

export default SidebarLogoBranding