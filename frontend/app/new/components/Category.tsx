import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useStep } from "../StepContext";
import { Separator } from "@radix-ui/react-separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AlertTriangle, Hourglass, Laugh, Sparkles } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { motion,AnimatePresence  } from 'framer-motion';
import { useEffect, useState } from 'react';

import { categories,Category, Subcategory } from './categories';
const formSchema = z.object({
  ime: z.string().min(1, "Naslov produkta je obvezen ! "),
  status: z.enum(["novo", "kot novo", "rabljeno", "poškodovano"]),
  cena: z.string(),
});


export const SomeComponent2 = () => {
  const { items, currentStep, goNext, goPrev } = useStep();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const variants = {
    hidden: { 
      opacity: 0, 
      scale: 0, // more dramatic shrinking
      y: 50 // move down on exit
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0 // return to original position
    },
  };
  
  const clickTransition = {
    duration: 0.8, // longer duration for a more noticeable effect
    type: "spring",
    stiffness: 100, // adjust stiffness for spring animation
  };

  const handleCategoryClick = (categoryValue: string) => {
    setIsVisible(false);
    setSelectedCategory(categoryValue);
    setSelectedSubcategory(null); // Reset subcategory selection when a category is clicked
  };
  
  const handleSubcategoryClick = (subcategoryValue: string) => {
    setIsVisible(true);
    setSelectedSubcategory(subcategoryValue);
  };
  useEffect(() => {
    if (selectedCategory !== null || selectedCategory === null && !isVisible) {
      setIsVisible(true);
    }
  }, [selectedCategory, isVisible]);

  const selectedCategoryData = categories.find(category => category.value === selectedCategory);
 
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
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 pb-32 pt-8">
      <Card>
        <CardHeader>
          <Badge variant="secondary" className="self-start text-xs uppercase">
            Korak {currentStep.index}
          </Badge>
          <CardTitle className="text-[24px]">{currentStep.title}</CardTitle>
        </CardHeader>

        <Separator className="mb-8" />

        <CardContent>
          <div className="mb-2">
          <Controller
  name="status"
  control={control} // from useForm()
  render={({ field }) => (
    <AnimatePresence>
                  <RadioGroup
                    onValueChange={field.onChange}
                    className="grid grid-cols-4 gap-4"
                  >
                    {selectedCategory === null ? (
                      categories.map((category: Category) => (
                        <motion.div
                          key={category.id}
                          variants={variants}
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, type: "spring", bounce: 0.25 }}
                          onClick={() => handleCategoryClick(category.value)}
                        >
          <RadioGroupItem
            value={category.value}
            id={category.id}
            className="peer sr-only"
          />

          <Label
            htmlFor={category.id}
            className="flex flex-col cursor-pointer items-center text-center p-4 h-42 rounded-md border border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-muted  [&:has([data-state=checked])]:border-primary"
          >
            <Image
              className="rounded-sm mb-2"
              src={category.imageSrc}
              width={100}
              height={100}
              alt={category.title}
            />
            <h3 className="text-lg">{category.title}</h3>
            <span className="text-xs opacity-70 text-zinc-900 mt-2 block">
              {category.description}
            </span>
          </Label>
          </motion.div>
    ))
  ) : (
    
         
        selectedCategoryData?.subcategories?.map((sub: Subcategory) => (
          <motion.div
          key={sub.id}
          variants={variants}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.25 }}
          onClick={() => handleCategoryClick(sub.value)}
        >
<RadioGroupItem
value={sub.value}
id={sub.id}
className="peer sr-only"
/>

<Label
htmlFor={sub.id}
className="flex flex-col cursor-pointer items-center text-center p-4 h-42 rounded-md border border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-muted  [&:has([data-state=checked])]:border-primary"
>
<Image
className="rounded-sm mb-2"
src={sub.imageSrc}
width={100}
height={100}
alt={sub.title}
/>
<h3 className="text-lg">{sub.title}</h3>
<span className="text-xs opacity-70 text-zinc-900 mt-2 block">
{sub.description}
</span>
</Label>
</motion.div>
        ))
      
 
  )}
      
    </RadioGroup>
    </AnimatePresence>
  )}
/>
            <span className="text-xs opacity-70 text-zinc-900 mt-2">
              Čim bolj natančno opišite stanje artikla, ki ga ponujate, in vse
              pomembne podrobnosti pokažite na slikah artikla. To vam prihrani
              čas pri povpraševanju in poveča vaše prodajne možnosti.
            </span>
          </div>
        </CardContent>
        <div className="flex justify-end">
          <Button className="mb-4 mr-4" type="submit">
            Shrani Podatke in nadaljujte na naslednji korak
          </Button>
        </div>
      </Card>
    </div>
  );
};
