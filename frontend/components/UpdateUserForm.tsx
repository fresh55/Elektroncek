'use client'

import * as React from "react"
import { useRouter } from "next/navigation"
import { useForm,FieldValues,SubmitHandler } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/Icons"
import {Button} from  "@/components/ui/button"
import { Check, ChevronsUpDown } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import {  useState, useEffect  } from "react"
import { getCities } from "@/lib/other"


const UpdateUserForm = (user:any) => {
   
   
    const router = useRouter();
    const [isLoading,setIsLoading] = useState(false);
    const [cities, setCities] = useState([]);
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getCities();
          setCities(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
    
    const {handleSubmit,register,formState:{errors},
} = useForm<FieldValues>()

const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    setIsLoading(true);}
return(
  <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader>
          <CardTitle>Prijavni podatki</CardTitle>
          <CardDescription>
            Spremenite svoje prijavne podatke
          </CardDescription>
        </CardHeader>
        <CardContent>
     
          <div className="grid gap-2 mb-3">
          <Label htmlFor="email">
              Elektronski naslov
            </Label>
            <Input
            placeholder={`${user.user.email}`}
              id="email"
              className="w-[400px]"
              size={32}
              {...register("name")}
            />
            {errors?.name && (
              <p className="px-1 text-xs text-red-600">napaka</p>
            )}
             
          </div>
          
          <div className="grid mb-2 justify-items-start gap-3">
          <Label htmlFor="email">
              Geslo
            </Label>
          <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sprememba Gesla</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sprememba gesla</DialogTitle>
          <DialogDescription>
            Spremeni svoje geslo. Stisni shrani, ko končaš.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4 mb-3">
            <Label htmlFor="password1"  className="text-right">
              Trenutno geslo
            </Label>
            <Input id="password1" type="password" placeholder="skrivnost123" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Geslo
            </Label>
            <Input id="password" type="password" placeholder="geslo123" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password1" className="text-right">
              Geslo
            </Label>
            <Input id="password1" type="password" placeholder="geslo123" className="col-span-3" />
          </div>
          
        </div>
        <DialogFooter>
          <Button type="submit">Shrani spremembe</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
           
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            <span>Shrani</span>
          </Button>
        </CardFooter>
        
      </Card>
    </form>
    <Card>
    <CardHeader>
      <CardTitle>Podatki za objavo oglasa</CardTitle>
      <CardDescription>Spremenite podatke o vas</CardDescription>
    </CardHeader>
    <CardContent>
      
    <div className="flex gap-8 mb-3">
      <div >
          <Label htmlFor="Ime">
              Ime
            </Label>
            <Input
            placeholder={`${user.user.email}`}
              id="email"
              className="w-[400px]"
              size={32}
              {...register("name")}
            />
            {errors?.name && (
              <p className="px-1 text-xs text-red-600">napaka</p>
            )}
            </div>
            <div>
          <Label htmlFor="Ime">
              Priimek
            </Label>
            <Input
            placeholder={`${user.user.email}`}
              id="email"
              className="w-[400px]"
              size={32}
              {...register("name")}
            />
            {errors?.name && (
              <p className="px-1 text-xs text-red-600">napaka</p>
            )}
            </div>
             
          </div>
          <Popover>
                <PopoverTrigger asChild>
                  
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between"
                      )}
                    >
                      {value
                        ? cities.find(
                            (language) => language === value
                          )
                        : "Select language"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                 
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {cities.map((language) => (
                        <CommandItem
                          value={language}
                          key={language}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              language === value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {language}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
</>  

)
}
export default UpdateUserForm;