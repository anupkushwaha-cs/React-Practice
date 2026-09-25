import React from 'react'

const Card = () => {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">


      <div className="w-full h-64">
        <img
          src="https://images.unsplash.com/photo-1790137650907-92a58d05bfae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="p-5 space-y-3">

        <p className="text-lg font-semibold text-gray-800">
          Name
        </p>

        <p className="text-gray-600">
          Email
        </p>

        <p className="text-gray-600">
          Mobile
        </p>

      </div>

    </div>
  )
}

export default Card