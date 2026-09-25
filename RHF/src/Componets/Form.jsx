import React from "react";
import { FormState, useForm } from "react-hook-form";

const Form = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) =>{
    console.log(data);
    
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Create User</h2>
          <p className="text-sm text-gray-500 mt-1">Enter user details below</p>
        </div>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
          <input
            {...register ("name",{ required: "Name is required",})}
            type="text"
            placeholder="Enter Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />

          <input
            {...register ("email",{ required: "Email is required",})}
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />

          <input
            {...register ("mobile",{ 
              required: "Mobile is required",
              minLength: 10,
              maxLength: 10,

            })}
            type="number"
            placeholder="Enter Mobile"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:scale-[0.98] transition cursor-pointer">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
