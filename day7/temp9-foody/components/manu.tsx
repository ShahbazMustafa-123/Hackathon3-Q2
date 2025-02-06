"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  MainCourseQuery,
  StarterManuQuery,
  tomatobannerQuery,
  DessertQuery,
  DrinksQuery,
} from "@/sanity/lib/queries";
import { BannerData } from "@/types/banner";
import { Product } from "@/types/product";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Manu = () => {
  const [allProducts, setAllProducts] = useState<BannerData[]>([]);
  const [starterImages, setStarterImages] = useState<Product[]>([]);
  const [mainCourseImages, setMainCourseImages] = useState<Product[]>([]);
  const [dessertImages, setDessertImages] = useState<Product[]>([]);
  const [drinksImages, setDrinksImages] = useState<Product[]>([]);

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
    async function fetchStarterImages() {
      try {
        const products: Product[] = await client.fetch(StarterManuQuery);
        setStarterImages(products || []);
      } catch (error) {
        console.error("Error fetching starter images:", error);
      }
    }
    fetchStarterImages();
  }, []);

  useEffect(() => {
    async function fetchMainCourseImages() {
      try {
        const products: Product[] = await client.fetch(MainCourseQuery);
        setMainCourseImages(products || []);
      } catch (error) {
        console.error("Error fetching main course images:", error);
      }
    }
    fetchMainCourseImages();
  }, []);

  useEffect(() => {
    async function fetchDessertImages() {
      try {
        const products: Product[] = await client.fetch(DessertQuery);
        setDessertImages(products || []);
      } catch (error) {
        console.error("Error fetching dessert images:", error);
      }
    }
    fetchDessertImages();
  }, []);

  useEffect(() => {
    async function fetchDrinksImages() {
      try {
        const products: Product[] = await client.fetch(DrinksQuery);
        setDrinksImages(products || []);
      } catch (error) {
        console.error("Error fetching drinks images:", error);
      }
    }
    fetchDrinksImages();
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
            <h1 className="text-4xl font-bold">Our Menu</h1>
            <p className="mt-2 cursor-pointer flex items-center justify-center">
              Home <ChevronRight className="mx-1" />{" "}
              <span className="text-orange-500"> Menu </span>
            </p>
          </div>
        </div>
      ))}

      {/* Menu Sections */}
      <div className="container mx-auto py-10">
        {/* Starter Menu - Image on Right, Content on Left */}
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Starter Menu</h2>
            <ul className="space-y-4">
              <li className="flex justify-between border-b pb-2">
                <div>
                  <h3 className="font-semibold">Alder Grilled Chinook Salmon</h3>
                  <p>Toasted French bread topped with romano, cheddar</p>
                  <p className="text-sm text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$32</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <div>
                  <h3 className="font-semibold">Berries and Creme Tart</h3>
                  <p>Gorgonzola, ricotta, mozzarella, taleggio</p>
                  <p className="text-sm text-gray-500">700 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$43</span>
              </li>
            </ul>
          </div>

          {/* Starter Images */}
          <div>
            {starterImages.map((image) => (
              <div key={image._id} className="relative">
                {image.image && (
                  <Image
                    src={urlFor(image.image).url()}
                    alt={"starter"}
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Course - Image on Left, Content on Right */}
        <div className="grid grid-cols-2 gap-10 mt-10">
          {/* Main Course Images */}
          <div>
            {mainCourseImages.map((image) => (
              <div key={image._id} className="relative">
                {image.image && (
                  <Image
                    src={urlFor(image.image).url()}
                    alt={"main-course"}
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
                )}
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Main Course</h2>
            <ul className="space-y-4">
              <li className="flex justify-between border-b pb-2">
                <div>
                  <h3 className="font-semibold">Optic Big Breakfast Combo Menu</h3>
                  <p>Toasted French bread topped with romano, cheddar</p>
                  <p className="text-sm text-gray-500">560 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$32</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <div>
                  <h3 className="font-semibold">Cashew Chicken With Stir-Fry</h3>
                  <p>Gorgonzola, ricotta, mozzarella, taleggio</p>
                  <p className="text-sm text-gray-500">700 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$43</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Dessert - Image on Right, Content on Left */}
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Dessert</h2>
            <ul className="space-y-4">
              <li className="flex justify-between border-b pb-2">
                <div>
                  <h3 className="font-semibold">Chocolate Lava Cake</h3>
                  <p>Rich chocolate cake with a molten center</p>
                  <p className="text-sm text-gray-500">450 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$15</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <div>
                  <h3 className="font-semibold">Strawberry Cheesecake</h3>
                  <p>Creamy cheesecake topped with fresh strawberries</p>
                  <p className="text-sm text-gray-500">600 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$18</span>
              </li>
            </ul>
          </div>

          {/* Dessert Images */}
          <div>
            {dessertImages.map((image) => (
              <div key={image._id} className="relative">
                {image.image && (
                  <Image
                    src={urlFor(image.image).url()}
                    alt={"dessert"}
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Drinks - Image on Left, Content on Right */}
        <div className="grid grid-cols-2 gap-10 mt-10">
          {/* Drinks Images */}
          <div>
            {drinksImages.map((image) => (
              <div key={image._id} className="relative">
                {image.image && (
                  <Image
                    src={urlFor(image.image).url()}
                    alt={"drinks"}
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
                )}
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Drinks</h2>
            <ul className="space-y-4">
              <li className="flex justify-between border-b pb-2">
                <div>
                  <h3 className="font-semibold">Classic Mojito</h3>
                  <p>Refreshing mint and lime cocktail</p>
                  <p className="text-sm text-gray-500">200 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$10</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <div>
                  <h3 className="font-semibold">Iced Caramel Latte</h3>
                  <p>Cold coffee with caramel syrup and milk</p>
                  <p className="text-sm text-gray-500">250 CAL</p>
                </div>
                <span className="text-orange-500 font-bold">$12</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manu;