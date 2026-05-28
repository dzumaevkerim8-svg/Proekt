import './ContactPage.scss';

const ContactPage = () => {
    return (
        <main className="contact-page">
            <h1>Контакты</h1>
            
            <div className="contact-wrapper">
              
                <div className="side-image left">
                    <img src="/picture.png" alt="Туркменистан" />
                </div>

                
                <div className="contact-center">
                    <div className="contact-info">
                        <div className="contact-item">
                            <span className="icon">📞</span>
                            <div>
                                <h3>Телефон</h3>
                                <p>+993 12 34 56 78</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="icon">✉️</span>
                            <div>
                                <h3>Email</h3>
                                <p>info@turkmenistan.travel</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="icon">📍</span>
                            <div>
                                <h3>Адрес</h3>
                                <p>г. Ашхабад, ул. Махтумкули, 15</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="icon">🕒</span>
                            <div>
                                <h3>Режим работы</h3>
                                <p>Пн-Пт: 09:00 - 18:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="side-image right">
                    <img src="/Turkmenistan.PNG" alt="Карта Туркменистана" />
                </div>
            </div>
        </main>
    );
};

export default ContactPage;