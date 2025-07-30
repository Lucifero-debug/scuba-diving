import React from 'react'

const TrusetdBySection = () => {
  return (
   <section className="w-full bg-white py-12 px-6 md:px-16 text-center font-poppins">
  <h5 className="text-sm text-gray-500 tracking-widest mb-2">WHY CHOOSE US</h5>
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">What Makes Us Stand Out?</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
    {/* Personalized Experiences */}
    <div className="flex flex-col items-start">
      <div className="text-yellow-500 text-3xl mb-4">📍</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Tailored for You</h3>
      <p className="text-gray-600">
        Every traveler has a story. We design flexible packages that match your style, speed, and interests — making your trip feel truly personal.
      </p>
    </div>

    {/* Unbeatable Price */}
    <div className="flex flex-col items-start">
      <div className="text-yellow-500 text-3xl mb-4">💰</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Value Pricing</h3>
      <p className="text-gray-600">
        Enjoy Goa without overspending. We help you pay only for what matters to you — fully customizable, cost-efficient adventures.
      </p>
    </div>

    {/* Local Expertise */}
    <div className="flex flex-col items-start">
      <div className="text-yellow-500 text-3xl mb-4">🔍</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Insider Knowledge</h3>
      <p className="text-gray-600">
        Our team lives and breathes Goa. We guide you to hidden treasures and authentic spots that typical tourists often miss.
      </p>
    </div>

    {/* Hassle-Free Booking */}
    <div className="flex flex-col items-start">
      <div className="text-yellow-500 text-3xl mb-4">💬</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Simple Booking Process</h3>
      <p className="text-gray-600">
        Booking your Goa journey is smooth and stress-free. Reach us on WhatsApp to ask questions, get help, or confirm your spot instantly.
      </p>
    </div>

    {/* Quality and Value */}
    <div className="flex flex-col items-start">
      <div className="text-yellow-500 text-3xl mb-4">⭐</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Top-Tier Experiences</h3>
      <p className="text-gray-600">
        From trusted accommodations to skilled guides — we focus on quality at every step, so your experience is both rich and reliable.
      </p>
    </div>

    {/* 24/7 Support */}
    <div className="flex flex-col items-start">
      <div className="text-yellow-500 text-3xl mb-4">⏰</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Round-the-Clock Help</h3>
      <p className="text-gray-600">
        Travel with peace of mind. Our support team is available 24/7 — before, during, and after your trip — to assist you anytime.
      </p>
    </div>
  </div>
</section>

  )
}

export default TrusetdBySection