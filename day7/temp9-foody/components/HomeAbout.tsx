"use client"
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { threeProductsQuery } from '@/sanity/lib/queries';
import { Product } from '@/types/product';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const HomeAbout = () => {
      const [allProducts, setAllProducts] = useState<Product[]>([]);
    

     useEffect(() => {
        async function fetchProducts() {
          const products: Product[] = await client.fetch(threeProductsQuery);
          setAllProducts(products);
        }
    
        fetchProducts();
      }, []);

 

  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-yellow-500 font-pacifico font-semibold mb-4">About us</h2>
          <h1 className="text-4xl font-bold mb-6">
            We <span className="text-orange-500">Create</span> the best
            <br /> culinary experiences
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed">
            At our food hub, we bring passion and innovation to every dish we craft. From hearty breakfasts 
            to gourmet meals, our chefs use fresh ingredients to create flavors that delight your taste buds. 
            We believe in quality, taste, and a memorable dining experience for all food lovers.
          </p>
          <ul className="text-gray-300 space-y-3 mb-6">
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span> Fresh ingredients sourced locally for authentic taste.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span> Expert chefs crafting dishes with passion and precision.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span> A commitment to delivering unforgettable flavors.
            </li>
          </ul>
          <button className="bg-orange-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-orange-600 transition">
            Read More
          </button>
        </div>

        {/* Right Images */}
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
      </div>
    </section>
  );
};

export default HomeAbout;