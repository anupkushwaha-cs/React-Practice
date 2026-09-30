import React from "react";

const Navbar = ({setIsCartOpen}) => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
     
        <div className="text-2xl font-bold text-blue-600">User</div>

     
        <div className="flex items-center gap-8">
          <p onClick ={() =>{
            setIsCartOpen(true)
          }} className="text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition">
            Home
          </p>

          <p onClick ={()=>{
            setIsCartOpen(false)
          }} className="text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition">
            Cart
          </p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
