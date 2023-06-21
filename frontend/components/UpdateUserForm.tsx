"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageUpload from "./ImageUpload";
import SelectMesto from "./SelectMesto";

// schema for form
const formSchema = z.object({
  username: z.string(),
  ime: z.string(),
  priimek: z.string(),
  email: z.string().email(), // Example of adding the 'email' attribute
  password: z.string().min(8), // Example of adding the 'age' attribute
  avatar: z.string(),
  mesto: z.string(),
});

const UpdateUserForm = (user: any) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const imageSrc = watch("avatar");
  const mesto = watch("mesto");
  console.log(mesto);

  const setCustomValue = (id: "avatar" | "mesto", value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle className="">Prijavni podatki</CardTitle>
            <CardDescription>Spremenite svoje prijavne podatke</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 mb-3">
              <Label htmlFor="email">Elektronski naslov</Label>
              <Input
                placeholder={`${user.user.email}`}
                id="email"
                className="w-[400px]"
                size={32}
                {...register("email")}
              />
              {errors?.email && (
                <p className="px-1 text-xs text-red-600">napaka</p>
              )}
            </div>

            <div className="grid mb-2 justify-items-start gap-3">
              <Label htmlFor="email">Geslo</Label>
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
                      <Label htmlFor="password1" className="text-right">
                        Trenutno geslo
                      </Label>
                      <Input
                        id="password1"
                        type="password"
                        placeholder="skrivnost123"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="password" className="text-right">
                        Geslo
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="geslo123"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="password1" className="text-right">
                        Geslo
                      </Label>
                      <Input
                        id="password1"
                        type="password"
                        placeholder="geslo123"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Shrani spremembe</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>

          <CardHeader>
            <CardTitle>Podatki za objavo oglasa</CardTitle>
            <CardDescription>Spremenite podatke o vas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-8 mb-3">
              <div>
                <Label htmlFor="Ime">Ime</Label>
                <Input
                  placeholder={`${user.user.email}`}
                  id="email"
                  className="w-[400px]"
                  size={32}
                  {...register("ime")}
                />
                {errors?.ime && (
                  <p className="px-1 text-xs text-red-600">napaka</p>
                )}
              </div>
              <div>
                <Label htmlFor="Ime">Priimek</Label>
                <Input
                  placeholder={`${user.user.email}`}
                  id="email"
                  className="w-[400px]"
                  size={32}
                  {...register("priimek")}
                />
                {errors?.priimek && (
                  <p className="px-1 text-xs text-red-600">napaka</p>
                )}
              </div>
            </div>
            <Label htmlFor="Ime">Mesto</Label>
            <SelectMesto
              onChange={(value) => setCustomValue("mesto", value)}
              value={mesto}
            />
            <Label className="mb-3" htmlFor="Ime">
              Prikazana slika
            </Label>
            <ImageUpload
              onChange={(value) => setCustomValue("avatar", value)}
              value={imageSrc}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              <span>Shrani</span>
            </Button>
          </CardFooter>
        </Card>
      </form>
    </>
  );
};
export default UpdateUserForm;
