import { useStep } from '../StepContext';

export const  SomeComponent4 = () =>{
  const { items, currentStep, goNext, goPrev } = useStep();

  return (
    <>
      <span>page3</span>
      {/* ...other components */}
    </>
  );
}