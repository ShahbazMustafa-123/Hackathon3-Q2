"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { ShoppingBagIcon, User2Icon, MenuIcon, XIcon, Heart } from "lucide-react";

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Sidebar Toggle State

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-5">
            {[
              { name: "Home", path: "/" },
              { name: "Menu", path: "/menu" },
              { name: "Blog", path: "/blog" },
              { name: "Pages", path: "/checkout" },
              { name: "About", path: "/about" },
              { name: "Shop", path: "/shop" },
              { name: "Chef", path: "/chef" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`hover:text-orange-500 ${
                    pathname === link.path ? "text-orange-500 font-semibold" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons (Cart & User) */}
          <div className="hidden md:flex space-x-4">
            <Link href="/cart">
              <ShoppingBagIcon
                className={`cursor-pointer hover:text-orange-500 ${
                  pathname === "/cart" ? "text-orange-500" : ""
                }`}
                size={24}
              />
            </Link>
            <Link href="/login">
              <User2Icon
                className={`cursor-pointer hover:text-orange-500 ${
                  pathname === "/login" ? "text-orange-500" : ""
                }`}
                size={24}
              />
            </Link>
            <Link href="/wishlist">
              <Heart
                className={`cursor-pointer hover:text-orange-500 ${
                  pathname === "/wishlist" ? "text-orange-500" : ""
                }`}
                size={24}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Sidebar for Mobile */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-black text-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
            <XIcon size={24} />
          </button>
          <ul className="mt-12 space-y-4 p-6">
            {[
              { name: "Home", path: "/" },
              { name: "Menu", path: "/menu" },
              { name: "Blog", path: "/blog" },
              { name: "Pages", path: "/checkout" },
              { name: "About", path: "/about" },
              { name: "Shop", path: "/shop" },
              { name: "Chef", path: "/chef" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`block py-2 hover:text-orange-500 ${
                    pathname === link.path ? "text-orange-500 font-semibold" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons in Sidebar for Mobile */}
          <div className="flex justify-center space-x-6 mt-6">
            <Link href="/cart">
              <ShoppingBagIcon
                className={`cursor-pointer hover:text-orange-500 ${
                  pathname === "/cart" ? "text-orange-500" : ""
                }`}
                size={28}
              />
            </Link>
            <Link href="/wishlist">
              <Heart
                className={`cursor-pointer hover:text-orange-500 ${
                  pathname === "/wishlist" ? "text-orange-500" : ""
                }`}
                size={28}
              />
            </Link>
            <Link href="/login">
              <User2Icon
                className={`cursor-pointer hover:text-orange-500 ${
                  pathname === "/login" ? "text-orange-500" : ""
                }`}
                size={28}
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Footer Fixed */}
      <footer className="fixed bottom-0 w-full bg-black text-white text-center py-2">
        <p className="text-sm">© 2025 FoodTuck | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Nav;
