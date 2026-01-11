import React from 'react';
import { testimonials } from '@/data';

const Clients = () => {
  return (
    <section
      className="w-full bg-gradient-to-b from-white via-blue-50 to-white py-20 px-4"
      id="testimonials"
    >
      <h1 className="heading text-center text-4xl md:text-6xl font-bold tracking-wide text-gray-800">
        Kind words from Satisfied Clients
      </h1>

      <div className="mt-12 overflow-x-auto overflow-y-visible no-scrollbar">
        <div className="flex gap-6 px-2 min-w-max pt-10">
          {testimonials.map((testimonial, index) => (
<div
  key={index}
  className="relative  overflow-visible min-w-[320px] max-w-[320px] bg-white rounded-2xl shadow-xl px-6 pt-8 pb-6"
>
  {/* Avatar */}
  <div className="absolute -top-8 left-13 -translate-x-1/2">
    <img
      src={testimonial.img}
      alt={testimonial.name}
      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
    />
  </div>

  {/* Name & Role */}
  <div className="text-center mt-2">
    <h3 className="text-[16px] font-bold font-poppins text-[#191919]">
      {testimonial.name}
    </h3>
    <p className="text-[12px] font-normal font-poppins text-[#191919] mb-3">
      {testimonial.title}
    </p>

    {/* Stars */}
    <div className="flex justify-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  </div>

  {/* Quote */}
  <p className="text-[16px] text-[#191919] font-normal font-poppins leading-relaxed text-center">
    {testimonial.quote}
  </p>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
