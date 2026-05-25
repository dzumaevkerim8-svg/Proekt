import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';  
import 'swiper/css';                    
import 'swiper/css/navigation';               
import './TripSection.scss';
import TourDetailes from '../TourDetailes/TourDetailes';

const TripSection = () => {
  const [openTourId, setOpenTourId] = useState(null);
  const [selectedTour, setSelectedTour] = useState(null);
  const tours = [
    {
      id: 1,
      name: 'Ашхабад',
      price: 'от 300$',
      image: '/tour1.PNG',
      duration: '3 дня / 2 ночи',
      includes: 'Отель, завтрак, трансфер, гид',
      description: 'Экскурсия по беломраморной столице.'
    },
    {
      id: 2,
      name: 'Дарваза',
      price: 'от 600$',
      image: '/tour2.jpg',
      duration: '2 дня / 1 ночь',
      includes: 'Трансфер, палатки, ужин, гид',
      description: 'Ночная экскурсия к газовому кратеру.'
    },
    {
      id: 3,
      name: 'Янги Кала',
      price: 'от 200$',
      image: '/tour3.PNG',
      duration: '1 день',
      includes: 'Трансфер, обед, гид',
      description: 'Посещение древней крепости.'
    },
    {
      id: 4,
      name: 'Мерв',
      price: 'от 500$',
      image: '/tour4.png',
      duration: '2 дня',
      includes: 'Отель, завтрак, трансфер, гид',
      description: 'Древний город — объект ЮНЕСКО.'
    },
    {
      id: 5,
      name: 'Каракум',
      price: 'от 700$',
      image: '/tour5.jpg',
      duration: '5 дней',
      includes: 'Палатки, питание, верблюды',
      description: 'Путешествие по пустыне.'
    }
  ];

   const toggleDetailes = (tour) => {
    if (openTourId === tour.id) {
      setOpenTourId(null);
      setSelectedTour(null);
    } else {
      setOpenTourId(tour.id);
      setSelectedTour(tour);
    }
  };
  return (
    <div className="section">     
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
      >
        {tours.map((tour) => (
          <SwiperSlide key={tour.id}>
            <img src={tour.image} alt={tour.name} />
            <h3>{tour.name}</h3>
            <p>{tour.price}</p>
            <button onClick={() => toggleDetailes(tour)}>
              {openTourId === tour.id ? "Скрыть" : "Детали тура"}
            </button>
            {openTourId === tour.id && (
              <TourDetailes tour={selectedTour} onClose={() => toggleDetailes(selectedTour)} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TripSection;