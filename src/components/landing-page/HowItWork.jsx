import create1 from '../../images/create1.svg';
import create2 from '../../images/create2.svg';


const HowItWork = () => {
    return ( 
        <section id="how-it-works" class="grow">
        <h2 className="section__title grow__title">Se faire une idée</h2>
        <p>
        Choisissez votre travail d'équipe et obtenez un nom pour votre projet        </p>
        <img src={create1} alt="wewe1" />
        <img src={create2} alt="wewe2" className="blob"/>
       
      </section>
     );
}


 
export default HowItWork;