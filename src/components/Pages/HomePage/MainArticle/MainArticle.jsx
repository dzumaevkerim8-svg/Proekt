import { CONTENT_TYPE } from '../../../../constants';
import  './MainArticle.scss';
const MainArticle = ({type}) => { 
    return (
        <main>
      {type === CONTENT_TYPE.TOURS && (
      <span> 
        TOURS 
      </span>
      )}
      {type === CONTENT_TYPE.ABOUT && (
      <span> 
       ABOUT
      </span>
      )}
      {type === CONTENT_TYPE.CONTACTS && (
      <span> 
        CONTACTS
      </span>
      )}
        
        </main>
    );
};

export default MainArticle;

