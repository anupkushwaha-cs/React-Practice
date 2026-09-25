import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">

  
      <div>
        <p className="text-2xl font-bold text-gray-800">
          User
        </p>
      </div>


      <div className="flex items-center gap-8 text-gray-600 font-medium">
        <p className="cursor-pointer hover:text-blue-600 transition">
          Home
        </p>

        <p className="cursor-pointer hover:text-blue-600 transition">
          About
        </p>

        <p className="cursor-pointer hover:text-blue-600 transition">
          Contact
        </p>
      </div>

      <div>
        <button onClick={() =>{ setToggle(oldPage=>!oldPage)}} className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer">
          Create Users
        </button>
      </div>

    </nav>
  )
}

export default Navbar