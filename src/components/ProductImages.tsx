'use client'

import Image from "next/image";
import { useState } from "react";

const images = [
    {
        id : 1,
        url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        id : 2,
        url: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
        id : 3,
        url: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
]
const ProductImages = () => {
    const [index, setIndex] = useState(0)
  return (
    <div>
      <div className="relative h-[500px]">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4">
        {images.map((img, i)=>(
            <div key={img.id} className="w-1/4 relative h-32 gap-4 mt-8 cursor-pointer" onClick={()=>setIndex(i)}>
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
