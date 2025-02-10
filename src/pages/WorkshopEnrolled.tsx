import React, { useState } from 'react';
import { ArrowLeft, Play, Target, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { workshops } from '../data/workshops';

interface WorkshopEnrolledProps {
  workshopId: number;
  setActivePage: () => void;
}

function WorkshopEnrolled({ workshopId, setActivePage }: WorkshopEnrolledProps) {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [completedVideos, setCompletedVideos] = useState<number[]>([]);
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

  const markAsCompleted = (index: number) => {
    if (!completedVideos.includes(index)) {
      setCompletedVideos([...completedVideos, index]);
    }
  };

  const progress = (completedVideos.length / workshop.videos.length) * 100;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={setActivePage}
            className="text-white/80 hover:text-white flex items-center mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Workshop Details
          </button>
          <h1 className="text-2xl font-bold text-white mb-2">{workshop.title}</h1>
          <div className="flex items-center text-white/80">
            <Clock className="h-4 w-4 mr-1" />
            {workshop.duration}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              {/* Progress */}
              <div className="mb-6">
                <h3 className="font-semibold text-black mb-2">Your Progress</h3>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                  <div
                    className="bg-accent h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-black/70">
                  {completedVideos.length} of {workshop.videos.length} lessons completed
                </p>
              </div>

              {/* Video List */}
              <div className="space-y-2">
                <h3 className="font-semibold text-black mb-4">Course Content</h3>
                {workshop.videos.map((video, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVideo(index)}
                    className={`w-full text-left p-3 rounded-lg transition ${
                      selectedVideo === index
                        ? 'bg-primary/10 text-primary'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      {completedVideos.includes(index) ? (
                        <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                      ) : (
                        <Play className="h-5 w-5 mr-2 flex-shrink-0" />
                      )}
                      <div>
                        <p className="font-medium">Day {video.day}</p>
                        <p className="text-sm text-black/60">{video.duration}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Video Player */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="aspect-video">
                <iframe
                  src={workshop.videos[selectedVideo].url}
                  title={workshop.videos[selectedVideo].title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-black mb-2">
                  {workshop.videos[selectedVideo].title}
                </h2>
                <p className="text-black/70 mb-4">{workshop.videos[selectedVideo].description}</p>
                <button
                  onClick={() => markAsCompleted(selectedVideo)}
                  className={`flex items-center px-4 py-2 rounded-lg transition ${
                    completedVideos.includes(selectedVideo)
                      ? 'bg-accent/20 text-accent'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  {completedVideos.includes(selectedVideo) ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Completed
                    </>
                  ) : (
                    'Mark as Completed'
                  )}
                </button>
              </div>
            </div>

            {/* Certificate Test Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-black flex items-center">
                  <Target className="h-6 w-6 mr-2 text-primary" />
                  Workshop Certificate
                </h2>
                <a
                  href={workshop.certificateTest.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-4 py-2 rounded-lg transition ${
                    progress === 100
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  onClick={(e) => {
                    if (progress < 100) {
                      e.preventDefault();
                      alert('Please complete all lessons before taking the certificate test.');
                    }
                  }}
                >
                  Take Certificate Test
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <p className="text-black/70 mb-4">{workshop.certificateTest.description}</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between text-sm text-black/70">
                  <span>Course Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div
                    className="bg-accent h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-black/70 mt-2">
                  Required passing score: {workshop.certificateTest.passingScore}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkshopEnrolled;