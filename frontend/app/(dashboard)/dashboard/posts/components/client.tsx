'use client'
import {Product} from "@/types/index"
import {EmptyPlaceholder} from "@/components/emptyPlaceholder"
import { Button } from "@/components/ui/button"
import {useRouter } from "next/navigation";
import ProduktItem from "./produktItem";
import { Card } from "@/components/ui/card";
interface ProductsClientProps {
    data: Product[];
    userId : number;
  };

  export const ProductsClient: React.FC<ProductsClientProps> = ({
    data,
    userId
  }) => {
    return (
      <div className="flex flex-1 flex-col overflow-auto">
    <div className="flex flex-col gap-6 p-4 md:gap-8 md:p-6 lg:gap-12 lg:p-8">
       
      
       
        {data.length ? (
           
          <ul className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4 md:gap-6 lg:gap-8">
            {data.map((product : Product) => (
              <Card  className="overflow-hidden" key={product.id} >
               <ProduktItem produkt={product} />
               </Card>
            ))}
          </ul>
         

        ) : (
            <div>
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>Nimate oglasov</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              Začnite ustvarjati oglase
            </EmptyPlaceholder.Description>
           
          </EmptyPlaceholder>
        
      </div>
        )}
      </div>
      </div>
    
    );
  };