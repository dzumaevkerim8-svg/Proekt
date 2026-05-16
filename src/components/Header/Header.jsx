import './Header.scss';
import HeaderLink from './HeaderLink';
import { NAVIGATION_LIST } from '../../constants';

const Header = () => {
    return (
        <header className="header">
            
            <img src="/logo.png" alt="Логотип" className="header__logo" />
            
            
            <h1 className="header__title">
                Откройте для себя жемчужину <br />
                Центральной Азии
            </h1>
            
           
            <h3 className="header__secondText">
                Исследуйте древние города Туркменистана, 
                потрясающие пустыни и богатое культурное наследие
            </h3>
            
           
            <nav className="header__nav">
                <ul className="header__nav-list">
                    {NAVIGATION_LIST.map((link) => (
                        <li key={link.to} className="header__nav-link">
                            <HeaderLink link={link} />
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;