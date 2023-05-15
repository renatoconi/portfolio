import { useState } from "react";


function useForm(steps) {
     
    const [currentStep, setcurrentStep ] = useState(0);
    
 function changeStep (i, e){
    if (e) e.preventDefault();
    if (i < 0 || i >= steps.length)return
        setcurrentStep(i);

    }
     

   return {
       currentStep,
       currentComponent: steps[currentStep],
       changeStep,
       isLastStep: currentStep + 1 === steps.length? true: false,
       isFristStep: currentStep === 0 ? true : false,
   };
}

export default useForm;