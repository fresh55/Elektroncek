'use client'
import {registerUser,authUser} from "@/lib/auth";
import {Loader2} from "lucide-react";
import {FieldValues, SubmitHandler, useForm}
from "react-hook-form";
import { useCallback, useState } from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {AiOutlineGoogle} from "react-icons/ai";
import {FiFacebook} from "react-icons/fi";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react"



const RegisterForm = () => {
    const [isLoading,setIsLoading] = useState(false);
    const [serverMessage, setServerMessage] = useState<string | null>(null);
    const { 
        register, 
        handleSubmit,
        formState: {
          errors
        },
      } = useForm<FieldValues>();
   

      const onSubmit: SubmitHandler<FieldValues> = async(data) => {
        setIsLoading(true);
        const user = await registerUser(data.username, data.email, data.password);
     
        if(typeof user === "string"){
       
        setServerMessage(user);
        setIsLoading(false)
        }     
        else{
          
          
         
          signIn('credentials', { 
            email: data.email.toLowerCase(),
            password: data.password, 
            redirect: false,
          })
          .then((callback) => {
            setIsLoading(false);
      
            if (callback?.ok) {

              setServerMessage(null);
              window.location.href = "/";
            }
            
            if (callback?.error) {
              setServerMessage(callback.error);
            }
          });
          
          
         
            
      }}
    
      
      return (
        <div className="grid gap-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <div className="grid gap-1 ">
                <Label htmlFor="username">Uporabnisko Ime</Label> 
                <Input
                  id="username"
                  placeholder="janez123"
                  
                  type="text"
                  autoCapitalize="none"
                  autoComplete="username"
                  autoCorrect="off"
                  disabled={isLoading}
                  {...register("username", { required: true})}
                />
                <div className="mb-2">
                 {errors.username?.type === 'required' && <p className="px-1 text-xs text-red-600">Uporabnisko ime je obvezno </p>}
                 {serverMessage && <p className="px-1 text-xs text-red-600">{serverMessage}</p>}
                 </div>
               <Label>Geslo</Label>
                <Input
                  id="password"
                  placeholder="geslo123"
                  type="password"
                  autoComplete="current-password"
                  autoCorrect="off"
                  disabled={isLoading}  
                  {...register("password",{ required: true})}
                />
                <div className="mb-2">
                 {errors.password?.type === 'required' && <p className="px-1 text-xs text-red-600">Geslo je obvezno </p>}
                 </div>
              <Label htmlFor="email">Elektronski naslov</Label>
                <Input
                  id="email"
                  placeholder="ime@gmail.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLoading}
                  {...register("email",{ required: true})}
                />
                <div className="mb-2">
                 {errors.email?.type === 'required' && <p className="px-1 text-xs text-red-600">Elektronski naslov je obvezen </p>}
                 </div>
               
             
              
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-sky-600 hover:from-purple-700 hover:to-sky-600 hover:shadow-sm"  disabled={isLoading}>
              {isLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
               
                Registriraj
              </Button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Nadaljuj raje
              </span>
            </div>
          </div>
          <Button  disabled={isLoading}>
              {isLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
               <AiOutlineGoogle  size={20}/> <p className="ml-3">Google</p>
              </Button>

              <Button   disabled={isLoading}>
              {isLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
                
               <FiFacebook size={20}/><p className="ml-3">Facebook</p>
               
              </Button>
        
         
        </div>
      )
              }


export default RegisterForm;

