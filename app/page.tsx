'use client'
import { useEffect, useState } from "react";
import Info from "./components/Info";
import { useStep } from "./context/StepContext";
import Plan from "./components/Plan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";

export default function Home() {
  const {step} = useStep();
  const [steps, setSteps] = useState([
    { title: "Your Info", selected: false },
    { title: "Select Plan", selected: false },
    { title: "Add-Ons", selected: false },
    { title: "Summary", selected: false },
  ]);

  useEffect(() => {
    const updatedSteps = steps.map((sp, index) => ({
      ...sp,
      selected: index === step,
    }));
    setSteps(updatedSteps);
  }, [step]);
  return (
  <div className="w-screen h-screen flex items-center justify-center">
    <div className="w-[1000px] h-[600px] bg-white p-4 rounded-md flex gap-20">
      <div className="object-contain">
        <div className="absolute flex flex-col gap-6 p-8 w-[274px]">
          {steps.map((step,index)=>(
            <div key={index} className="flex gap-4 items-center">
              <div className={`flex items-center justify-center border-2 ${step.selected?"bg-magnolia text-marineblue":"text-white"} rounded-full w-12 h-12`}>
                <span className="text-center">{index+1}</span>
              </div>
              <div className="flex flex-col uppercase">
                <h2 className="text-coolgray font-normal text-sm">Step {index+1}</h2>
                <h1 className="text-white font-bold">{step.title}</h1>
              </div>
            </div>
          ))}
        </div>


        <img src="./images/bg-sidebar-desktop.svg" alt="side" />
      </div>
      <div className="w-[600px]">
        <Info/>
        <Plan/>
        <AddOns/>
        <Summary/>
      </div>
    </div>
  </div>     
  );
}
