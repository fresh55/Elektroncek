import React, { useState,useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useStep } from "../StepContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller  } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {Sparkles,Laugh,Hourglass, AlertTriangle} from "lucide-react"
import clsx from 'clsx';

const formSchema = z.object({
  ime: z.string().nonempty().max(5),
  status: z.enum(["novo", "kot novo", "rabljeno", "poškodovano"]),
  cena: z.string(),
});

export const SomeComponent = () => {
  const { items, currentStep, goNext, goPrev, setCurrentStep } = useStep();
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [formattedValue, setFormattedValue] = useState('');
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ime: "",
      status: undefined,
      cena: undefined,
    },
  });
  function onSubmit({ ime, status,cena }: z.infer<typeof formSchema>) {
    console.log(errors.cena);
    console.log(ime, status, cena);
    try {
    } catch (error) {
      console.error("Failed to update user:", error);
      // Show error message to the user
    } finally {
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setIsInputEmpty(event.target.value === '');
    let value = event.target.value;
    value = value.replace(/[^0-9.,]/g, '');  // Remove non-numeric and non-delimiter characters
    value = value.replace(/,/g, '.');  // Ensure we only have a dot as a decimal separator for parsing
    let [whole = '', fraction = ''] = value.split('.');
    fraction = fraction.slice(0, 2);  // Limit decimal to 2 places

    // Remove leading zeros from the whole number part
    while (whole.length > 1 && whole.startsWith('0')) {
        whole = whole.slice(1);
    }

    // Format whole number part with thousand separators
    whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Ensure the whole number part is no longer than 7 digits
    let digitCount = whole.replace(/,/g, '').length;
    if (digitCount > 7) {
        whole = whole.slice(0, -1);  // Remove the last character
        digitCount--;
    }

    const formattedValue = `${whole}${fraction ? '.' + fraction : ''}`;
    setFormattedValue(formattedValue);

    // Remove trailing zeros from the formatted value but only if there's a decimal point
    if (formattedValue.includes('.')) {
        setFormattedValue(formattedValue.replace(/\.?0+$/, ''));
    }
}
  useEffect(() => {
    setValue('cena', formattedValue);  // Assuming setValue is from useForm()
}, [formattedValue, setValue]);
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 pb-32 pt-8">
      <Card>
        <CardHeader>
          <Badge variant="secondary" className="self-start text-xs uppercase">
            Korak {currentStep.index}
          </Badge>
          <CardTitle className="text-[24px]">{currentStep.title}</CardTitle>
        </CardHeader>

        <Separator className="mb-8" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <div className="mb-2">
              <Label htmlFor="ime">Naslov</Label>
              <Input
                className={errors.ime ? "border-red-500" : ""}
                placeholder="APPLE iPhone 15 128GB Black"
                id="ime"
                {...register("ime")}
              />
              {errors.ime && (
                <span className="text-red-500 text-xs">
                  {errors.ime.message}
                </span>
              )}
              <span className="text-xs opacity-70 text-zinc-900 mt-2">
                Pomenljiv naslov pomaga iskalcem hitreje najti vaš oglas in
                poveča vaše možnosti za prodajo.
              </span>
            </div>
            <div className="mb-2">
              <Label htmlFor="status">Stanje</Label>
              <Controller
            name="status"
            control={control} // from useForm()
            render={({ field }) => (
              <RadioGroup   
              //@ts-ignore 
              onValueChange={field.onChange}
              className="grid grid-cols-4 gap-4">
                   <div>
                   <RadioGroupItem
                    value="novo"
                    id="novo"
                    className="peer sr-only"
                  
                  />
                  <Label
                    htmlFor="novo"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-zinc-900 peer-data-[state=checked]:text-white [&:has([data-state=checked])]:bg-zinc-900"
                  >
                    <Sparkles className="mb-1"/>
                    Novo
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="kot novo"
                    id="kot novo"
                    className="peer sr-only"
                    
                  />
                  <Label
                    htmlFor="kot novo"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-zinc-900 peer-data-[state=checked]:text-white [&:has([data-state=checked])]:border-primary"
                  >
                    <Laugh className="mb-1 "/>
                    Kot novo
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="rabljeno"
                    id="rabljeno"
                    className="peer sr-only"
                  
                  />
                  <Label
                    htmlFor="rabljeno"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-zinc-900 peer-data-[state=checked]:text-white [&:has([data-state=checked])]:border-primary"
                  >
                    <Hourglass className="mb-1" />
                    Rabljeno
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="poškodovano"
                    id="poškodovano"
                    className="peer sr-only"
                  
                  />
                  <Label
                    htmlFor="poškodovano"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-zinc-900 peer-data-[state=checked]:text-white [&:has([data-state=checked])]:border-primary"
                  >
                    <AlertTriangle className="mb-1" />
                    Poškodovano
                  </Label>
                </div>
              </RadioGroup>
            )}/>
             <span className="text-xs opacity-70 text-zinc-900 mt-2">
             Čim bolj natančno opišite stanje artikla, ki ga ponujate, in vse pomembne podrobnosti pokažite na slikah artikla. To vam prihrani čas pri povpraševanju in poveča vaše prodajne možnosti.
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
    <div>
        <Label htmlFor="cena">Cena</Label>
        <div className="relative flex items-center">
        {!isInputEmpty && (<span className="absolute ml-3 text-sm text-zinc-900">€</span>)}
            <Input
                 className={clsx({'pl-6': !isInputEmpty})}
                placeholder={isInputEmpty ? "€ 0.00" : ""}
                id="cena"
                value={formattedValue}
                {...register("cena", {
                    onChange: handleChange
                })}
            />
        </div>
    </div>
</div>
          </CardContent>
          <Button className="" type="submit">
            Button
          </Button>
        </form>
      </Card>
      <div className="flex"></div>
    </div>
  );
};
