import { CONTENT_TYPE } from '../../../../constants';
import './TripArticle.scss';

const TripArticle = ({ type }) => {
    return (
        <article>
            {type === CONTENT_TYPE.TOURS && <span>Туры</span>}
            {type === CONTENT_TYPE.ABOUT && <span>О нас</span>}
            {type === CONTENT_TYPE.CONTACTS && <span>Контакты</span>}
        </article>
    );
};
export default TripArticle;