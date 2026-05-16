import { useState } from 'react';
import './TripSection.scss';
import FirstTour from "../../../../assets/tour1.PNG";

const TripSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="trip-section">
            <div className='first-tour'>
                <img
                    src={FirstTour}
                    alt='Ашхабад'
                    className='first-tour__image'
                />
                <h3>Ашхабад</h3>
                <p className="price">от 300$</p>
            </div>
            
            <button 
                type="button" 
                onClick={toggleDetails} 
                className="tour-button"
            >
                {isOpen ? "Закрыть" : "Подробнее"}
            </button>
            
            {isOpen && (
                <div className="tour-details">
                    <h4>Описание тура:</h4>
                    <p>Экскурсия по беломраморному Ашхабаду</p>
                    <p>Длительность: 3 дня / 2 ночи</p>
                    <p>Включено: отель, завтраки, трансфер</p>
                </div>
            )}
        </div>
    );
};

export default TripSection;
