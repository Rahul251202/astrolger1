import React from 'react';

const cards = [
  {
    id: 1,
    title: 'Card One',
    description: 'This is the first card description.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    title: 'Card Two',
    description: 'This is the second card description.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    title: 'Card Three',
    description: 'This is the third card description.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 4,
    title: 'Card Four',
    description: 'This is the fourth card description.',
    image: 'https://via.placeholder.com/300x200',
  },
];

const CardGrid = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-[#f5f5dc] rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{card.title}</h2>
              <p className="mt-2 text-sm text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
