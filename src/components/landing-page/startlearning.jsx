import learning from'../../images/learning.svg';

const StartLearning = () => {
    return ( 
        <section className="start-learning">
        <h2 className="section__title">
          Ready To Start your fucking Project?
        </h2>
        <a href="#" className="button">Get Started</a>
        <div className="video-learning">
          <video muted id="video" className="video" poster="https://res.cloudinary.com/alexandracaulea/image/upload/v1583497256/video-poster_lkwsdg.jpg">
            <source src="https://res.cloudinary.com/alexandracaulea/video/upload/v1583497287/video-learning_vpohou.mp4" type="video/mp4" />
          </video>
          <div className="video-controls">
            <div className="progress">
              <div className="progress-fill"></div>
            </div>
            <button className="video-button toggle" title="Play">►</button>
            <button data-skip="-5" className="video-button" aria-label="Skip backward 5 seconds">« 5s</button>
            <button data-skip="5" className="video-button" aria-label="Skip forward 5 seconds">5s »</button>
          </div>
        </div>
        <img src={learning} alt="learning" className="blob-learning" /> 
      </section>
     );
}
 
export default StartLearning;