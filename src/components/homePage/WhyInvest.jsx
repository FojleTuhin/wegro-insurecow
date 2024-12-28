import { TrendingUp, Users, Leaf, Building2, DollarSign, PieChart } from 'lucide-react'

export default function WhyInvest() {
  return (
    <section className="w-full py-16">
      <div className="max-w-[1480px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Invest in Agriculture?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Put a farm in your pocket. Grow your wealth & diversify your portfolio with passive investments in farming and agribusiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-emerald-700">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-xl font-bold">Inflation-proof Your Portfolio</h3>
            <p className="text-gray-600">
              Investments in farming and agribusiness are non-correlated with the stock market and appreciate with the underlying price of land.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-emerald-700">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold">Feed a Growing Population & Enhance Food Security</h3>
            <p className="text-gray-600">
              With the world population projected to hit 10 billion by the year 2050, agricultural production will be depended on more than ever to reach increased food, fuel, and fiber demand.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-emerald-700">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-bold">Food System Connection</h3>
            <p className="text-gray-600">
              Investing is a great way to improve agriculture production and create a more resilient food system. Grow your wealth by connecting with an AgTech, sustainable livestock, specialty crop, or controlled environment investment opportunity.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-emerald-700">
              <Building2 size={32} />
            </div>
            <h3 className="text-xl font-bold">Positive Social and Economic Impact</h3>
            <p className="text-gray-600">
              The agriculture sector provides jobs for approximately 1 billion people globally. Your passive investment will help keep farmers in the business of farming, create employment opportunities, and encourage small business growth.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-emerald-700">
              <DollarSign size={32} />
            </div>
            <h3 className="text-xl font-bold">Low Volatility</h3>
            <p className="text-gray-600">
              Agriculture is less susceptible to the extreme market fluctuations seen in other industries. Because food is a necessity, demand remains consistent even during economic downturns. This makes agricultural investments a stable option for those seeking lower volatility in their portfolios.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-emerald-700">
              <PieChart size={32} />
            </div>
            <h3 className="text-xl font-bold">Attractive Yields</h3>
            <p className="text-gray-600">
              Historically, agricultural investments have provided strong, reliable returns. Whether through crop production, livestock, or agri-tech innovations, investors can benefit from consistent yields and long-term capital appreciation, making agriculture an attractive choice for those looking for steady income.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

