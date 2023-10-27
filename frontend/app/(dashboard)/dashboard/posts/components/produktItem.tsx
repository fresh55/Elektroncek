import ProduktWrapper from '@/components/Shared/ProduktWrapper';
import clsx from 'clsx';
import React, { FC } from 'react';
import {Product} from "@/types/index"
import ProduktHeader from './produktHeader';
import Image from 'next/image'
import { Button } from '@/components/ui/button';


interface ProduktItemProps {
    produkt: Product;
    showActions?: boolean;
    isFirst?: boolean;
    isLast?: boolean;
  }

  const ProduktItem: FC<ProduktItemProps > = ({
    produkt,
    showActions = true,
    isFirst = false,
    isLast = false
  }) => {
   
  
    return (
      <ProduktWrapper
        className={clsx(
          isFirst && 'rounded-t-xl',
          isLast && 'rounded-b-xl',
          'cursor-pointer hover:bg-gray-100  '
        )}
        produkt={produkt}
      >
        <div className="relative aspect-[2/1]  ">
        
       
         {produkt.slike &&  <Image src={produkt.slike[0]} style={{objectFit: "cover"}} fill={true}  className='z-1' alt={''}>
         </Image> }
            
         
        </div>
        
        <ProduktHeader product={produkt} />
     
       
      </ProduktWrapper>
    );
  };
  
  export default ProduktItem;