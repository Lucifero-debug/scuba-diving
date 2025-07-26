import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
    <h1 className='heading'>
      Kind words From {' '}
      <span className='text-purple'> Satisfied Clients</span>
    </h1>
    <div className='flex flex-col items-center max-lg:mt-10 lg:mt-6'>
    <InfiniteMovingCards items={testimonials} direction='right' speed='slow'/>
    </div>
    </div>
  )
}

export default Clients
