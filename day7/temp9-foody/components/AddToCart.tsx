'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { addToCart } from '@/app/actions/actions'
import toast from 'react-hot-toast'
import { Product } from '@/types/product'
import { ImSpoonKnife } from "react-icons/im";

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async () => {
    setIsAdding(true)
    await addToCart(product)
    setIsAdding(false)
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="w-full bg-orange-500 text-white hover:bg-orange-600 text-xl py-6 flex items-center justify-center gap-3"
    >
      <ImSpoonKnife className="w-6 h-6" />
      {isAdding ? 'Adding to Order...' : 'Add to Order'}
    </Button>
  )
}

