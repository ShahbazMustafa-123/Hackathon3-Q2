"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allchefQuery, tomatobannerQuery } from "@/sanity/lib/queries";
import { BannerData } from "@/types/banner";
import { chefType } from "@/types/product";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Chef = () => {
  const [allProducts, setAllProducts] = useState<BannerData[]>([]);
  const [allChef, setAllChef] = useState<chefType[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products: BannerData[] = await client.fetch(tomatobannerQuery);
        setAllProducts(products || []);
      } catch (error) {
        console.error("Error fetching banner products:", error);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const products: chefType[] = await client.fetch(allchefQuery);
      setAllChef(products);
    }

    fetchProducts();
  }, []);

  return (
    <div className="relative">
      {allProducts.map((banner) => (
        <div key={banner._id} className="relative">
          {banner.image && (
            <Image
              src={urlFor(banner.image).url()}
              alt={"banner"}
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          )}

          {/* Centered Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-4xl font-bold">Our Chef</h1>
            <p className="mt-2 cursor-pointer flex items-center justify-center">
              Home <ChevronRight className="mx-1" />{" "}
              <span className="text-orange-500"> Chef </span>
            </p>
          </div>
        </div>
      ))}

      <section className="lg:col-span-3">
        <h2 className="text-2xl font-semibold mb-6 text-orange-500">Menu</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allChef.map((product) => (
            <div
              key={product._id}
              className="bg-gray-950 p-4 shadow rounded flex flex-col h-full"
            >
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              )}

              <h3 className="text-lg font-medium mt-4 text-orange-500">
                {product.name}
              </h3>
              <p> {product.position} </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Chef;
