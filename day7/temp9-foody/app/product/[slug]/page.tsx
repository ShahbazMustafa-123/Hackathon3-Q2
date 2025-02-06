import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import AddToCartButton from '@/components/AddToCart'
import {  Truck, ArrowRight } from 'lucide-react'
import { Product } from '@/types/product'

interface ProductPageProps {
  params: Promise<{ slug: string }> // Wrap params in Promise
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "food" && slug.current == $slug][0]{
      _id,
      _type,
      name,
      image,
      price,
      originalPrice,
      description,
      "slug": slug.current,
      category,
      tags
    }`,
    { slug }
  )
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params 
  const product = await getProduct(slug)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params // Resolve the promise to get slug
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
          {product.image && (
            <Image
              src={urlFor(product.image).width(1000).height(1000).url()}
              alt={"product-image"}
              fill
              className="object-cover"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          
      

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-orange-600">${product.price}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>

          {/* Description */}
          <p className="text-lg text-white">{product.description}</p>

     

          {/* Add to Cart */}
          <AddToCartButton product={product} />

          {/* Additional Info */}
          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div className="flex items-center gap-3 text-lg text-white">
              <Truck className="w-6 h-6 text-green-500" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center gap-3 text-lg text-white">
              <ArrowRight className="w-6 h-6 text-green-500" />
              <span>30-day hassle-free return policy</span>
            </div>
          </div>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="bg-gray-200 text-orange-600 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
