import React from 'react';
import { Link } from 'react-router-dom';
import { Painting } from '../types';

interface PaintingCardProps {
  painting: Painting;
}

const PaintingCard: React.FC<PaintingCardProps> = ({ painting }) => {
  return (
    <Link 
      to={`/painting/${painting.id}`} 
      className="group block relative w-full h-full overflow-hidden rounded-lg shadow-sm"
      aria-label={`View details for ${painting.title}`}
    >
      <img
        src={painting.imageUrl}
        alt={painting.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 ease-in-out">
        <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          <h3 className="text-xl font-semibold tracking-tight">{painting.title}</h3>
          <p className="mt-1 text-base">${painting.price.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default PaintingCard;
