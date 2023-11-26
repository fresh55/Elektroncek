import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useStep } from '../StepContext';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@radix-ui/react-separator';
import { Button } from '@/components/ui/button';

export const  SomeComponent3 = () => {
  const { items, currentStep, goNext, goPrev } = useStep();

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
    
        <CardContent>
       
        </CardContent>
        <div className="flex justify-end">
  <Button className="mb-4 mr-4" type="submit">
      Shrani Podatke in nadaljujte na naslednji korak
  </Button>
</div>
      
    </Card>
    </div>
  
  );
}