import React from 'react';
import { testimonials } from '@/data';

const Clients = () => {
  return (
    <section
      className="w-full bg-gradient-to-b from-white via-blue-50 to-white py-20 px-4"
      id="testimonials"
    >
      <h1 className="heading text-center text-4xl md:text-6xl font-bold tracking-wide text-gray-800">
        Kind words from <span className="text-purple-500">Satisfied Clients</span>
      </h1>

      <div className="mt-12 overflow-x-auto no-scrollbar">
        <div className="flex gap-6 px-2 min-w-max">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-sm bg-white rounded-2xl shadow-lg p-6 border border-blue-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-purple-300"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
