import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[url('https://bimafy.com/images/frontend/v2/front-page/footer.svg')] bg-cover bg-center pt-16 pb-8">
      <div className="max-w-[1480px] mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Image src="/placeholder.svg" alt="Bimafy" width={150} height={50} className="mb-4" />
            <p className="text-gray-600 mb-6">
              Simply compare, order and enjoy.<br />
              Reliable digital insurance solutions<br />
              at your fingertips.
            </p>
            <div className="flex gap-3 mb-6">
              <Link href="#" className="bg-white p-2 rounded-full hover:bg-gray-100">
                <Facebook size={20} className="text-blue-600" />
              </Link>
              <Link href="#" className="bg-white p-2 rounded-full hover:bg-gray-100">
                <Linkedin size={20} className="text-blue-600" />
              </Link>
              <Link href="#" className="bg-white p-2 rounded-full hover:bg-gray-100">
                <Instagram size={20} className="text-pink-600" />
              </Link>
              <Link href="#" className="bg-white p-2 rounded-full hover:bg-gray-100">
                <Twitter size={20} className="text-blue-400" />
              </Link>
            </div>
            <div className="mb-6">
              <p className="font-semibold mb-2">DBID: 591600164</p>
              <Image src="/placeholder.svg" alt="IDRA" width={100} height={100} className="mb-2" />
              <p className="font-semibold mb-1">Approved by</p>
              <p className="font-semibold text-sm">
                INSURANCE DEVELOPMENT AND<br />
                REGULATORY AUTHORITY
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">Registered Address</p>
              <p className="text-gray-600">
                Eastern View (10th Floor), 50 DIT Ext. Road,<br />
                Nayapaltan, Dhaka - 1222
              </p>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Helpful Links */}
            <div>
              <h3 className="text-gray-600 font-medium mb-4">Helpful Links</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Refund Policy</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-gray-600 font-medium mb-4">Policies</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Health Insurance</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Travel Insurance</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Accident Insurance</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Car Insurance</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Motorcycle Insurance</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Life Insurance</Link></li>
              </ul>
            </div>

            {/* Offers */}
            <div>
              <h3 className="text-gray-600 font-medium mb-4">Offers</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Online Payment EMI</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Partner Cashless Hospitalization</Link></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-gray-600 font-medium mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Insurance Policies</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Activate</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Claims</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Corporate Solutions</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-600 font-medium mb-4">Connect with us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={20} className="text-teal-600" />
                <Link href="tel:+8809606991991" className="text-gray-600 hover:text-gray-900">+8809606991991</Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="text-teal-600" />
                <Link href="tel:01892090020" className="text-gray-600 hover:text-gray-900">01892090020 (B2B)</Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="text-teal-600" />
                <Link href="tel:01404033080" className="text-gray-600 hover:text-gray-900">01404033080 (Claim Assistance)</Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="text-teal-600" />
                <Link href="mailto:cs@bimafy.com" className="text-gray-600 hover:text-gray-900">cs@bimafy.com</Link>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={20} className="text-teal-600" />
                <Link href="#" className="text-gray-600 hover:text-gray-900">Client Center</Link>
              </li>
            </ul>

            {/* Language Selector */}
            <div className="mt-6">
              <button className="flex items-center gap-2 px-4 py-2 border rounded">
                <Image src="/placeholder.svg" alt="EN" width={20} height={15} />
                <span>EN</span>
              </button>
            </div>

            {/* Mobile App Download */}
            <div className="mt-8">
              <p className="text-gray-600 mb-4">Download the Bimafy Mobile App</p>
              <div className="flex gap-4">
                <Link href="#">
                  <Image src="/placeholder.svg" alt="Get it on Google Play" width={140} height={42} />
                </Link>
                <Link href="#">
                  <Image src="/placeholder.svg" alt="Download on the App Store" width={140} height={42} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Channels */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <p className="text-gray-600 mb-4">Payment Channels</p>
          <div className="flex flex-wrap gap-4 items-center">
            {[...Array(20)].map((_, i) => (
              <Image key={i} src="/placeholder.svg" alt={`Payment Method ${i + 1}`} width={60} height={30} className="object-contain" />
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm">
          <p>Copyright © 2023 Bimafy Ltd. All rights reserved.</p>
        </div>

        {/* WhatsApp Float Button */}
        <Link 
          href="#" 
          className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <svg 
            viewBox="0 0 24 24" 
            width="24" 
            height="24" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </Link>
      </div>
    </footer>

    </div>
  );
};

export default Footer;
