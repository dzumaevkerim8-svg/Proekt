import  './Footer.scss';
const Footer = () => { 
    const currentDate = new Date ();
   const formatedDate = currentDate.toLocaleDateString('ru-RU', {
year: 'numeric',
month: 'long',
day: 'numeric', 
   })

   console.log(formatedDate)
    return (
        <footer className='footer'> 
            
            <p className='footer__info_date'>
                Дата создания: {formatedDate}
            </p>
             <p className='footer__info'>
                Авторы: Джумаев Керим <br /> Долыев Алым 
             </p>
             </footer>
       
    );
};

export default Footer;