'use client';
import Image from "next/image";
import { JSX } from "react";

import  {RxAvatar} from 'react-icons/rx';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const AvatarOptions ={
  navbarAvatar: {
    classes: "h-16 w-16" 
  },
  userMenuAvatarNoUser: {
    classes: "h-28 w-28 shadow-lg "
  },
  
}


interface AvatarProps {
  type: keyof typeof AvatarOptions;
  ime?: string;
}

const  AvatarUser: React.FC<AvatarProps> = ({ type,ime })=>{
  const pokemonType = AvatarOptions[type]
  console.log(pokemonType.classes);
    return (
      
       <Avatar className={`${pokemonType.classes}`} >
      <AvatarImage src="/images/avatar13.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
     
   
    );


}

export default AvatarUser;