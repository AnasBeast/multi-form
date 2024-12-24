import React, { useState } from 'react'
import { useStep } from '../context/StepContext';

const Plan = () => {
    const {step,addStep,removeStep} = useStep();
    const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

    const [isOn, setIsOn] = useState(false);
    const [required, setRequired] = useState(false);
    const handleToggle = () => {
        setIsOn(prevState => !prevState);
        if (!isOn){setPlans(yearlyPlans)} else {setPlans(monthlyPlans)}

    };

    const [plans, setPlans] = useState([
        {image:"./images/icon-arcade.svg", name:"Arcade", price:"$9"},
        {image:"./images/icon-advanced.svg", name:"Advanced", price:"$12"},
        {image:"./images/icon-pro.svg", name:"Pro", price:"$15"}
    ]);

    const monthlyPlans = [
        {image:"./images/icon-arcade.svg", name:"Arcade", price:"$9"},
        {image:"./images/icon-advanced.svg", name:"Advanced", price:"$12"},
        {image:"./images/icon-pro.svg", name:"Pro", price:"$15"}
    ];

    const yearlyPlans = [
        {image:"./images/icon-arcade.svg", name:"Arcade", price:"$90"},
        {image:"./images/icon-advanced.svg", name:"Advanced", price:"$120"},
        {image:"./images/icon-pro.svg", name:"Pro", price:"$150"}
    ];


    const handlePlanSelect = (index: number) => {
        setSelectedPlan(index); // Update selected plan index
        setRequired(false)
    };

    const goback = ()=>{
        removeStep();
    }

    const nextStep = ()=>{
        if(selectedPlan!=null){addStep()} else setRequired(true);
    }
    return (
        <div className={`py-12 space-y-8 ${step===1?"block":"hidden"} transition-all duration-200 ease-out`}>
            <div>
                <h1 className="text-3xl text-marineblue font-bold">Select your plan</h1>
                <h2 className='text-coolgray'>You have the option of monthly or yearly billing.</h2>
            </div>
            <div className='grid grid-cols-3 gap-8 w-full'>
                {plans.map((plan, index) => (
                    <button key={index} onClick={() => handlePlanSelect(index)} // Handle button click
                    className={`p-6 pr-12 text-left outline rounded-lg transition-all duration-200 ease-out 
                      ${selectedPlan === index ? 'outline-purplishblue' : 'outline-lightgray'} 
                      ${required ? 'outline-strawberryred' : null} 
                      hover:outline-purplishblue focus:outline-purplishblue cursor-pointer`}
                    >
                        <img src={plan.image} alt={plan.name} />
                        <h3 className='text-marineblue mt-12'>{plan.name}</h3>
                        <h4 className='text-coolgray'>{plan.price}/mo</h4>
                        {isOn && <h4 className='text-marineblue'>2 months free</h4>}
                    </button>
                ))}
            </div>
            <div className='w-full bg-lightgray flex justify-center gap-4 py-3'>
                <h3 className={`${!isOn?"text-marineblue":"text-coolgray"}`}>Monthly</h3>
                <div className="flex items-center">
                    
                    <div
                        onClick={handleToggle}
                        className={`relative w-14 h-6 rounded-full cursor-pointer transition-colors bg-marineblue`}
                    >
                        <div
                        className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${isOn ? 'transform translate-x-8' : ''}`}
                        />
                    </div>
                </div>
                <h3 className={`${isOn?"text-marineblue":"text-coolgray"}`}>Yearly</h3>
            </div>
            <div className="w-full flex justify-between pt-12">
                <button 
                onClick={()=>goback()}
                className="text-coolgray py-3 px-6 rounded-lg"
                >
                    Go Back
                </button>
                <button 

                className="bg-marineblue text-white py-3 px-6 rounded-lg hover:bg-purplishblue hover:shadow-xl transition duration-300 ease-out"
                onClick={()=>nextStep()}
                >
                    Next Step
                </button>
            </div>
        </div>
    )
}

export default Plan