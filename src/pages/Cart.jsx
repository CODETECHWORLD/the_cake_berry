// src/components/Cart.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Cart = ({ cartItems, onRemove, onIncrease, onDecrease }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <AnimatePresence>
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between p-3 mb-3 bg-gray-100 rounded-lg shadow-sm"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  ₹{item.price} × {item.quantity} = ₹
                  {item.price * item.quantity}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onDecrease(item.id)}
                  className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => onIncrease(item.id)}
                  className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  +
                </button>

                <button
                  onClick={() => onRemove(item.id)}
                  className="ml-3 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  ❌
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      )}

      {cartItems.length > 0 && (
        <div className="mt-5 text-right font-bold text-xl">
          Total: ₹{totalPrice}
        </div>
      )}
    </div>
  );
};

export default Cart;
