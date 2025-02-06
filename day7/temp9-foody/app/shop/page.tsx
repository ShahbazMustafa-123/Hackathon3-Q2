"use client";

import { client } from "@/sanity/lib/client";
import { Product } from "@/types/product";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { addToCart } from "../actions/actions";
import toast from "react-hot-toast";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { allfoodQuery } from "@/sanity/lib/queries";
import { ImSpoonKnife } from "react-icons/im";

const ExploreProducts = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [priceRange, setPriceRange] = useState<number>(500)

  useEffect(() => {
    async function fetchProducts() {
      const products: Product[] = await client.fetch(allfoodQuery);
      setAllProducts(products);
      setFilteredProducts(products)
    }

    fetchProducts();
  }, []);


  useEffect(() => {
    const filtered = allProducts.filter(product => product.price <= priceRange);
    setFilteredProducts(filtered)
  }, [priceRange, allProducts])


  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    toast.success(`${product.name} added to order!`);
    addToCart(product);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value))
  }


  return (
    <div className="p-6 bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Section */}
        <aside className="p-4 shadow rounded bg-gray-950">
          <h2 className="text-xl font-semibold mb-4 text-orange-500">Filters</h2>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Price</h3>
            <input
              type="range"
              min="5"
              max="150"
              value={priceRange}
              onChange={handlePriceChange}
              className="w-full"
            />
            <p>Max Price: {priceRange} </p>
          </div>

          {/* Size */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {["Services", "Our Menu", "Pizza", "Cupcake", "Burger", "Cookies", "Our Shop", "Tandoori", "Chicken"].map((tags) => (
                <button key={tags} className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded text-white">
                  {tags}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-orange-500 text-white py-2 rounded mt-4">
            Apply Filters
          </button>
        </aside>

        {/* Products Section */}
        <section className="lg:col-span-3">
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">Menu</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product._id} className="bg-gray-950 p-4 shadow rounded flex flex-col h-full">
                <Link href={`/product/${product.slug.current}`} className="flex flex-col flex-grow">
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  )}

                  <h3 className="text-lg font-medium mt-4 text-orange-500">{product.name}</h3>
                  <p className="text-gray-400">Price ${product.price}</p>

                  {/* Add to Cart Button at Bottom */}
                  <div className="mt-auto">
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="w-full bg-orange-500 text-white flex items-center justify-center py-2 rounded h-10"
                    >
                      <ImSpoonKnife className="w-6 h-6" />
                      Buy Now
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExploreProducts;
