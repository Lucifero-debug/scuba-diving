"use client";
import { useState, useCallback, useEffect } from 'react';
import { FaBullseye, FaPlaneDeparture, FaGift } from 'react-icons/fa';

function Carousel() {
  const offers = [
    {
      title: 'Hit the Target with Group Savings',
      subtitle: 'GROUP BOOKING',
      discount: '30%',
      buttonLabel: 'CALL NOW',
      icon: FaBullseye,
      iconColor: 'text-yellow-500 drop-shadow-md',
    },
    {
      title: 'Fly High on Budget Deals',
      subtitle: 'SCUBA COMBO',
      discount: '25%',
      buttonLabel: 'BOOK NOW',
      icon: FaPlaneDeparture,
      iconColor: 'text-sky-500 drop-shadow-md',
    },
    {
      title: 'Unwrap Early Surprises!',
      subtitle: 'EARLY BIRD',
      discount: '20%',
      buttonLabel: 'CONTACT US',
      icon: FaGift,
      iconColor: 'text-pink-500 drop-shadow-md',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  }, [offers.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? offers.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="relative w-full h-auto md:h-[28rem] max-w-screen-xl mx-auto">
      <div className="overflow-hidden relative w-full h-full">
        <div
          className="flex transition-transform duration-300 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {offers.map((offer, index) => {
            const IconComponent = offer.icon;
            return (
              <div
                key={index}
                className="relative w-full flex-shrink-0 flex items-center justify-center px-4 py-10 md:py-14"
              >
                {/* Main Card */}
                <div className="relative w-full max-w-md p-6 rounded-3xl 
                    bg-gradient-to-br from-[#fff5ea] to-[#ffe3f2]
                    border border-[#00000011]
                    shadow-[0_12px_40px_rgba(0,0,0,0.08)]
                    text-neutral-900 flex flex-col items-center gap-6 sm:gap-8 text-center"
                >
                  <div className={`text-5xl sm:text-6xl ${offer.iconColor}`}>
                    <IconComponent />
                  </div>
                  <h2 className="text-lg sm:text-2xl font-bold tracking-wide">{offer.title}</h2>
                  <p className="text-xs sm:text-sm text-neutral-500 uppercase tracking-[0.15em]">{offer.subtitle}</p>
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400 text-black flex flex-col items-center justify-center text-2xl sm:text-3xl font-extrabold shadow-inner">
                    {offer.discount}
                    <span className="text-xs font-bold mt-1">OFF</span>
                  </div>
                  <button className="mt-2 px-4 py-2 sm:px-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md transition-all duration-200 hover:scale-105 shadow-md">
                    {offer.buttonLabel}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-10 text-gray-700 p-2 hover:bg-opacity-20 rounded-full"
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-10 text-gray-700 p-2 hover:bg-opacity-20 rounded-full"
      >
        &#8594;
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {offers.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-yellow-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
