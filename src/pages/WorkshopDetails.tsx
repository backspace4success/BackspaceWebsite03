import React from 'react';
import { ArrowLeft, Clock, Star, Calendar, Users, BookOpen, Target } from 'lucide-react';
import { workshops } from '../data/workshops';

interface WorkshopDetailsProps {
  workshopId: number;
  setActivePage: () => void;
  onEnroll: (id: number) => void;
}

function WorkshopDetails({ workshopId, setActivePage, onEnroll }: WorkshopDetailsProps) {
  const workshop = workshops[workshopId];

  if (!workshop) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Workshop not found</h1>
          <button
            onClick={setActivePage}
            className="text-primary hover:text-primary/90 flex items-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Workshops
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={setActivePage}
            className="text-white/80 hover:text-white flex items-center mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Workshops
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-accent/20 text-white px-4 py-1 rounded-full text-sm">
                  {workshop.level}
                </span>
                <div className="flex items-center text-white/80">
                  <Star className="h-5 w-5 text-secondary fill-current" />
                  <span className="ml-1">{workshop.rating}</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{workshop.title}</h1>
              <p className="text-xl text-white/80 mb-6">{workshop.description}</p>
              <div className="flex flex-wrap gap-4 text-white/80">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {workshop.duration}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {new Date(workshop.nextDate).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0  rounded-lg blur-lg"></div>
              <img
                src={workshop.image}
                alt={workshop.title}
                className="relative rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Workshop Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Topics */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                <BookOpen className="h-6 w-6 mr-2 text-primary" />
                Workshop Topics
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {workshop.topics.map((topic, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-black">{topic}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Learning Outcomes */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                <Target className="h-6 w-6 mr-2 text-primary" />
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workshop.outcomes.map((outcome, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-black/70">{outcome}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <div className="space-y-6">
                {/* Instructor */}
                <div>
                  <h3 className="font-semibold text-black mb-4">Instructor</h3>
                  <div className="flex items-center">
                    <img 
                      src={workshop.instructor.avatar} 
                      alt={workshop.instructor.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-medium text-black">{workshop.instructor.name}</p>
                      <p className="text-sm text-black/60">{workshop.instructor.role}</p>
                    </div>
                  </div>
                </div>

                {/* Workshop Details */}
                <div>
                  <h3 className="font-semibold text-black mb-4">Workshop Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-black/70">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      {workshop.duration}
                    </div>
                    <div className="flex items-center text-black/70">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      {new Date(workshop.nextDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-black/70">
                      <Users className="h-5 w-5 mr-2 text-primary" />
                      Limited seats available
                    </div>
                  </div>
                </div>

                {/* Price and Enrollment */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="mb-4">
                    <p className="text-sm text-black/70">Workshop Fee</p>
                    <p className="text-3xl font-bold text-black">
                      {workshop.price === 0 ? 'Free' : `$${workshop.price}`}
                    </p>
                  </div>
                  <button 
                    onClick={() => onEnroll(workshopId)}
                    className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkshopDetails;