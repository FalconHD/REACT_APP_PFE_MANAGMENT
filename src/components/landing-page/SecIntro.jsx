import img from "../../images/img-removebg.png"
const SecIntro = () => {
    return ( 
        <section class="intro">
        <h1 class="intro__title">
        Démarrez votre projet        </h1>
        <p class="intro__subtitle">
        Allez au-delà du courrier électronique. Ayez des interactions engageantes avec vos élèves en utilisant la vidéo, la messagerie et les notifications push.        </p>
        <a href="#" class="buttonn">Commencer</a>
        <img class="intro__illustration" src={img} alt="" />
      </section>

     );
}
 
export default SecIntro;