"use client"
import { addToCart } from "@/app/actions/actions";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { threeProductsQuery } from "@/sanity/lib/queries";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ImSpoonKnife } from "react-icons/im";
import { toast } from "react-toastify";

const HomeFoodProduct = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const products: Product[] = await client.fetch(threeProductsQuery);
      setAllProducts(products);
    }

    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    toast.success(`${product.name} added to order!`);
    addToCart(product);
  };

  return (
    <div className="bg-black text-white py-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Latest News & Blog</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allProducts.map((post) => (
          <div
            key={post._id}
            className="bg-slate-900 text-white rounded-lg overflow-hidden shadow-lg"
          >
            <Link href={`/product/${post.slug.current}`}>
              {post.image && (
                <Image
                  src={urlFor(post.image).url()}
                  alt="food"
                  className="w-full h-48 object-cover"
                  width={700}
                  height={700}
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">{post.name}</h3>
                <button
                  onClick={(e) => handleAddToCart(e, post)}
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
    </div>
  );
};

export default HomeFoodProduct;
