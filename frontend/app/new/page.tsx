'use client'
import { redirect } from "next/navigation";
import  getCurrentUser  from "@/app/actions/getCurretUser"
import { useStep } from './StepContext';
import {SomeComponent} from "./components/Info"
import {SomeComponent2} from "./components/Category"
import {SomeComponent3} from "./components/Images"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export  function ProductFormPage()  {
    
    const { items, currentStep, goNext, goPrev } = useStep();

    let CurrentComponent;

 switch (currentStep.index) {
    case 1:
      CurrentComponent = <SomeComponent />;
      break;
    case 2:
      CurrentComponent = <SomeComponent2 />;
      break;
    case 3:
      CurrentComponent = <SomeComponent3 />;
      break;
    // ... other cases
    default:
      CurrentComponent = <div>Unknown step</div>;
      break;
  }

  return (
    <div>
      <Card className="">
        <CardHeader className="text-center"  >
        <CardTitle className="text-[48px]">Ustvarite nov oglas.</CardTitle>
        <CardDescription className="text-[20px]">Sledite korakom, da ustvarite oglas.</CardDescription>
        </CardHeader>
      </Card>
      {CurrentComponent} {/* Render the current component based on the step */}
    </div>
  );
}
 
export default ProductFormPage;