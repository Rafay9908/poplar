import React from 'react'

import logo from '../assets/poplar-logo-footer.svg'

function Footer() {
  return (
    <>
    <div className='bg-[#0A283F] p-[100px]'>
    <div className='container'>
      <div className='flex items-center text-center flex-col'>
        <img src={logo} alt="" />
        <p className='text-2xl text-[#FFFFFF] my-[50px]'>Poplar can help you optimize your cash so your <br /> business can yield every minute. </p>
        <p className='text-lg text-white'>Copyright © Poplar 2022</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer