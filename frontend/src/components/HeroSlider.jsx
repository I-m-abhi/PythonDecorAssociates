import heroimg from "../assets/heroimg.png"

const HeroSlider = () => {
  return (
    <section className="hero-section">
      <img
        className='hero-img'
        src={heroimg}
        alt="Python Decor & Associates website banner showcasing modern interior design services including designing, construction, renovation, and maintenance with visuals of a contemporary living room and modular kitchen."
      />
    </section>
  );
};

export default HeroSlider;
