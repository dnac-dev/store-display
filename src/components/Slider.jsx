/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

import './Slider.css';

const Slider = ({ contentSrc }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const max = contentSrc.files.length;
    let current = currentSlide;

    function nextSlide() {
      current = current === max - 1 ? 0 : current + 1;

      const slides = document.querySelectorAll('.slide');

      if (slides[current].tagName === 'VIDEO') {
        slides[current].play();
        setTimeout(nextSlide, slides[current].duration * 1000);
      } else {
        setTimeout(nextSlide, 1000);
      }
      setCurrentSlide(current);
    }

    setTimeout(nextSlide, 1000);
  }, []);

  function isImageUrl(url) {
    const imageTypes = ['.gif', '.jpg', '.png'];
    return url && imageTypes.some((el) => url.includes(el));
  }

  const content = contentSrc.files.map((el, i) => {
    const showing = currentSlide === i ? 'slide showing' : 'slide';

    const element = isImageUrl(el) ? (
      <img key={el} src={contentSrc.src + el} alt="" className={showing} />
    ) : (
      <video key={el} src={contentSrc.src + el} className={showing} muted />
    );

    return element;
  });

  return <div className="slider">{content}</div>;
};

export default Slider;
