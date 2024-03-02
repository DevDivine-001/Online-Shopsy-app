import React from 'react'

const Popup = ({orderPopup, setOrderPopup}) => {
  return (
    <>
        {
            orderPopup && (
           <div className='popup'>
            <div className='h-screen w-screen fixed top-0
            left-0 bg-black/50 z-50 backdrop-blur-sm'></div>

           </div>   
            )
        }
    </>
  )
}

export default Popup