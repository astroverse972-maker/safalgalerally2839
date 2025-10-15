
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import PaintingCard from '../components/PaintingCard';
import { paintings } from '../data/paintings';

const HomePage: React.FC = () => {
  const featuredPaintings = paintings.slice(0, 3);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-24 md:py-32 lg:py-40 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Art that Speaks.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-gray-600">
            Original works by Lal Karki.
          </p>
          <div className="mt-10">
            <Link to="/gallery">
              <Button>Explore the Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Artworks Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Featured Artworks</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {featuredPaintings.map((painting) => (
              <PaintingCard key={painting.id} painting={painting} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <img src="https://i.imgur.com/cE6W25y.jpg" alt="Artist Lal Karki in his studio" className="rounded-lg shadow-lg"/>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet the Artist</h2>
                <p className="mt-6 text-lg text-gray-600">
                  I work from my studio in Nepal to translate the energy of my homeland onto canvas. Each piece is a dialogue between ancient tradition and modern life. To own one of my paintings is not simply to acquire art, but to welcome a piece of Nepal’s living story—a quiet yet powerful source of connection and beauty—into your home.
                </p>
                 <div className="mt-8">
                    <Link to="/about">
                        <Button variant="secondary">Learn More About Lal</Button>
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;