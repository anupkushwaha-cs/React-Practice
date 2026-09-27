import React from 'react'

const Card = ({user}) => {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">


      <div className="w-full h-64">
        <img
          src={user.img}
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="p-5 space-y-3">

        <p className="text-lg font-semibold text-gray-800">
          {user.name}
        </p>

        <p className="text-gray-600">
          {user.email}
        </p>

        <p className="text-gray-600">
          {user.mobile}
        </p>

      </div>

    </div>
  )
}

export default Card