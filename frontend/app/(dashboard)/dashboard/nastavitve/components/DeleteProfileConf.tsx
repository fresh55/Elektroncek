import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator"
import { User } from "@/types";
import { AlertCircle,  } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import * as z from "zod"
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {deleteUser} from "@/lib/auth"
import { Icons } from "@/components/Icons";
import { useRouter } from 'next/navigation'
type Props = {
    user: User;
    isOpen: boolean;
    onClose: () => void;
};


export const DeleteProfileConf: React.FC<Props> = ({ user,  isOpen, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const schema = z.object({
        username: z.string().refine(data => data === user.userName, {
          message: 'Vnesite pravilno uporabniško ime '
        }),
      });

      type FormInputs = z.infer<typeof schema>

      const form = useForm<FormInputs>({
        resolver: zodResolver(schema),
      });
      const onSubmit = async(data: FormInputs) => {
        setIsLoading(true)
        try {
            await deleteUser(user.id);
            router.push('/');
            //TODO : ALERT 
            setIsLoading(false);
          } catch (error) {
            console.error("Error deleting user:", error);
            
          }
      };

    return (
<Dialog  open={isOpen} onOpenChange={onClose} >
  <DialogContent >
    
    <DialogHeader >
      <DialogTitle className="mb-1">Potrdite izbris profila </DialogTitle>
      </DialogHeader>
      
      <Alert className="border-yellow-500 bg-yellow-50 justify-center  ">
        <div className="flex items-center gap-3 ">
      <AlertCircle className="text-2xl text-yellow-500" />
      
      <AlertDescription className=" block  font-normal " >Tega dejanja ni mogoče razveljaviti.</AlertDescription>
      </div>
    </Alert>
      <DialogDescription className="px-5  block text-sm ">
      To bo trajno izbrisalo vaš račun in odstranilo vaše podatke iz naših strežnikov.
      </DialogDescription>
      <Separator className="mb-1" />
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} >
      <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
            <Label htmlFor="username">Vnesite <span className="bg-secondary">{user.userName}</span> za potrditev</Label>
              <FormControl>
                <Input placeholder="Vnesite vaše uporabniško ime" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      
      
   
    <Button  className="bg-red-500/20 text-red-600 border border-red-600 hover:border-red-700 hover:bg-red-700 hover:text-lo-contrast focus-visible:outline-red-700 hover:text-white shadow-sm text-xs max-w-[50%] mt-2 " disabled={isLoading}>{isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}Izbriši</Button>
        </form>
        </Form>
  </DialogContent>
</Dialog>


          
      

    )

}