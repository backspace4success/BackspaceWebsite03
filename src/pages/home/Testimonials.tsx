import React from 'react';
import TestimonialsSlider from '../../components/TestimonialsSlider';
import { testimonialsImages } from '../../data/testimonials';

function Testimonials() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Student Success Stories</h2>
          <p className="text-xl text-black/70">See the journeys of our successful graduates</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <TestimonialsSlider images={testimonialsImages} />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
