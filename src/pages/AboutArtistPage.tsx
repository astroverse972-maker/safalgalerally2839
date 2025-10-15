
import React from 'react';

const AboutArtistPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">About Lal Karki</h1>
            <div className="mt-8 text-lg text-gray-600 space-y-6 leading-relaxed">
              <p>
                Lal Karki is a contemporary artist whose work captivates viewers with its vibrant energy and emotional depth. Raised in a bustling city, his early fascination with urban landscapes and human connection became the foundational inspiration for his artistic journey. He pursued a formal education in fine arts, where he honed his skills in expressive, bold techniques while developing his distinct, modern aesthetic.
              </p>
              <p>
                Karki's paintings are characterized by their masterful use of color, texture, and dynamic composition. He often works from life, translating fleeting moments and deeply felt emotions onto the canvas. His process is one of passion and spontaneity, layering thick strokes of paint to build up energy and create a sense of immediacy within the piece. The result is a body of work that feels both timeless and deeply personal, inviting engagement and connection.
              </p>
              <p>
                Through KalaKendra, Lal Karki shares his singular vision directly with collectors around the world. Each painting is an invitation to pause, to feel, and to find the beauty in the vibrant moments that define our lives.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
             <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img 
                    src="https://i.imgur.com/cE6W25y.jpg" 
                    alt="Portrait of artist Lal Karki" 
                    className="w-full h-full object-cover aspect-[5/6]"
                />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArtistPage;