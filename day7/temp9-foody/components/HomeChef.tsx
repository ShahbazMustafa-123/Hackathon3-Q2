"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { threehefQuery } from "@/sanity/lib/queries";
import { chefType } from "@/types/product";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Homechef = () => {
  const [allProducts, setAllProducts] = useState<chefType[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const products: chefType[] = await client.fetch(threehefQuery);
      setAllProducts(products);
    }

    fetchProducts();
  }, []);
  return (
    <div className="flex flex-col items-center gap-6 justify-center">
      <p className="text-orange-500 font-pacifico text-2xl">Chef</p>
      <h1 className="font-bold text-4xl ">
        <span className="text-orange-500">Meet</span> Our Chef
      </h1>
      <div className="grid grid-cols-3 gap-4">
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
  );
};

export default Homechef;
