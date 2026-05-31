import './AboutPage.scss';

import icon1 from '../../../assets/icons/1.png';
import icon2 from '../../../assets/icons/2.png';
import icon3 from '../../../assets/icons/3.png';
import icon4 from '../../../assets/icons/4.png';
import icon5 from '../../../assets/icons/5.png';

const AboutPage = () => {
    return (
        <main className="about-page">
            <h1 className="about-title">Кто мы</h1>
            <p className="about-text">
                Мы — команда профессиональных гидов и организаторов туров,
                наша любовь к родной земле и желание показать миру её красоту вдохновили нас создать этот проект.
            </p>
            <p className="about-text">
                Наша цель — не просто провести экскурсию, 
                а подарить вам настоящие эмоции, познакомить с уникальной культурой, историей
                и гостеприимством туркменского народа.
            </p>

            <h2 className="advantages-title">Почему выбирают нас</h2>
            
            <div className="advantage-item">
                <img src={icon1} alt="Знание страны" className="advantage-icon" />
                <div>
                    <h3>Глубокое знание страны</h3>
                    <p>Мы знаем каждый уголок Туркменистана — от беломраморных улиц Ашхабада до древних городов Шёлкового пути и таинственных пустынь Каракумы.</p>
                </div>
            </div>

            <div className="advantage-item">
                <img src={icon2} alt="Местные гиды" className="advantage-icon" />
                <div>
                    <h3>Местные гиды</h3>
                    <p>С нами вы увидите страну глазами местных жителей. Наши гиды говорят на русском, английском и туркменском языках.</p>
                </div>
            </div>

            <div className="advantage-item">
                <img src={icon3} alt="Индивидуальный подход" className="advantage-icon" />
                <div>
                    <h3>Индивидуальный подход</h3>
                    <p>Каждый тур мы адаптируем под ваши пожелания — хочешь больше истории? Больше природы? Больше фотографий? Мы всё устроим.</p>
                </div>
            </div>

            <div className="advantage-item">
                <img src={icon4} alt="Безопасность и комфорт" className="advantage-icon" />
                <div>
                    <h3>Безопасность и комфорт</h3>
                    <p>Мы отвечаем за качество каждого тура — от трансфера до выбора проверенных отелей и безопасных маршрутов.</p>
                </div>
            </div>

            <div className="advantage-item">
                <img src={icon5} alt="Честные цены" className="advantage-icon" />
                <div>
                    <h3>Честные цены</h3>
                    <p>Никаких скрытых платежей и наценок. Вы платите ровно за то, что получаете.</p>
                </div>
            </div>
        </main>
    );
};

export default AboutPage;