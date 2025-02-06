"use client";

import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { threeProductsQuery, tomatobannerQuery } from '@/sanity/lib/queries';
import { BannerData } from '@/types/banner';
import { ChevronRight } from 'lucide-react';
import { FaUserCheck, FaUtensils, FaLeaf } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Product } from '@/types/product';

const About = () => {
  const [allProducts, setAllProducts] = useState<BannerData[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products: BannerData[] = await client.fetch(tomatobannerQuery);
        setAllProducts(products || []);
      } catch (error) {
        console.error('Error fetching banner products:', error);
      }
    }
    fetchProducts();
  }, []);

  const [threeProducts, setthreeProducts] = useState<Product[]>([]);
    
      useEffect(() => {
        async function fetchProducts() {
          const products: Product[] = await client.fetch(threeProductsQuery);
          setthreeProducts(products);
        }
    
        fetchProducts();
      }, []);
  

  return (
    <div className="bg-black text-white py-16">
      {allProducts.map((banner) => (
        <div key={banner._id} className="relative">
          {banner.image && (
            <Image
              src={urlFor(banner.image).url()}
              alt={'banner'}
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          )}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-4xl font-bold">About</h1>
            <p className="mt-2 cursor-pointer flex items-center justify-center">
              Home <ChevronRight className="mx-1" /> <span className="text-orange-500"> About </span>
            </p>
          </div>
        </div>
      ))}

      {/* Image Grid Section */}
      <div className="flex justify-center gap-4 mt-12 px-4 flex-wrap">
        {threeProducts.map((image) =>(
            <div key={image._id}>

                {image.image && (
                    <Image
                        src={urlFor(image.image).url()}
                        alt={image.name}
                        width={200}
                        height={200}
                        className="rounded-lg"
                    />
                )}

            </div>
        ))}
      </div>

      {/* Text Section */}
      <div className="text-center mt-8 px-6">
        <h2 className="text-3xl font-bold">Food is an important part of a balanced diet</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam velit, pellentesque sed vehicula id, viverra et sapien.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/shop" className="bg-orange-500 text-white px-6 py-2 rounded-lg">Show More</Link>
          <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg">Watch Video</button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-12 text-center px-6">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum.
        </p>
        <div className="flex justify-center gap-8 mt-8 flex-wrap">
          <div className="text-center max-w-sm">
            <FaUserCheck className="text-orange-500 text-4xl mx-auto" />
            <h3 className="mt-4 text-xl font-bold">Best Chef</h3>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
          <div className="text-center max-w-sm">
            <FaUtensils className="text-orange-500 text-4xl mx-auto" />
            <h3 className="mt-4 text-xl font-bold">120 Item Food</h3>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
          <div className="text-center max-w-sm">
            <FaLeaf className="text-orange-500 text-4xl mx-auto" />
            <h3 className="mt-4 text-xl font-bold">Clean Environment</h3>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
