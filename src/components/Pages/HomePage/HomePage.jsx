import MainSection from './MainSection/MainSection';
import MainArticle from './MainArticle/MainArticle';
import MainAside from './MainAside/MainAside';
import { CONTENT_TYPE } from '../../../constants';  
import './HomePage.scss';

const HomePage = () => {
    return (
        <main className="home-page">
            <MainSection />
            <MainArticle type={CONTENT_TYPE.TOURS} />  
            <MainAside />
        </main>
    );
};

export default HomePage;