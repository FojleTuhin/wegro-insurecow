"use client"

import { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"

const carouselImages = [
  "https://www.wegro.global/Home/homebg3.webp",
  "https://www.wegro.global/Home/homebg2.webp",
  "https://www.wegro.global/Home/homebg1.webp",
]

const stats = [
  { value: "$7.2 Mn+", label: "Funds Disbursed" },
  { value: "$2.2 Mn+", label: "Agricultural Yield" },
  { value: "$5.5 Mn+", label: "Returns Reimbursed" },
  { value: "5500+", label: "Farmers Onboarded" },
  { value: "40+", label: "Operational Zones" },
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [emblaApi])

  return (
    <div className="relative h-screen">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {carouselImages.map((src, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-full"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative h-full flex flex-col justify-center px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                  Investing in Agriculture,
                  <br />
                  Simplified
                </h1>
                <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
                  We seek to improve the lives of 10 Million farmers in Bangladesh.
                  <br />
                  Download the WeGro App and join us on our journey.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-white">
                      <div className="text-2xl md:text-3xl font-bold mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm md:text-base opacity-80">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    DOWNLOAD APP
                  </button>
                  <button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-black"
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

