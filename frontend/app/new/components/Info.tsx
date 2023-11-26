import React, { useState, useEffect } from "react";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sparkles, Laugh, Hourglass, AlertTriangle } from "lucide-react";
import clsx from "clsx";

const formSchema = z.object({
  ime: z.string().min(1, "Naslov produkta je obvezen ! "),
  status: z.enum(["novo", "kot novo", "rabljeno", "poškodovano"]),
  cena: z.string(),
});

export const SomeComponent = () => {
  const { items, currentStep, goNext, goPrev, setCurrentStep, isCurrentStepValid, setCurrentStepValid } = useStep();
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [formattedValue, setFormattedValue] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
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
 function onSubmit({ ime, status, cena }: z.infer<typeof formSchema>) {
    console.log(errors.cena);
    console.log(ime, status, cena);
    try {
      
    setCurrentStepValid(true);
    
    } catch (error) {
      console.error("Failed to update user:", error);
      // Show error message to the user
    } finally {
    }
  }

  useEffect(() => {
    if (isCurrentStepValid) {
      goNext();
    }
  }, [isCurrentStepValid, goNext]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setIsInputEmpty(event.target.value === "");
    setFormattedValue(event.target.value);
  }

  useEffect(() => {
    if (isInputEmpty) {
      setValue("cena", ""); // Clear the value if the input is empty
    }
  }, [isInputEmpty, setValue]);

  const isInputDisabled = selectedOption === 'banana' || selectedOption === 'blueberry';
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
            <div className="mb-8">
              <Label htmlFor="ime">Naslov</Label>
              <Input
                className={errors.ime ? "border-red-500" : ""}
                placeholder="APPLE iPhone 15 128GB Black"
                id="ime"
                {...register("ime")}
              />
              {errors.ime && (
                <span className="text-red-500 text-xs mt-2 block">
                  {errors.ime.message}
                </span>
              )}
              <span className="text-xs opacity-70 text-zinc-900 mt-2 block">
                Pomenljiv naslov pomaga iskalcem hitreje najti vaš oglas in
                poveča vaše možnosti za prodajo.
              </span>
            </div>
            <div className="mb-8">
              <Label htmlFor="status">Stanje</Label>
              <Controller
                name="status"
                control={control} // from useForm()
                render={({ field }) => (
                  <RadioGroup
                    //@ts-ignore
                    onValueChange={field.onChange}
                    className="grid grid-cols-4 gap-4"
                  >
                    <div>
                      <RadioGroupItem
                        value="novo"
                        id="novo"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="novo"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-gradient-to-r from-cyan-500 to-blue-500  peer-data-[state=checked]:text-white [&:has([data-state=checked])]:bg-zinc-900"
                      >
                        <Sparkles className="mb-1" />
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
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-gradient-to-r from-cyan-500 to-blue-500 peer-data-[state=checked]:text-white [&:has([data-state=checked])]:border-primary"
                      >
                        <Laugh className="mb-1 " />
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
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-gradient-to-r from-cyan-500 to-blue-500 peer-data-[state=checked]:text-white [&:has([data-state=checked])]:border-primary"
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
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-gradient-to-r from-cyan-500 to-blue-500 peer-data-[state=checked]:text-white [&:has([data-state=checked])]:border-primary"
                      >
                        <AlertTriangle className="mb-1" />
                        Poškodovano
                      </Label>
                    </div>
                  </RadioGroup>
                )}
              />
              <span className="text-xs opacity-70 text-zinc-900 mt-2">
                Čim bolj natančno opišite stanje artikla, ki ga ponujate, in vse
                pomembne podrobnosti pokažite na slikah artikla. To vam prihrani
                čas pri povpraševanju in poveča vaše prodajne možnosti.
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
              <Label htmlFor="cena">Cena</Label>
                <div className="relative flex items-center">
                  {!isInputEmpty && (
                    <span className={clsx("absolute ml-3 text-sm text-zinc-900", { 'opacity-50': isInputDisabled })}>
                      €
                    </span>
                  )}
                  <Input
                    disabled={isInputDisabled}
                     className={clsx(
        // This class is always applied
        { 'opacity-50': isInputDisabled }, // Conditionally applied based on isInputDisabled
        !isInputEmpty ? "pl-6" : '', // Conditionally apply another class based on isInputEmpty
        // ... you can add more conditions or static classes here
      )}
                    placeholder={isInputEmpty ? "€ 0.00" : ""}
                    id="cena"
                    value={formattedValue}
                    {...register("cena", {
                      onChange: handleChange,
                    })}
                  />
                </div>
              </div>
              <div>
              <Label htmlFor="cena">Izberi vrsto ponudbe</Label>
              <div className="w-1/2">
                <Select defaultValue="apple" onValueChange={setSelectedOption}>
                  <SelectTrigger >
                    <SelectValue  placeholder="Izberi vrsto" />
                  </SelectTrigger>
                  <SelectContent >
                    <SelectGroup>
                      <SelectItem value="apple">Prodam</SelectItem>
                      <SelectItem value="banana">Podarim</SelectItem>
                      <SelectItem value="blueberry">
                        Cena po dogovoru
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                </div>
              </div>
            </div>
          </CardContent>
          <div className="flex justify-end">
    <Button className="mb-4 mr-4" type="submit">
        Shrani Podatke in nadaljujte na naslednji korak
    </Button>
</div>
        </form>
      </Card>
      <div className="flex"></div>
    </div>
  );
};
