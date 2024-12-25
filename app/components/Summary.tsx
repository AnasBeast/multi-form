import React from 'react'
import { useStep } from '../context/StepContext';

const Summary = () => {
    const {step, addStep, removeStep, updateStep, plan} = useStep();
    let sum =0;
    plan.addOns.forEach((addOn)=>sum+=+addOn.price.substring(2,addOn.price.indexOf("/")))
    sum = sum+(+plan.price.substring(1,plan.price.indexOf("/")))

    const goback = ()=>{
        removeStep();
    }

    const nextStep = ()=>{
        addStep()
    }
    return (
      <div
        className={`py-12 space-y-8 ${
          step === 3 ? "block" : "hidden"
        } transition-all duration-200 ease-out`}
      >
        <div>
          <h1 className="text-3xl text-marineblue font-bold">Finishing up</h1>
          <h2 className="text-coolgray">
            Double-check everything looks OK before confirming.
          </h2>
        </div>
        
        <div className='flex flex-col'>
            <div className="flex flex-col p-8 bg-magnolia rounded-sm gap-8 w-full">
                <div className='flex justify-between items-center border-b-2 pb-4'>
                    <div>
                        <h3 className='text-marineblue font-bold'>Arcade ({plan.type})</h3>
                        <h4 className='underline text-coolgray cursor-pointer' onClick={()=>updateStep(1)}>Change</h4>
                    </div>
                    <h3 className='font-bold text-marineblue'>{plan.price}</h3>
                </div>
                <div className='flex flex-col gap-2'>
                {plan.addOns.map((addOn, index) => (
                <div key={index} className='w-full flex justify-between'>
                    <h3 className='text-coolgray'>{addOn.title}</h3>
                    <h3 className='text-marineblue'>{addOn.price}</h3>
                </div>
                ))}
                </div>
            </div>

            <div className='w-full flex items-center justify-between p-8'>
                <h3>Total ({plan.type})</h3>
                <h1 className='text-purplishblue text-xl font-bold'>+${sum}/{plan.type=="monthly"?"mo":"yr"}</h1>
            </div>
        </div>

        <div className="w-full flex justify-between ">
          <button
            onClick={() => goback()}
            className="text-coolgray py-3 px-6 rounded-lg hover:text-marineblue"
          >
            Go Back
          </button>
          <button
            className="bg-purplishblue text-white py-3 px-6 rounded-lg hover:shadow-xl transition duration-300 ease-out"
            onClick={() => nextStep()}
          >
            Confirm
          </button>
        </div>
      </div>
    );
}

export default Summary