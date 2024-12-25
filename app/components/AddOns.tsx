'use client'
import React, { useEffect, useState } from 'react'
import { useStep } from '../context/StepContext';

const AddOns = () => {
    const {step, addStep, removeStep, plan, setPlan} = useStep();
    const [selectedAddOn, setselectedAddOn] = useState<number[]>([]);

    const [required, setRequired] = useState(false);

    const [addOns, setAddOns] = useState([
        {title:"Online Service", desc:"Access to multiplayer games", price:"+$1/mo"},
        {title:"Larger Storage", desc:"Extra 1TB of cloud save", price:"+$2/mo"},
        {title:"Customizable Profile", desc:"Custom theme on your profile", price:"+$2/mo"},
    ]);

    const yearlyAddOns = [
        {title:"Online Service", desc:"Access to multiplayer games", price:"+$10/yr"},
        {title:"Larger Storage", desc:"Extra 1TB of cloud save", price:"+$20/yr"},
        {title:"Customizable Profile", desc:"Custom theme on your profile", price:"+$20/yr"},
    ]

    useEffect(()=>{
        if(plan.type==="yearly")setAddOns(yearlyAddOns)
    },[plan])

    const handlePlanSelect = (index: number) => {
        setselectedAddOn((prevState)=>{
            if (prevState.includes(index)){
                console.log(prevState.filter(item => item !== index))
                return prevState.filter(item => item !== index)
            }
            return [...prevState, index]
        }); // Update selected plan index
        setRequired(false)
    };

    const goback = ()=>{
        removeStep();
    }

    const nextStep = ()=>{
        if(selectedAddOn!=null){
            const form = addOns.filter((addOn,index)=>{if(selectedAddOn.includes(index)) return addOn});
            setPlan({...plan,addOns:form});
            console.log({...plan,addOns:form})
            addStep()
        } else setRequired(true);
    }
    return (
      <div
        className={`py-12 space-y-8 ${
          step === 2 ? "block" : "hidden"
        } transition-all duration-200 ease-out`}
      >
        <div>
          <h1 className="text-3xl text-marineblue font-bold">Pick add-ons</h1>
          <h2 className="text-coolgray">
            Add-ons help enhance your gaming experience.
          </h2>
        </div>
        <div className="grid grid-rows-3 gap-8 w-full">
          {addOns.map((addOn, index) => (
            <div
              key={index}
              onClick={() => handlePlanSelect(index)} // Handle div click
              className={`p-5 text-left flex justify-between items-center outline rounded-lg transition-all duration-200 ease-out 
                        ${
                          selectedAddOn.includes(index)
                            ? "outline-purplishblue"
                            : "outline-lightgray"
                        } 
                        ${required ? "outline-strawberryred" : null} 
                        hover:outline-purplishblue focus:outline-purplishblue cursor-pointer`}
            >
              <div>
                <div className="flex gap-4">
                  <label
                    className="inline-flex items-center cursor-pointer"
                    onClick={() => handlePlanSelect(index)}
                  >
                    <input
                      type="checkbox"
                      name="online"
                      id="online"
                      checked={selectedAddOn.includes(index)}
                      className="custom-checkbox hidden"
                    />
                    <span
                      onClick={() => handlePlanSelect(index)}
                      className="custom-label relative block w-8 h-8 border-2 border-coolgray rounded-lg bg-white transition duration-300 ease-in-out"
                    />
                  </label>
                  <div>
                    <h3 className="text-marineblue">{addOn.title}</h3>
                    <h4 className="text-coolgray">{addOn.desc}</h4>
                  </div>
                </div>
              </div>
              <h3 className="text-purplishblue">{addOn.price}</h3>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-between ">
          <button
            onClick={() => goback()}
            className="text-coolgray py-3 px-6 rounded-lg hover:text-marineblue"
          >
            Go Back
          </button>
          <button
            className="bg-marineblue text-white py-3 px-6 rounded-lg hover:bg-purplishblue hover:shadow-xl transition duration-300 ease-out"
            onClick={() => nextStep()}
          >
            Next Step
          </button>
        </div>
      </div>
    );
}

export default AddOns