'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { User } from "@/types";
import { AlertCircle,  } from "lucide-react"
import {DeleteProfileConf} from "./DeleteProfileConf"


type Props = {
    user: User;
};


export const DeleteProfile: React.FC<Props> = ({ user }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleDialog = () => {
        setIsOpen(!isOpen);
      }
    
    return (



        <Card  className="border-red-600 shadow-lg">
            <CardHeader className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                <div className="flex gap-3 text-red-600 items-center  mb-2    " >
                <AlertCircle/> 
                <CardTitle className="text-center">
                Izbriši profil</CardTitle>
                </div>
                <CardDescription >Če izbrišete ta profil, boste izbrisali tudi svojo bazo podatkov.</CardDescription>
                </div>
                <DeleteProfileConf user={user} isOpen={isOpen} onClose={toggleDialog} />
                <Button onClick={toggleDialog} className="bg-red-500/20 text-red-600 border border-red-600 hover:border-red-700 hover:bg-red-700 p-2 focus-visible:outline-red-700 hover:text-white shadow-sm text-xs ">Izbriši</Button>
                
            </CardHeader>
          
        </Card>

    )

}