'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface StepContextProps {
  step: number;
  addStep: () => void;
  removeStep: () => void;
  updateStep: (value:number) => void;
  plan:Plan;
  setPlan: (plan:Plan)=> void;
}

const StepContext = createContext<StepContextProps | undefined>(undefined);

interface StepProviderProps {
  children: ReactNode;
}

interface addOn{
  title:string,
  desc:string,
  price:string
}
interface Plan {
  name:string,
  price:string,
  type:string,
  addOns: addOn[]
}

export const StepProvider: React.FC<StepProviderProps> = ({ children }) => {
  const [step, setStep] = useState<number>(0);
  const [plan, setPlan] = useState<Plan>(
    {
      name: '',
      price: '',
      type: '',
      addOns: [],
    }
  );
  const addStep = () => {
    const newStep = step<4?step+1:step;
    setStep(newStep);
  };

  const removeStep = () => {
    const newStep = step>0?step-1:step;
    setStep(newStep);
  };
  
  const updateStep = (value:number)=>{
    setStep(value)
  }

  return (
    <StepContext.Provider value={{ step, addStep, removeStep, updateStep, plan, setPlan }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStep must be used within a StepProvider');
  }
  return context;
};