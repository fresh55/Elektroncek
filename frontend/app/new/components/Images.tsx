import { useStep } from '../StepContext';

export const  SomeComponent3 = () => {
  const { items, currentStep, goNext, goPrev } = useStep();

  return (
    <>
      <button className='bg-green-500 m-10 p-10'
      onClick={() => {
        goPrev()
      }}
    >nazaj</button>
   <button className='bg-green-500 m-10 p-10'
      onClick={() => {
        goNext()
      }}
    >
      Button
    </button>
      
    </>
  );
}