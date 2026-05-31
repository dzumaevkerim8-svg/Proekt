import { CONTENT_TYPE } from '../../../../constants';
import  './MainArticle.scss';
const MainArticle = ({type}) => { 
    return (
        <main>
      {type === CONTENT_TYPE.TOURS && (
      <span> 
       
      </span>
      )}
      {type === CONTENT_TYPE.ABOUT && (
      <span> 
     
      </span>
      )}
      {type === CONTENT_TYPE.CONTACTS && (
      <span> 
      
      </span>
      )}
        
        </main>
    );
};

export default MainArticle;

