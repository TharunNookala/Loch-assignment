import React, { useState, useRef } from 'react';
import Testimonials from '../Testimonials/Testimonials';

const TestimonialData = [
  {
    name: "Jack F",
    designation: "Ex Blackrock PM",
    description: "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
  },
  {
    name: "Yash P",
    designation: "Research, 3poch Crypto Hedge Fund",
    description: "I use Loch every day now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",
  },
  {
    name: "Shiv S",
    designation: "Co-Founder Magik Labs",
    description: "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.",
  },
  {
    name: "Sahay",
    designation: "Co-Founder Magik Labs",
    description: "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.",
  },
];

const TestimonialList = () => {
  const testimonialListRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - testimonialListRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - startX;
    testimonialListRef.current.scrollLeft = x;
  };

  return (
    <div
      ref={testimonialListRef}
      className={`w-full flex items-center justify-start no-scrollbar gap-4 overflow-x-scroll pt-6  ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      {TestimonialData.map(({ name, description, designation }) => {
        return (
          <Testimonials name={name} description={description} designation={designation} key={name} />
        );
      })}
    </div>
  );
};

export default TestimonialList;
