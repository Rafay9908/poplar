import React from 'react'

import logo from '../assets/poplar-logo-footer.svg'

function Footer() {
  return (
    <>
    <div className='bg-[#0A283F] py-[100px] px-[30px] xl:px-[100px]'>
    <div className='container'>
      <div className='flex items-center text-center flex-col'>
        <img src={logo} alt="" />
        <p className='text-2xl text-[#FFFFFF] my-[50px] leading-[150%]'>Poplar can help you optimize your cash so your business can yield every minute. </p>
        <p className='text-lg text-[#84939F]'>Copyright © Poplar 2025</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer