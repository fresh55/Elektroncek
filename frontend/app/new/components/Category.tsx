import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useStep } from "../StepContext";
import { Separator } from "@radix-ui/react-separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  AlertTriangle,
  Hourglass,
  Laugh,
  Sparkles,
  ChevronLeft,
  StepForward,
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { categories, Category } from "./categories";
import React from "react";
const formSchema = z.object({
  ime: z.string().min(1, "Naslov produkta je obvezen ! "),
  status: z.enum(["novo", "kot novo", "rabljeno", "poškodovano"]),
  cena: z.string(),
});

type BreadcrumbsProps = {
  steps: Category[];
};
export const SomeComponent2 = () => {
  const { items, currentStep, goNext, goPrev } = useStep();
  const [breadcrumbs, setBreadcrumbs] = useState<Category[]>([]);
  const [currentSelection, setCurrentSelection] =
    useState<Category[]>(categories);

    const handleCategoryClick = (category: Category) => {
      // If there are subcategories, allow further navigation
      if (category.subcategories && category.subcategories.length > 0) {
        setBreadcrumbs([...breadcrumbs, category]);
        setCurrentSelection(category.subcategories);
      } else {
        // If no subcategories, don't update breadcrumbs or currentSelection
        // This will prevent further navigation
      }
    };
  
    // Determine if the end of subcategories is reached
    const isEndOfSubcategories = currentSelection.length === 0;
  
    // ... [rest of the existing code]

  const goBack = () => {
    const newBreadcrumbs = breadcrumbs.slice(0, -1);
    setBreadcrumbs(newBreadcrumbs);
    const parentCategory = newBreadcrumbs[newBreadcrumbs.length - 1] || null;
    setCurrentSelection(
      parentCategory ? parentCategory.subcategories || [] : categories
    );
  };


  const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ steps }) => (
    <div className="flex text-center rounded-full border">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          {index > 0 && <span className="text-xl">{">"}</span>}
          <button className="bg-ghost  inline-flex items-center  px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 " onClick={() => {/* handle breadcrumb click */}}>
            {step.title} {/* Display the title or any other string property */}
          </button>
        </React.Fragment>
      ))}
    </div>
  );

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0, // more dramatic shrinking
      y: 50, // move down on exit
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0, // return to original position
    },
  };

  const clickTransition = {
    duration: 0.8, // longer duration for a more noticeable effect
    type: "spring",
    stiffness: 100, // adjust stiffness for spring animation
  };

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
        <div className="ml-4">
          {breadcrumbs.length > 0 && (
            <> <div className="flex justify-center"><Breadcrumbs steps={breadcrumbs} /></div>
              
              <Button onClick={goBack}>
                <ChevronLeft />
                Vrni se
              </Button>
            </>
          )}
        </div>
        

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
                    {currentSelection.map((category) => (
                      <motion.div
                        key={category.id}
                        variants={variants}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          type: "spring",
                          bounce: 0.25,
                        }}
                        onClick={() => handleCategoryClick(category)}
                      >
                        <RadioGroupItem
                          value={category.value}
                          id={category.id}
                          className="peer sr-only "
                        />

                        <Label
                          htmlFor={category.id}
                         
                          


                          
                        >
                          <Image
                            className="rounded-sm mb-2"
                            src={category.imageSrc}
                            width={112}
                            height={112}
                            alt={category.title}
                          />
                          <h3 className="text-lg">{category.title}</h3>
                          <span className="text-xs opacity-70 text-zinc-900 mt-2 block">
                            {category.description}
                          </span>
                        </Label>
                      </motion.div>
                    ))}
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
