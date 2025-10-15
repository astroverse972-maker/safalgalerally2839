import React, { useState } from 'react';
import PaintingCard from '../components/PaintingCard';
import { paintings } from '../data/paintings';

const GalleryPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Defines the span classes for a repeating 8-item pattern in the grid
  const gridSpans = [
    'col-span-2 row-span-2', // 1. Large square
    'col-span-1 row-span-1', // 2. Small square
    'col-span-1 row-span-2', // 3. Tall rectangle
    'col-span-1 row-span-1', // 4. Small square
    'col-span-1 row-span-1', // 5. Small square
    'col-span-2 row-span-1', // 6. Wide rectangle
    'col-span-2 row-span-2', // 7. Large square
    'col-span-1 row-span-1', // 8. Small square
  ];

  const filteredPaintings = paintings.filter(painting =>
    painting.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    painting.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">The Collection</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Explore the complete collection of original paintings by Lal Karki.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search artworks by title or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 text-base text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-full shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-shadow"
            aria-label="Search artworks"
          />
        </div>

        {/* Asymmetrical Grid for medium screens and up */}
        {filteredPaintings.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-4 md:gap-6">
            {filteredPaintings.map((painting, index) => (
              <div key={painting.id} className={
                // On mobile, every item is a 1x1 square. On desktop, use the defined pattern.
                `col-span-1 row-span-1 md:${gridSpans[index % gridSpans.length]}`
              }>
                <PaintingCard painting={painting} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-gray-500">No artworks found for "{searchQuery}".</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;