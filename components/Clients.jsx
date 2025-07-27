import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { testimonials } from '@/data';

const Clients = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white via-blue-50 to-white py-20 px-4" id="testimonials">
      <h1 className="heading text-center text-4xl md:text-6xl font-bold tracking-wide text-gray-800">
        Kind words from <span className="text-purple-500">Satisfied Clients</span>
      </h1>

      <div className="mt-12 flex flex-col items-center">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
