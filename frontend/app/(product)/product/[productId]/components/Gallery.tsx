'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import { AiOutlinePicture } from 'react-icons/ai'
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {BsGrid} from 'react-icons/bs'

interface ImageGalleryProps {
  images: string[];
}

const Placeholder = () => (
  <div className="border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center h-full">
    <AiOutlinePicture className="text-2xl text-gray-300" />
  </div>
)

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }: { images: string[] }) => {
  const [isLoading, setLoading] = useState(true)
  while (images.length < 3) {
    images.push('');
  }

  return (
   
    <div className="grid grid-cols-3 gap-4 max-w-screen-lg ">
      
      <div className="col-span-3 lg:col-span-2 lg:h-auto relative bg-gray-200 ">
        {images[0] ? <Image src={images[0]} layout="fill" objectFit="cover" className="transform rounded-xl brightness-90 transition will-change-auto group-hover:brightness-110" alt={''} /> : <Placeholder />}
      </div>
      <div className="col-span-3 lg:col-span-1 grid grid-rows-2 gap-4">
        {images.slice(1, 3).map((img, idx) => (
          <div key={idx} className="h-32 lg:h-64 relative">
            {img ? <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" alt={''} /> : <Placeholder />}
            {idx === 1 && <Button className="absolute bottom-0 right-0 bg-gray-500 flex items-center justify-center text-white"><BsGrid/>Prikaži vse fotografije</Button>}
          </div>
        ))}
      </div>
     
    </div>
    
  )
}