import React from 'react';
import { useCart } from '../context/CartContext';
import Button from './Button';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, cartCount } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Your Cart ({cartCount})</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800" aria-label="Close cart">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {cartCount === 0 ? (
            <div className="flex-grow flex items-center justify-center">
              <p className="text-gray-500">Your cart is empty.</p>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-start space-x-4">
                  <img src={item.imageUrl} alt={item.title} className="w-20 h-24 object-cover rounded-md bg-gray-100" />
                  <div className="flex-grow">
                    <h3 className="font-medium text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">${item.price.toLocaleString()}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 text-sm"
                    aria-label={`Remove ${item.title} from cart`}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          {cartCount > 0 && (
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center mb-4 text-lg">
                <span className="font-medium text-gray-600">Total</span>
                <span className="font-semibold text-gray-900">${total.toLocaleString()}</span>
              </div>
              <Button className="w-full">Checkout</Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartModal;