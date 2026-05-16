import './MainSection.scss';
import MainPhoto from "../../../../assets/mainphoto.jpg";

const MainSection = () => { 
    
   function OpenForm() {  
        location.href = 'https://docs.google.com/forms/d/1s1_Tc5nDH8TFUPgB4kzzjX-RDmLDLGrWDb2i4i9yHz0/edit';
    
   
   
        
    };
    
    return (
        <div className='main-section'> 
            <img 
                src={MainPhoto}
                alt='Ашхабад'
                className='main-section__image'
            />
            <form className="form"> 
                <input 
                    type="button"
                    value="Забронировать тур"
                    className="form-button"
                    onClick={OpenForm}

                    
                />
            </form>
        </div>
    );
};

export default MainSection;