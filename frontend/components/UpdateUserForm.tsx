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
import { zodResolver } from "@hookform/resolvers/zod"



const UpdateUserForm = (user:any) => {
   
   
    const router = useRouter();
    const [isLoading,setIsLoading] = useState(false);
    const [isLoading1,setIsLoading1] = useState(false);
    const [cities, setCities] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

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

    const FormSchema = z.object({
      mesto: z.string({
        required_error: "Please select a mesto.",
      }),
    })
    
    const {handleSubmit,register,formState:{errors},
} = useForm<FieldValues>()

const form = useForm<z.infer<typeof FormSchema>>({
  resolver: zodResolver(FormSchema),
})

const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    setIsLoading(true);}
    
    function onSubmit1(data: z.infer<typeof FormSchema>) {
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      })
    }

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
          <Label htmlFor="Ime">
              Mesto
            </Label>
            <Form  {...form}>
      <form onSubmit={form.handleSubmit(onSubmit1)} className="space-y-6 mb-3">
      <FormField
          control={form.control}
          name="mesto"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover open={isOpen} onOpenChange={setIsOpen} >
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[400px] justify-between font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? field.value : "Select language"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent side="bottom" className="w-[400px] max-h-40 overflow-y-auto p-0 shadow-lg">
                  <Command>
                    <CommandInput placeholder="Izberi mesto..." />
                    <CommandEmpty>Mesto ne obstaja</CommandEmpty>
                    <CommandGroup>
                      {cities.map((mesto) => (
                        <CommandItem
                          value={mesto}
                          key={mesto}
                          onSelect={(value) => {
                            form.setValue("mesto", mesto);
                            setIsOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              mesto === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {mesto}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
           
              <FormMessage />
            </FormItem>
          )}
        />
       
      </form>
    </Form>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Avatar</Label>
      <Input id="picture" type="file" />
    </div>
    
    </CardContent>
    <CardFooter>
    <Button
            type="submit"
           
            disabled={isLoading1}
          >
            {isLoading1 && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            <span>Shrani</span>
          </Button>
    </CardFooter>
  </Card>
 
   
</>  

)
}
export default UpdateUserForm;