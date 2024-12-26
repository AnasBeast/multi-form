import React from 'react'

const Confirmation = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center items-center'>
        <img src="./images/icon-thank-you.svg" alt="thank" />
        <h1 className='text-2xl text-marineblue'>Thank You!</h1>
        <h2 className='text-coolgray text-center max-w-md'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</h2>
    </div>
  )
}

export default Confirmation