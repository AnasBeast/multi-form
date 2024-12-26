import React from 'react'

const Confirmation = () => {
  return (
    <div className='flex flex-col gap-2 h-full justify-center items-center md:py-12 md:space-y-8 md:px-0 md:top-0 relative -top-16 bg-white w-11/12 md:w-auto px-6 rounded-lg md:rounded-none py-8 mx-auto shadow-lg md:shadow-none'>
        <img src="./images/icon-thank-you.svg" alt="thank" />
        <h1 className='text-2xl font-bold text-marineblue'>Thank You!</h1>
        <h2 className='text-coolgray text-center max-w-md'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</h2>
    </div>
  )
}

export default Confirmation