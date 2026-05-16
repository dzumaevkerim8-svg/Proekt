import TripSection from './TripSection/TripSection';
import './TripPage.scss';

const TripPage = () => {
    return (
        <main className="trip-page">
            <h1>Наши туры</h1>
            <TripSection />
        </main>
    );
};
export default TripPage;