import { useState } from 'react';
import ModularKitchen from '../assets/slider/1.png';
import ModularKitchen1 from '../assets/slider/2.png';
import ModularKitchen2 from '../assets/slider/3.png';
import SocialMedia from './SocialMedia';
const MainSlider = () => {

  const MySlider = [
    {
      name: 'MODISH',
      heading: 'Highest Quality  Kitchen Solutions',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum! hi am abhisjek kumaer and doinf right niw cofumf with hrhe heklp of vs code  extension ',
      imgPath: ModularKitchen,
    },
    {
      name: 'RELIABLE',
      heading: 'Professionals you can rely on',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum! hi am abhisjek kumaer and doinf right niw cofumf with hrhe heklp of vs code  extension ',
      imgPath: ModularKitchen1,
    },
    {
      name: 'VARIETY',
      heading: 'Flooring for Any Interior Site',
      des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum! hi am abhisjek kumaer and doinf right niw cofumf with hrhe heklp of vs code  extension ',
      imgPath: ModularKitchen2,
    },
  ];
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <main>
      <div className="hero-section">
        {MySlider.map((elem, id) =>
          (sliderIndex === id) ?
            <div className="slide" key={id} style={{ backgroundImage: 'url(' + elem.imgPath + ')' }}>
              <div className="content">
                <div className="name">{elem.name}</div>
                <div className="heading">{elem.heading}</div>
                <div className="des">{elem.des}</div>
                <button>Read More</button>
              </div>
            </div>
            :
            ''
        )}
      </div>
      <SocialMedia sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} length={MySlider.length} />
    </main>
  )
};

export default MainSlider;