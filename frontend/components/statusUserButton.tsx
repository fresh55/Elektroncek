import React from 'react'
import { BiPlus } from 'react-icons/bi';
import Link from "next/link";
import { Badge } from "@/components/ui/badge"



function StatusUserButton() {
  return (
    
    <Badge variant="outline" className='bg-green-100 text-green-800 border-green-100 text-xs font-medium'>Verificiran</Badge>
    
  )
}

export default StatusUserButton
