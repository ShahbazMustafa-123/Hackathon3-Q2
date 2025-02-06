

"use client"

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import { Product } from "@/types/product";
import { client } from "@/sanity/lib/client";
import { threeProductsQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";



const Footer = () => {

   const [allProducts, setAllProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      async function fetchProducts() {
        const products: Product[] = await client.fetch(threeProductsQuery);
        setAllProducts(products);
      }
  
      fetchProducts();
    }, []);


  const handleSubscribe = () => {
    toast.success("Subscribed successfully!");
  };

  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold">About Us</h3>
          <p className="text-gray-400 mt-3">
            Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional
            chauffeured car service in major cities across the world.
          </p>
          <div className="bg-orange-500 text-white p-3 mt-4 rounded flex items-center">
            <span className="mr-2">🕒</span>
            <div>
              <p>Opening Hours</p>
              <p>Mon - Sat (8:00 - 6:00)</p>
              <p>Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold">Useful Links</h3>
          <ul className="mt-3 space-y-2">
            <li>About</li>
            <li>News</li>
            <li>Partners</li>
            <li>Team</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-bold">Recent Posts</h3>
          {allProducts.map((post) => (
            <div key={post._id} className="flex items-center mt-4">
              {post.image && (

              <Image src={urlFor(post.image).url()} alt={post.name} width={500} height={500} className="w-16 h-16 object-cover mr-4" />
              )}
              <div>
                <p className="text-sm font-semibold">{post.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription Section */}
      <div className="text-center mt-10">
        <h2 className="text-orange-500 text-2xl font-bold">Still You Need Our Support?</h2>
        <p className="text-gray-400 mt-2">Dont wait, make a smart & logical quote here. It’s pretty easy.</p>
        <div className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-2 rounded-l bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          <button onClick={handleSubscribe} className="bg-orange-500 px-4 py-2 rounded-r text-white font-bold">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mt-6">
        <FaFacebookF className="text-white text-xl cursor-pointer hover:text-orange-500" />
        <FaTwitter className="text-white text-xl cursor-pointer hover:text-orange-500" />
        <FaInstagram className="text-white text-xl cursor-pointer hover:text-orange-500" />
        <FaYoutube className="text-white text-xl cursor-pointer hover:text-orange-500" />
        <FaPinterest className="text-white text-xl cursor-pointer hover:text-orange-500" />
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
        Copyright © 2022 by Ayeman. All Rights Reserved.
      </div>

      <ToastContainer />
    </footer>
  );
};

export default Footer;
