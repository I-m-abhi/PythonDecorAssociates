import { useRef, useState } from 'react';
import CountUp from 'react-countup';
import SectionHead from './SectionHead';
import { useSwipeable } from 'react-swipeable';
import { infographic, testimonialData } from '../constants';

const Informative = () => {
  const [feedbackIndex, setFeedbackIndex] = useState(1);
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (feedbackIndex === testimonialData.length) {
        setFeedbackIndex(1);
      } else {
        setFeedbackIndex(feedbackIndex + 1)
      }
    },
    onSwipedRight: () => {
      if (feedbackIndex === 1) {
        setFeedbackIndex(testimonialData.length);
      } else {
        setFeedbackIndex(feedbackIndex - 1)
      }
    },
  });

  const countUpRef = useRef();

  return (
    <div className="informative-section grid grid-two-cols">
      <div className="infographic">
        <SectionHead sectionHeading={'Infographic'} />
        <div className="section-content">
          {infographic.map((item, id) =>
            <div key={id} className="content">
              <CountUp
                start={0}
                end={item.num}
                enableScrollSpy={true}
                ref={countUpRef}
              >
                {({ countUpRef }) => <span className='num' ref={countUpRef}>{item.num} </span>}
              </CountUp>
              <h2>{item.content}</h2>
            </div>
          )}
        </div>
      </div>
      <div {...handlers} className="testimonial">
        <SectionHead sectionHeading={'Testimonial'} />
        {testimonialData.map((elem, id) => {
          return (
            feedbackIndex === (id + 1) && (
              <div key={id} className="section-content">
                <div className="client-details">
                  <img src={elem.img} alt="" />
                  <div className="details">
                    <h2>{elem.clientName}</h2>
                    <p>{elem.role}</p>
                  </div>
                </div>
                <div className="client-feedback">
                  <p>{elem.feedback}</p>
                  <div className="counter">{feedbackIndex} / {testimonialData.length}</div>
                </div>
              </div>
            )
          )
        })}
      </div>
    </div>
  )
};

export default Informative;