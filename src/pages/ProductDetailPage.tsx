import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { paintings } from '../data/paintings';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const painting = paintings.find((p) => p.id === id);
  const { addToCart, cart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const isInCart = cart.some(item => item.id === painting?.id);

  const handleAddToCart = () => {
    if (painting && !isInCart) {
      addToCart(painting);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000); // Reset after 2 seconds
    }
  };

  if (!painting) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Painting not found</h1>
        <Link to="/gallery" className="text-blue-600 hover:underline mt-4 inline-block">
          Back to Gallery
        </Link>
      </div>
    );
  }

  const buttonText = isInCart ? 'In Cart' : isAdded ? 'Added!' : 'Add to Cart';

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="bg-gray-50 rounded-lg overflow-hidden sticky top-24">
            <img
              src={painting.imageUrl}
              alt={painting.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">{painting.title}</h1>
            
            <div className="mt-6 border-y border-gray-200 divide-y divide-gray-200">
                <div className="py-4 flex justify-between items-center">
                    <span className="text-base text-gray-500">Dimensions</span>
                    <span className="text-base font-medium text-gray-900">{painting.dimensions.width}" x {painting.dimensions.height}"</span>
                </div>
                 <div className="py-4 flex justify-between items-center">
                    <span className="text-base text-gray-500">Medium</span>
                    <span className="text-base font-medium text-gray-900">{painting.medium}</span>
                </div>
                 <div className="py-4 flex justify-between items-center">
                    <span className="text-base text-gray-500">Price</span>
                    <span className="text-lg font-semibold text-gray-900">${painting.price.toLocaleString()}</span>
                </div>
            </div>

            <div className="mt-8">
              <Button onClick={handleAddToCart} disabled={isInCart || isAdded}>
                {buttonText}
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;