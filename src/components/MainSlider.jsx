import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import SocialMedia from './SocialMedia';
import { mainSlider } from '../constants';

const MainSlider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (sliderIndex === mainSlider.length - 1) {
        setSliderIndex(0);
      } else {
        setSliderIndex(sliderIndex + 1);
      }
    }, 50000)

    return () => {
      clearInterval(timer)
    }
  }, [sliderIndex]);

  const preMainSlider = () => {
    if (sliderIndex === 0) {
      setSliderIndex(mainSlider.length - 1);
    } else {
      setSliderIndex(sliderIndex - 1);
    }
  };
  const nextMainSlider = () => {
    if (sliderIndex === mainSlider.length - 1) {
      setSliderIndex(0);
    } else {
      setSliderIndex(sliderIndex + 1);
    }
  };

  return (
    <main>
      <div className="hero-section">
        {mainSlider.map((elem, id) =>
          (sliderIndex === id) ?
            <div className="slide" key={id} style={{ backgroundImage: 'url(' + elem.imgPath + ')' }}>
              <div className="content">
                <div className="name">{elem.name}</div>
                <div className="heading">{elem.heading}</div>
                <div className="des">{elem.des}</div>
                <button><Link to="/projects">Read More</Link></button>
              </div>
            </div>
            :
            ''
        )}
      </div>
      <div className='container'>
        <SocialMedia />
        <div className='slider-btn'>
          <button onClick={preMainSlider}>Pre.</button>
          <button onClick={nextMainSlider}>Next</button>
        </div>
      </div>
    </main>
  )
};

export default MainSlider;