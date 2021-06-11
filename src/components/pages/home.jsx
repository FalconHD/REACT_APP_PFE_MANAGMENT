import React from 'react'
import Header from '../landing-page/header';
import SecIntro from '../landing-page/SecIntro';
import SecFeatures from '../landing-page/SecFeatures';
import HowItWork from '../landing-page/HowItWork';
import SecArrow1 from '../landing-page/SecArrow1';
import SecGetFeedback from '../landing-page/SecGetFeedback';
import SecArrow2 from '../landing-page/SecArrow2';
import SecLearning from '../landing-page/SecLearning';
import GetStart from '../landing-page/getStart';
import StartLearning from '../landing-page/startlearning';
import Footer from '../landing-page/footer';
import '../landing-page/landing.css';
const Home = () => {



    return (
        <div>
        <Header/>
        <SecIntro className="intro"/>
        <SecFeatures className="features"/>
        <HowItWork className="grow"/>
        <SecArrow1/>
        <SecGetFeedback className="get-feedback"/>
        <SecArrow2/>
        <SecLearning className="learning"/>
       
       <Footer className="footer"/>  

            
        </div>
    )
}

export default Home
