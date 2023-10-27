import { useRouter } from 'next/navigation';
import type { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { Product } from '@/types/index';
import { Button } from '../ui/button';


interface ProduktWrapperProps {
    produkt: Product;
    className?: string;
    children: ReactNode[];
  }

const ProduktWrapper: FC<ProduktWrapperProps> = ({
    produkt,
    className = '',
    children
  }) => {
    const { push } = useRouter();
  
    return (
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={clsx(className)}
        onClick={() => {
          const selection = window.getSelection();
          if (!selection || selection.toString().length === 0) {
            push(`/product/${produkt?.id}`);
          }
        }}
        aria-hidden="true"
      >
        
         
        
        {children}
      </motion.article>
    );
  };
  
  export default ProduktWrapper;