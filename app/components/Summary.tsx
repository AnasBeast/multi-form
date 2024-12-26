import React, { useState } from "react";
import { useStep } from "../context/StepContext";
import Confirmation from "./Confirmation";

const Summary = () => {
  const { step, removeStep, updateStep, plan } = useStep();
  let sum = 0;
  plan.addOns.forEach(
    (addOn) => (sum += +addOn.price.substring(2, addOn.price.indexOf("/")))
  );
  sum = sum + +plan.price.substring(1, plan.price.indexOf("/"));

  const [show, setShow] = useState(false);

  const goback = () => {
    removeStep();
  };

  const nextStep = () => {
    setShow(true);
  };
  return (
    <>
      {!show && (
        <div className={`${
          step === 3 ? "block animate-fade-in" : "hidden"
        } transition-all duration-200 ease-out `}>
          <div
          className={`md:py-12 space-y-4 md:space-y-8 md:px-0 md:top-0 relative -top-16 bg-white w-11/12 md:w-auto px-6 rounded-lg md:rounded-none py-8 mx-auto shadow-lg md:shadow-none`}
        >
          <div>
            <h1 className="text-3xl text-marineblue font-bold">Finishing up</h1>
            <h2 className="text-coolgray">
              Double-check everything looks OK before confirming.
            </h2>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col p-4 md:p-8 bg-magnolia rounded-sm gap-4 md:gap-8 w-full">
              <div className="flex justify-between items-center border-b-2 pb-4">
                <div>
                  <h3 className="text-marineblue font-bold">
                    Arcade ({plan.type})
                  </h3>
                  <h4
                    className="underline text-coolgray cursor-pointer"
                    onClick={() => updateStep(1)}
                  >
                    Change
                  </h4>
                </div>
                <h3 className="font-bold text-marineblue">{plan.price}</h3>
              </div>
              <div className="flex flex-col gap-2">
                {plan.addOns.map((addOn, index) => (
                  <div key={index} className="w-full flex justify-between">
                    <h3 className="text-coolgray">{addOn.title}</h3>
                    <h3 className="text-marineblue">{addOn.price}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full flex items-center justify-between p-4 pt-8 md:p-8">
              <h3>Total ({plan.type})</h3>
              <h1 className="text-purplishblue text-xl font-bold">
                +${sum}/{plan.type == "monthly" ? "mo" : "yr"}
              </h1>
            </div>
          </div>

          
        </div>
        <div className="w-full p-4 absolute md:relative bg-white md:bg-none bottom-0 md:bottom-auto flex justify-between ">
        <button
          onClick={() => goback()}
          className="text-coolgray py-3 px-6 hover:text-marineblue"
        >
          Go Back
        </button>
        <button
          className="bg-purplishblue text-white py-3 px-6 rounded-md hover:shadow-xl transition duration-300 ease-out"
          onClick={() => nextStep()}
        >
          Confirm
        </button>
      </div>
        </div>
      )}
      {show && <Confirmation />}
    </>
  );
};

export default Summary;
