import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import CourseDetails from './pages/CourseDetails';
import WorkshopDetails from './pages/WorkshopDetails';
import WorkshopEnrolled from './pages/WorkshopEnrolled';
import Pricing from './pages/Pricing';
import Services from './pages/Services';

interface CoursePageState {
  type: 'list' | 'details';
  courseId?: number;
}

interface BlogPageState {
  type: 'list' | 'details';
  postId?: number;
}

interface WorkshopPageState {
  type: 'list' | 'details' | 'enrolled';
  workshopId?: number;
}

function App() {
  const [activePage, setActivePage] = useState('home');
  const [coursePage, setCoursePage] = useState<CoursePageState>({ type: 'list' });
  const [blogPage, setBlogPage] = useState<BlogPageState>({ type: 'list' });
  const [workshopPage, setWorkshopPage] = useState<WorkshopPageState>({ type: 'list' });

  const handlePageChange = (page: string) => {
    setActivePage(page);
    if (page === 'courses') {
      setCoursePage({ type: 'list' });
      setWorkshopPage({ type: 'list' });
    }
    if (page === 'blog') {
      setBlogPage({ type: 'list' });
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={handlePageChange} />;
      case 'courses':
        if (workshopPage.type === 'enrolled') {
          return (
            <WorkshopEnrolled 
              workshopId={workshopPage.workshopId!} 
              setActivePage={() => setWorkshopPage({ type: 'details', workshopId: workshopPage.workshopId })} 
            />
          );
        }
        if (workshopPage.type === 'details') {
          return (
            <WorkshopDetails 
              workshopId={workshopPage.workshopId!} 
              setActivePage={() => setWorkshopPage({ type: 'list' })}
              onEnroll={(id) => setWorkshopPage({ type: 'enrolled', workshopId: id })}
            />
          );
        }
        return coursePage.type === 'list' ? (
          <Courses 
            onViewCourse={(id) => setCoursePage({ type: 'details', courseId: id })}
            onViewWorkshop={(id) => setWorkshopPage({ type: 'details', workshopId: id })}
          />
        ) : (
          <CourseDetails 
            courseId={coursePage.courseId!} 
            setActivePage={() => setCoursePage({ type: 'list' })} 
          />
        );
      case 'pricing':
        return <Pricing />;
      case 'contact':
        return <Contact />;
      case 'services':
        return <Services />;
      case 'blog':
        return blogPage.type === 'list' ? (
          <Blog onViewPost={(id) => setBlogPage({ type: 'details', postId: id })} />
        ) : (
          <BlogDetails
            postId={blogPage.postId!}
            setActivePage={() => setBlogPage({ type: 'list' })}
          />
        );
      
      default:
        return <Home setActivePage={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        activePage={activePage} 
        setActivePage={handlePageChange} 
      />
      {renderPage()}
      <Footer setActivePage={handlePageChange} />
    </div>
  );
}

export default App;