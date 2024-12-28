"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const menuItems = [
  { name: "HOME", href: "/" },
  { name: "PROJECTS", href: "/projects" },
  {
    name: "PRODUCTS",
    href: "/products",
    submenu: true,
    subItems: [
      { name: "Product 1", href: "/" },
      { name: "Product 2", href: "/" },
      { name: "Product 3", href: "/" },
    ],
  },
  { name: "IMPACT", href: "/impact" },
  {
    name: "ABOUT",
    href: "/about",
    submenu: true,
    subItems: [
      { name: "WHO WE ARE", href: "/" },
      { name: "OUR PARTNERS", href: "/" },
      { name: "BLOGS", href: "/" },
      { name: "CAREER", href: "/" },
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">WEGRO</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "text-white hover:text-orange-400 transition-colors flex items-center",
                    pathname === item.href && "text-orange-400"
                  )}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded-md shadow-lg">
                    <div className="py-2">
                      {item.subItems?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-400 hover:text-white"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Schedule Meeting Button */}
          <button className="hidden lg:block bg-white text-black px-6 py-2 rounded-md hover:bg-orange-400 hover:text-white transition-colors">
            Schedule a Meeting
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-40">
          <div className="flex flex-col items-center pt-8 h-full relative">
            {/* Logo in mobile menu */}
            <Link href="/" className="">
              <span className="text-2xl font-bold text-white">WEGRO</span>
            </Link>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-6 text-white"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Menu Items */}
            <div className="flex flex-col items-center  pt-12 min-h-screen w-full bg-black opacity-80">
              {menuItems.map((item) => (
                <div key={item.name} className="text-center ">
                  <Link
                    href={item.href}
                    className={cn(
                      "text-white text-xl mt-4 font-medium hover:text-orange-400 transition-colors flex items-center",
                      pathname === item.href && "text-orange-400"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-2 h-4 w-4" />}
                  </Link>
                </div>
              ))}

              {/* Schedule Meeting Button */}
              <button className="mt-20 bg-white text-black px-8 py-3 rounded-md hover:bg-orange-400 hover:text-white transition-colors">
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
