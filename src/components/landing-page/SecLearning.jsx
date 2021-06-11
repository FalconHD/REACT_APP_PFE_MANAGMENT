import sec3 from'../../images/sec3.svg';


const SecLearning = () => {
    return ( 
        <section className="learning">
          <h2 class="section__title learning__title">
          Mieux vaut fait que parfait
          </h2>
          <p>
          N'ayez pas peur de l'opinion des autres et ne prenez rien de personnel. Ils ne vous critiquent pas, mais votre travail.
          </p>
          <img src={sec3} alt="sec3" />
        </section>
     );
}
 
export default SecLearning;