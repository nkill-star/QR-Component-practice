import React from 'react'
import qr_img from '../../public/images/image-qr-code.png'
const QRcard = () => {
  return (
    <div >
      <div className='bg-white p-3 rounded-xl max-w-[216px] shadow-lg'>
        <img className='w-52 rounded-md' src={qr_img} alt="" />
        <h2 className='font-outfit font-[700] text-sm text-center mt-4 px-2 text-slate-900'>Improve your front-end skills by building projects</h2>
        <p className='font-outfit font-normal text-[11px] mt-2 text-center text-slate-500'> Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}

export default QRcard
