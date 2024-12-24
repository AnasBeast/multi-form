'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface StepContextProps {
  step: number;
  addStep: () => void;
  removeStep: () => void;
}

const StepContext = createContext<StepContextProps | undefined>(undefined);

interface StepProviderProps {
  children: ReactNode;
}

export const StepProvider: React.FC<StepProviderProps> = ({ children }) => {
  const [step, setStep] = useState<number>(0);

  const addStep = () => {
    const newStep = step<4?step+1:step;
    setStep(newStep);
  };

  const removeStep = () => {
    const newStep = step>0?step-1:step;
    setStep(newStep);
  };

  return (
    <StepContext.Provider value={{ step, addStep, removeStep }}>
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