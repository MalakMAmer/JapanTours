import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import scroll1 from '../assets/scrolls/scroll1.jpg';
import scroll2 from '../assets/scrolls/scroll2.jpg';
import scroll3 from '../assets/scrolls/scroll3.jpg';
import scroll4 from '../assets/scrolls/scroll4.jpg';

function ImagesBar() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const images = [
    { src: scroll1, aos: "fade-right" },
    { src: scroll2, aos: "fade-left" },
    { src: scroll3, aos: "fade-right" },
    { src: scroll4, aos: "fade-left" },
  ];

  return (
    <div className="relative flex flex-col items-center py-10 w-full md:w-2/3 lg:w-1/2">
      {/* Vertical Line */}
      <div className="absolute w-1 bg-white/50 h-10/12 left-1/2 transform -translate-x-1/2"></div>

      {images.map((item, index) => (
        <div
          key={index}
          className={`relative flex items-center mb-5 w-8/12`}
          data-aos={item.aos}
        >
          {index % 2 === 0 ? (
            <>
              {/* Image on left */}
              <div className="w-35 md:w-40 lg:w-50 ml-auto pr-10">
                <img
                  src={item.src}
                  alt={`timeline-${index}`}
                  className="w-full h-40 rounded-xl object-cover shadow-lg"
                />
              </div>
              {/* Bullet */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-gray-100"></div>
              <div className="flex-1"></div>
            </>
          ) : (
            <>
              <div className="flex-1"></div>
              {/* Bullet */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-gray-100"></div>
              {/* Image on right */}
              <div className="w-35 md:w-40 lg:w-50 mr-auto pl-10">
                <img
                  src={item.src}
                  alt={`timeline-${index}`}
                  className="w-full h-40 rounded-xl object-cover shadow-lg"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ImagesBar;
