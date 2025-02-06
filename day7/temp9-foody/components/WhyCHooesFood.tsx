"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { fiveProductsQuery } from "@/sanity/lib/queries";
import { Product } from "@/types/product";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const WhyChooseFood = () => {


      const [allProducts, setAllProducts] = useState<Product[]>([]);
    
      useEffect(() => {
        async function fetchProducts() {
          const products: Product[] = await client.fetch(fiveProductsQuery);
          setAllProducts(products);
        }
    
        fetchProducts();
      }, []);
  // Array of images


  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Images */}
        <div className="grid grid-cols-2 gap-4">
          {allProducts.map((image) => (
                <div key={image._id}>
                  {image.image && (
                    <Image
                      src={urlFor(image.image).url()}
                      alt={`Food}`}
                      className="rounded-lg object-cover shadow-lg"
                      height={500}
                      width={500}
                    />
                  )}
                </div>
              ))}
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-yellow-500 text-xl font-semibold mb-4">Why Choose us</h2>
          <h1 className="text-4xl font-bold mb-6">
            Extra <span className="text-orange-500">ordinary taste</span>
            <br /> And Experienced
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We are passionate about bringing extraordinary flavors to your plate. Our years of expertise
            in creating delightful dishes ensure an unforgettable dining experience. Whether it’s fast food,
            lunch, or dinner, we aim to exceed your expectations every time.
          </p>

          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <div className="bg-orange-500 py-4 rounded-lg text-black font-semibold">
              <span className="block text-2xl">🍔</span>
              Fast Food
            </div>
            <div className="bg-orange-500 py-4 rounded-lg text-black font-semibold">
              <span className="block text-2xl">🍪</span>
              Lunch
            </div>
            <div className="bg-orange-500 py-4 rounded-lg text-black font-semibold">
              <span className="block text-2xl">🍷</span>
              Dinner
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-5xl font-bold text-orange-500">30+</div>
            <div>
              <div className="text-xl font-bold">Years of</div>
              <div className="text-lg text-gray-300">Experienced</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseFood;
