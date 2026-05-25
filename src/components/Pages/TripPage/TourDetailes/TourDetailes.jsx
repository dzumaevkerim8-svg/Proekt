import './TourDetailes.scss';

const TourDetailes = ({ tour, onClose }) => {
  if (!tour) return null;

  return (
    <div className="tour-details">
      <h4> Длительность: {tour.duration}</h4>
      <p> Включено: {tour.includes}</p>
      <p> {tour.description}</p>
      
    </div>
  );
};

export default TourDetailes;