
import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css/bundle';
import './TripSection.scss';

const TripSection = () => {
  return (
    <div className="swiper-slide">
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
  <img src="/tour1.PNG" alt="Ашхабад" />
  <h3>Ашхабад</h3>
  <p>от 300$</p>
  <button> Подробнее</button>
</SwiperSlide>

      <SwiperSlide> <img src="/tour2.jpg" alt="Айваза" />
  <h3>Айваза</h3>
  <p>от 600$</p>
  <button> Подробнее</button> 
  </SwiperSlide>

      <SwiperSlide> <img src="/tour3.PNG" alt="Янги Кала" />
  <h3>Янги Кала</h3>
  <p>от 200$</p>
  <button> Подробнее</button> 
  </SwiperSlide>

      <SwiperSlide> <img src="/tour4.png" alt="Дарваза" />
  <h3>Дарваза</h3>
  <p>от 500$</p>
  <button> Подробнее</button> 
  </SwiperSlide>

<SwiperSlide> <img src="/tour5.jpg" alt="Каракум" />
  <h3>Каракум</h3>
  <p>от 700$</p>
  <button> Подробнее</button> 
  </SwiperSlide>

    </Swiper>

    <h1>  Даты туров </h1>
    </div>
  );
};

export default TripSection;