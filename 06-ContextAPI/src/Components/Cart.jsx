import React from 'react'

const Cart = ({ cartItems }) => {

return ( <div className="min-h-screen bg-gray-100 p-6">


  <div className="max-w-6xl mx-auto">

    <h1 className="text-3xl font-bold text-gray-800 mb-8">
      Your Cart
    </h1>

    {cartItems.length === 0 ? (
      <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
        <div className="text-6xl mb-4">
          🛒
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">
          Your cart is empty
        </h2>

        <p className="text-gray-500 mt-2">
          Add some products to see them here.
        </p>
      </div>
    ) : (

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-4">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm p-5 flex gap-5 items-center"
            >

              <div className="w-28 h-28 bg-gray-50 rounded-xl flex items-center justify-center p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1">

                <h2 className="font-semibold text-gray-800 text-lg line-clamp-2">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1 capitalize">
                  {item.category}
                </p>

                <p className="text-xl font-bold text-blue-600 mt-3">
                  ${item.price}
                </p>

              </div>

              <button className="text-red-500 hover:text-red-700 font-medium">
                Remove
              </button>

            </div>

          ))}

        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 h-fit">

          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between text-gray-600 mb-3">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="border-t pt-4 flex justify-between text-xl font-bold text-gray-900">
            <span>Total</span>

            <span>
              ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </span>
          </div>

          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            Checkout
          </button>

        </div>

      </div>

    )}

  </div>

</div>

)
}

export default Cart
