import React from 'react'
import icons from '../utils/iconAccess'

function UpButton() {
  return (
    <a href='#Home' className='fixed h-[50px] w-[50px] z-50 bottom-5 right-5 cursor-pointer'>
          <img src={icons.uparrow} alt="uparrow" />

    </a>
  )
}

export default UpButton