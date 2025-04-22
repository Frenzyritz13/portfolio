import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Map as MapIcon } from 'lucide-react';
import MapBackground from '../components/traveller/MapBackground';
import TravelCard from '../components/traveller/TravelCard';
import DateRangePicker from '../components/traveller/DateRangePicker';

// This would typically come from Google Sheets
const travels = [
  {
    id: 1,
    title: 'Exploring Ancient Temples',
    location: 'Kyoto, Japan',
    coordinates: [135.7681, 35.0116],
    date: 'April 12-25, 2023',
    description: 'A journey through the ancient temples and shrines of Kyoto, experiencing traditional Japanese culture and cuisine.',
    imageUrl: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg',
  },
  {
    id: 2,
    title: 'Northern Lights Adventure',
    location: 'Tromsø, Norway',
    coordinates: [18.9553, 69.6492],
    date: 'January 5-15, 2023',
    description: 'Chasing the aurora borealis in the Arctic Circle, dog sledding, and exploring the stunning winter landscape.',
    imageUrl: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg',
  },
  {
    id: 3,
    title: 'Island Hopping',
    location: 'Santorini, Greece',
    coordinates: [25.4615, 36.3932],
    date: 'June 8-22, 2022',
    description: 'Exploring the white-washed buildings and blue domes of Santorini, enjoying Mediterranean cuisine, and swimming in crystal-clear waters.',
    imageUrl: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
  },
  {
    id: 4,
    title: 'Desert Safari',
    location: 'Marrakech, Morocco',
    coordinates: [-7.9811, 31.6295],
    date: 'October 10-20, 2022',
    description: 'Venturing into the Sahara Desert, exploring ancient medinas, and experiencing Moroccan hospitality.',
    imageUrl: 'https://images.pexels.com/photos/2767512/pexels-photo-2767512.jpeg',
  },
  {
    id: 5,
    title: 'Rainforest Expedition',
    location: 'Costa Rica',
    coordinates: [-84.0907, 9.7489],
    date: 'February 15-28, 2022',
    description: 'Hiking through lush rainforests, spotting exotic wildlife, and relaxing on pristine beaches.',
    imageUrl: 'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg',
  },
];

const TravellerPage: React.FC = () => {
  const [activeTravel, setActiveTravel] = useState<number | null>(null);
  const [filteredTravels, setFilteredTravels] = useState(travels);

  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    if (!startDate && !endDate) {
      setFilteredTravels(travels);
      return;
    }
    
    // This is a simplified filter that would be replaced with actual date filtering
    // when integrated with real data
    setFilteredTravels(travels.filter((_, index) => index < 3));
  };

  return (
    <>
      <MapBackground activeTravelId={activeTravel} travels={travels} />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 bg-mustard-100 dark:bg-mustard-700 rounded-full mb-4">
            <MapIcon size={24} className="text-mustard-600 dark:text-beige-100" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-800 dark:text-beige-100">The Traveller</h1>
          <p className="mt-4 text-xl text-navy-600 dark:text-beige-200 max-w-2xl mx-auto">
            Adventures and explorations around the world
          </p>
        </motion.div>
        
        <div className="max-w-md mx-auto mb-8">
          <DateRangePicker onDateChange={handleDateChange} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTravels.map((travel, index) => (
            <motion.div
              key={travel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <TravelCard
                {...travel}
                isActive={activeTravel === travel.id}
                onClick={() => setActiveTravel(travel.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TravellerPage;