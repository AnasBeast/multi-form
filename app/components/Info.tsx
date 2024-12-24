/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client'
import React, { useRef, useState } from "react";
import { useStep } from "../context/StepContext";

const Info = () => {
  const req = useRef<(HTMLHeadingElement | null)[]>([]);
  const {step,addStep} = useStep();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const handleClick = ((e:any)=>{
    const target = e.currentTarget;
    const value = target.value;
    const inputId = target.id;

    if (value==""){
      target.classList.add("outline-strawberryred")
    }else{
      target.classList.remove("outline-strawberryred");
      switch (inputId){
        case "name":req.current[0]?.classList.add("hidden") ;break
        case "email":req.current[1]?.classList.add("hidden") ;break
        case "tel":req.current[2]?.classList.add("hidden") ;break
      }
    }

    switch(inputId){
      case "name":
        setName(value);
      break
      case "email":
        setEmail(value);
      break
      case "tel":
        setTel(value);
      break
    }
  });
  const isValidEmail = (email:string ) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const isValidPhoneNumber = (phone:string) => {
    // Regular expression for validating international phone numbers
    const phonePattern = /^(?:\+?\d{1,3}[-. ]?)?(?:\(?\d{1,4}?\)?[-. ]?)?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,9}$/;
    return phonePattern.test(phone);
  };
  const handleSubmit = (()=>{
    
    if(name==""){
      req.current[0]?.classList.remove("hidden");
      document.getElementById("name")?.classList.add("outline-strawberryred");
    }else{req.current[0]?.classList.add("hidden")}

    if(email=="" || !isValidEmail(email)){
      req.current[1]?.classList.remove("hidden");
      document.getElementById("email")?.classList.add("outline-strawberryred");
    }else{req.current[1]?.classList.add("hidden")}

    if(tel=="" || !isValidPhoneNumber(tel)){
      req.current[2]?.classList.remove("hidden");
      document.getElementById("tel")?.classList.add("outline-strawberryred");
    }else{req.current[2]?.classList.add("hidden")}
    
    if(name!="" && email!="" && tel!=""){
      addStep();
      console.log(step)
    }

  });
  return (
    <div className={`py-12 space-y-8 ${step===0?"block":"hidden"} transition-all duration-200 ease-out`}>
      <div>
        <h1 className="text-3xl text-marineblue font-bold">Personal Info</h1>
        <h2 className="text-coolgray">Please provide your name, email address, and phone number.</h2>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="w-full flex justify-between">
            <h1 className="text-marineblue font-normal text-md">
              Name
            </h1>
            <h2 className="text-strawberryred hidden" ref={(el) => { req.current[0] = el; }}>This is required</h2>
          </div>
          <input type="text" id="name" placeholder="e.g. Stephen King" 
            className="outline outline-2 outline-lightgray text-marineblue p-2 rounded-lg focus:outline-purplishblue" 
            onChange={(e)=>handleClick(e)}
            onClick={(e)=>handleClick(e)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full flex justify-between">
            <h1 className="text-marineblue font-normal text-md">
              Email
            </h1>
            <h2 className="text-strawberryred hidden" ref={(el) => { req.current[1] = el; }}>This is required</h2>
          </div>
          <input type="email" id="email" placeholder="e.g. stephenking@lorem.com" 
            className="outline outline-2 outline-lightgray text-marineblue p-2 rounded-lg focus:outline-purplishblue" 
            onChange={(e)=>handleClick(e)}
            onClick={(e)=>handleClick(e)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full flex justify-between">
            <h1 className="text-marineblue font-normal text-md">
              Phone Number
            </h1>
            <h2 className="text-strawberryred hidden" ref={(el) => { req.current[2] = el; }} >This is required</h2>
          </div>
          <input type="tel" id="tel" placeholder="e.g. +1 234 567 890" 
            className="outline outline-2 outline-lightgray text-marineblue p-2 rounded-lg focus:outline-purplishblue" 
            onChange={(e)=>handleClick(e)}
            onClick={(e)=>handleClick(e)}
            required
          />
        </div>
      </div>
      <div className="w-full flex justify-end pt-12">
        <button className="bg-marineblue text-white py-3 px-6 rounded-lg hover:bg-purplishblue hover:shadow-xl transition duration-300 ease-out"
          onClick={()=>handleSubmit()}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Info;
