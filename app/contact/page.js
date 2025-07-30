import ContactForm from '@/components/ContactForm'
import ContactInfoSection from '@/components/ContactInfoSection'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col w-full min-h-screen mt-20'>
<div className='w-full bg-gray-300 h-[30vh] text-black'>
  <h1 className='text-[68px] font-semibold lg:text-[68px] text-center font-poppins'>Contact Us</h1>
  <h2 className='text-[24px] text-center font-light font-poppins lg:text-[44px]'>We would love to speak with you.
Feel free to reach out.</h2>
</div>
<ContactForm/>
<ContactInfoSection/>
    </div>
  )
}

export default page