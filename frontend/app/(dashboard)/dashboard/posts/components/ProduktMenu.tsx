import { Icons } from "@/components/Icons"
import clsx from 'clsx';
import type { FC } from 'react';
import {Product} from "@/types/index"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from 'react';
import stopEventPropagation from '@/lib/stopEventPropagation';
import {deleteProduct } from "@/lib/product"
interface ProduktMenuProps {
  produkt: Product;
}

const handleCopyClick = async(event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    await navigator.clipboard.writeText(
        `${location.origin}/posts`
      );
    
  }
const ProduktMenu: FC<ProduktMenuProps> = ({ produkt }) => {
  const router = useRouter()
  const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false)
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false)
  const iconClassName = 'w-[15px] sm:w-[18px]';

  
  
  return (
    <>
    <div onClick={stopEventPropagation} >
    <DropdownMenu  modal={false}  >
    
      <DropdownMenuTrigger onClick={stopEventPropagation} id={`dropdown-menu-trigger`} className="rounded-full p-1.5 hover:bg-gray-300/20 outline-none ">
        
        <Icons.ellipsis  className="w-[15px] sm:w-[18px]" />
      
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="" align="end">
        <DropdownMenuItem className="px-5 block cursor-pointer rounded-lg  py-1.5 text-sm"  onClick={stopEventPropagation} >
        <div className="flex items-center">
        <Icons.edit className="mr-2 h-4 w-4" />
        
        <div>
          <span>Uredi izdelek</span>
        </div>
      </div>
          
        </DropdownMenuItem>
      
        <DropdownMenuItem  className="px-5 block cursor-pointer rounded-lg  py-1.5 text-sm" onClick={handleCopyClick} >
        <div className="flex items-center">
        <Icons.copy className="mr-2 h-4 w-4" />
        Kopiraj URL izdelka
        </div>
        
      
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="px-5 cursor-pointer text-destructive focus:text-destructive block py-1.5 text-sm"
          onSelect={() => setShowDeleteAlert(true)}
          onClick={stopEventPropagation}
        >
        <div className="flex items-center">
        <Icons.trash className="mr-2 h-4 w-4" />
          Izbriši izdelek
        </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
   
    <AlertDialog  open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
      <AlertDialogContent onClick={async (event) => {event.stopPropagation()}} >
        <AlertDialogHeader>
          <AlertDialogTitle>
            Ali ste prepričani da želite izbrisati izdelek?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Te akcije ni mogoče razveljaviti
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={stopEventPropagation}>Prekliči</AlertDialogCancel>
          <AlertDialogAction
            onClick={async (event) => {
                console.log("action je")
              event.stopPropagation()
              setIsDeleteLoading(true)
              const deleted = await deleteProduct(produkt.id)
              
                router.refresh()
              
                
              
            }}
            className="bg-red-600 focus:ring-red-600"
          >
            {isDeleteLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.trash className="mr-2 h-4 w-4" />
            )}
            <span>Izbriši</span>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </div>
  </>
  );
};

export default ProduktMenu;