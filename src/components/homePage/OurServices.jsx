import { BarChart3, Award, PieChart, Database } from 'lucide-react'

export default function OurServices() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-[1480px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide innovative and deeply embedded financing solutions to smallholder farmers in Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="text-emerald-700 mb-4">
              <BarChart3 size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Access To Finance</h3>
            <p className="text-gray-600">
              We help next-gen farmers to the fund of urban and institutional investors - enabling investors with better ROI and farmers with low-cost, timely funding.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="text-emerald-700 mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Access To Quality Input</h3>
            <p className="text-gray-600">
              We find the best agri input suppliers for not only farmers but also agritech providers - improving efficiency and efficacy of farming practices.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="text-emerald-700 mb-4">
              <PieChart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Access To Market</h3>
            <p className="text-gray-600">
              We connect farmers directly to the end market, allowing farmers and everyone in the agri value chain to get the best prices and returns.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="text-emerald-700 mb-4">
              <Database size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Access To Data</h3>
            <p className="text-gray-600">
              We provide farmers with latest market data - prices, demands, and modern agricultural knowledge to make better and more informed decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

