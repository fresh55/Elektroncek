import React from 'react'
import { BiPlus } from 'react-icons/bi';
import Link from "next/link";
import { Button } from "@/components/ui/button"
function NewProductButton() {
  return (
    
    <Link href="/Login">
      <Button type="button" className=" border-[1px] ml-1 flex h-9 w-9 sm:w-20 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-sky-600 hover:from-purple-500 hover:to-sky-600 shadow-sm hover:shadow-md text-white xl:w-auto xl:px-3 sm:ml-0 font-semibold  ">
        Nov oglas
      <div>
      <BiPlus size={15}/>
      </div>
      </Button>
      </Link>
    
  )
}

export default NewProductButton
