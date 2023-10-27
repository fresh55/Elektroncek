'use client'
import {Product} from "@/types/index"
import {User} from "@/types/index"
import clsx from 'clsx';
import type { FC } from 'react';


  import Slug from "@/components/Shared/Slug"
  import {formatDate} from "@/lib/formatTime"
import ProduktMenu from "./ProduktMenu"
import { Label } from "@/components/ui/label";
import {getUser} from "@/lib/auth"
import Image from "next/image"
interface ProduktHeaderProps {
  product: Product;
  isNew?: boolean;
}

const  ProduktHeader: FC<ProduktHeaderProps> = async ({
    product,
}) => {
    const user: User = await getUser(product.userId);

  return (
    <>
    <div
      className='p-6 relative flex justify-between space-x-1.5'
    
      
    >
       
      <span  aria-hidden="true">
      
      <div className="flex max-w-sm items-center">
     
      <div className="text-xl ">
          <div className="truncate">
          {product.ime}
        </div>
        </div>

        </div>
        <div>
        <Slug
          className="text-sm"
          slug="kategorija"
          
        />
         <span className="lt-text-gray-500">
            <span className="mx-1.5">·</span>
            <span className="text-xs" >
              {formatDate(product.createdAt)}
            </span>
          </span>
        
      </div>
      </span>
    
      <div className="flex items-center text-lg font-bold ">
         
        €  {product.cena}
      
     </div>
    </div>
      <div className="flex items-center justify-between px-4 pb-4 ">
        <div className="">
         <Image src={user.avatar} className="h-32 w-32 cursor-pointer rounded-xl bg-gray-200 ring-8 ring-gray-50 dark:bg-gray-700 dark:ring-black sm:h-52 sm:w-52"
          height={128}
          width={128} 
          alt=""/>
        </div>
        
       <ProduktMenu produkt={product} />
       
      </div>
     </>
  );
};

export default ProduktHeader;