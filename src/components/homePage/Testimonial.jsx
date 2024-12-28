// import Image from "next/image";
// import React from "react";

// const Testimonial = () => {
//   return (
//     <div className="max-w-[1440px] mx-auto py-[82px]  sm:py-[100px] sm:pl-16">
//       <div className="flex gap-5 relative">
//         <div className="w-[70%]">
//           <div className="flex  border rounded-lg shadow-lg overflow-hidden bg-white">
//             <Image
//               src="https://www.wegro.global/Home/user1.webp"
//               alt="Mahir Bin Mehedi"
//               height={456}
//               width={372}
//               className="w-full sm:w-[372px] h-[456px] object-cover object-[45%] mx-auto"
//             />
//             <div className="p-6 flex flex-col justify-evenly ">
//               <p className="text-sm sm:text-base lg:text-[20px]  lg:leading-[24px] lg:tracking-[0px] font-normal text-[#484848]">
//                 Partnering with WeGro has been a seamless and rewarding
//                 experience. Their platform offers great investment opportunities
//                 in the agricultural sector, and I've been impressed with the
//                 reliable returns and the positive impact on farmers. I highly
//                 recommend them for anyone looking to invest in a sustainable
//                 future.
//               </p>
//               <div className="pl-4 border-l-2 border-orange-500">
//                 <p className="text-xl md:text-[32px] font-normal font-fira">
//                   Mahir Bin Mehedi
//                 </p>
//                 <p className="text-sm sm:text-base lg:text-[20px] lg:leading-[30px] lg:tracking-[0px] font-normal">
//                   Graduate Trainee - Airtel Data BTL
//                 </p>
//                 <p className="text-xs sm:text-sm md:text-base font-normal">
//                   Robi Axiata Limited
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

      
//       </div>
//     </div>
//   );
// };

// export default Testimonial;


'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Mahir Bin Mehedi",
    position: "Graduate Trainee - Airtel Data BTL",
    company: "Robi Axiata Limited",
    text: "Partnering with WeGro has been a seamless and rewarding experience. Their platform offers great investment opportunities in the agricultural sector, and I've been impressed with the reliable returns and the positive impact on farmers. I highly recommend them for anyone looking to invest in a sustainable future.",
    image: "https://www.wegro.global/Home/user1.webp"
  },
  {
    id: 2,
    name: "Nafis Kazi",
    position: "Assistant Manager - Fiscal Affairs, CORA",
    company: "BAT Bangladesh",
    text: "My journey with WeGro has been really good till now. Along with good returns, they also provide a wide array of investing options with variable time periods which allows me to choose between short-term and long-term investments. The app interface is also quite good and I am really satisfied with their customer service.",
    image: "https://www.wegro.global/Home/user2.webp"
  }
]

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const next = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500) // Match this with the transition duration
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  return (
    <section className="w-full max-w-[1440px] mx-auto py-[82px] px-4 sm:py-[100px] sm:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-lg text-gray-600 md:max-w-[50%] text-center mx-auto">
            We believe in building strong relationships and are excited to help you
            achieve your goals. Let us create a positive impact together!
          </p>
        </div>
      {/* Mobile View */}
      <div className="lg:hidden ">
        <div className="max-w-[600px]  w-full mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-[300px] w-full">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                fill
                className="object-contain "
                priority
              />
            </div>
            <div className="p-6 ">
              <p className="text-gray-600 mb-4">{testimonials[currentIndex].text}</p>
              <div className='pl-4 border-l-2 border-orange-500'>
              <h3 className="font-semibold text-lg">{testimonials[currentIndex].name}</h3>
              <p className="text-sm text-gray-500">{testimonials[currentIndex].position}</p>
              <p className="text-sm text-gray-500">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop View (>1024px) */}
      <div className="hidden lg:block w-full">
        

        <div className="w-full px-16 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`} 
                className="flex-shrink-0 w-full"
              >
                <div className="flex justify-center">
                  <div className="xl:w-[80%] w-full max-w-[1000px]">
                    <div className="flex border rounded-lg shadow-lg overflow-hidden bg-white">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        height={456}
                        width={372}
                        className="w-full sm:w-[372px] h-[456px] object-cover object-[45%] mx-auto"
                      />
                      <div className="p-6 flex flex-col justify-evenly">
                        <p className="text-sm sm:text-base lg:text-[20px] lg:leading-[24px] lg:tracking-[0px] font-normal text-[#484848]">
                          {testimonial.text}
                        </p>
                        <div className="pl-4 border-l-2 border-orange-500">
                          <p className="text-xl md:text-[32px] font-normal font-fira">
                            {testimonial.name}
                          </p>
                          <p className="text-sm sm:text-base lg:text-[20px] lg:leading-[30px] lg:tracking-[0px] font-normal">
                            {testimonial.position}
                          </p>
                          <p className="text-xs sm:text-sm md:text-base font-normal">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-start gap-4 mt-8 ml-44">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-[#003D2B] hover:bg-[#002D1B] text-white"
            aria-label="Previous testimonial"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="p-3 rounded-full bg-[#003D2B] hover:bg-[#002D1B] text-white"
            aria-label="Next testimonial"
            disabled={isAnimating}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

