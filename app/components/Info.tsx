'use client'
import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const handleClick = ((e:any)=>{
    const target = e.currentTarget;
    const value = target.value;
    const inputId = target.id;

    value==""?target.classList.add("outline-strawberryred"):target.classList.remove("outline-strawberryred");
  
    switch(inputId){
      case "name":
        setName(value);
      case "email":
        setEmail(value);
      case "tel":
        setTel(value);
    }
  })
  return (
    <div className="py-12 pr-16 space-y-8">
      <div>
        <h1 className="text-3xl text-marineblue font-bold">Personal Info</h1>
        <h2 className="text-coolgray">Please provide your name, email address, and phone number.</h2>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-marineblue font-normal text-md">
            Name
          </h1>
          <input type="text" id="name" placeholder="e.g. Stephen King" 
            className="outline outline-2 outline-lightgray text-marineblue p-2 rounded-lg focus:outline-purplishblue" 
            onChange={(e)=>handleClick(e)}
            onClick={(e)=>handleClick(e)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-marineblue font-normal text-md">
            Email
          </h1>
          <input type="email" id="email" placeholder="e.g. stephenking@lorem.com" 
            className="outline outline-2 outline-lightgray text-marineblue p-2 rounded-lg focus:outline-purplishblue" 
            onChange={(e)=>handleClick(e)}
            onClick={(e)=>handleClick(e)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-marineblue font-normal text-md">
            Phone Number
          </h1>
          <input type="tel" id="tel" placeholder="e.g. +1 234 567 890" 
            className="outline outline-2 outline-lightgray text-marineblue p-2 rounded-lg focus:outline-purplishblue" 
            onChange={(e)=>handleClick(e)}
            onClick={(e)=>handleClick(e)}
            required
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button className="bg-marineblue text-white py-3 px-6 rounded-lg hover:shadow-xl">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Info;
