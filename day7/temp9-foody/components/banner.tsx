"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { bannerQuery } from "@/sanity/lib/queries";
import { BannerData } from "@/types/banner";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

export default function Main() {
  const [allProducts, setAllProducts] = useState<BannerData[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const products: BannerData[] = await client.fetch(bannerQuery);
      setAllProducts(products);
    }
    fetchProducts();
  }, []);


  // const pacifico = Pacifico({
  //   weight: "400", // Pacifico ka ek hi weight hai (400)
  //   subsets: ["latin"], // Latin subset use karein
  //   display: "swap", // Font loading behavior
  // });

  return (
    <section className="py-8 md:py-16">
      {allProducts.map((item) => (
        <div key={item._id} className="relative">
          <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
            {/* Left Side (Text & Social Icons) */}
            <div className="relative flex flex-col md:w-1/2 items-start text-center md:text-left mt-8 md:mt-0">

              {/* Social Icons */}
              <div className="absolute left-[-50px] gap-10 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col items-center space-y-4">
                <div className="w-12 border-t border-gray-500 rotate-90"></div> {/* Top Line */}
                <div className="flex flex-col justify-between gap-5">
                  <Link
                    href="#"
                    className="text-white hover:text-orange-500 transition duration-300"
                  >
                    <FaFacebookF size={18} />
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-orange-500 transition duration-300"
                  >
                    <FaTwitter size={18} />
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-orange-500 transition duration-300"
                  >
                    <FaPinterestP size={18} />
                  </Link>
                </div>
                <div className="w-12 border-t border-gray-500 rotate-90"></div> {/* Bottom Line */}
              </div>

              {/* Tagline */}
              <p className={`text-orange-400 font-pacifico  italic text-lg font-semibold mb-2`}>
                It's Quick & Amusing!
              </p>

              {/* Title */}
              <h1 className="text-3xl md:text-6xl font-extrabold w-full md:w-[600px] leading-tight mb-6">
                {item.title}
              </h1>

              {/* Subtitle */}
              <p className="text-gray-100 w-full md:w-[550px] text-lg mb-6">
                {item.subtitle}
              </p>

              {/* Button */}
              <button className="text-white bg-orange-600 rounded-full text-lg py-3 px-6 shadow-lg hover:bg-orange-500">
                <Link href="/shop">Shop Now</Link>
              </button>

            </div>

            {/* Right Side (Image) */}
            <div className="relative w-full md:w-1/2">
              <div className="w-full h-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <Image
                  width={2500}
                  height={2500}
                  src={urlFor(item.image).url()}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}