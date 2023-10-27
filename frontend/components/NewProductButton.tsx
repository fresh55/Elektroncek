import React from 'react'
import { BiPlus } from 'react-icons/bi';
import Link from "next/link";
import { Button } from "@/components/ui/button"
function NewProductButton() {
  return (
    
    <Link href="/Login">
      <Button type="button" className="bg-gradient-to-r from-purple-600 to-sky-600 hover:from-purple-500 hover:to-sky-600 shadow-sm hover:shadow-md text-white font-semibold  ">
        Nov oglas
      <div>
      <BiPlus size={15}/>
      </div>
      </Button>
      </Link>
    
  )
}

export default NewProductButton
