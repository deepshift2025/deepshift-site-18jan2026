
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import AssistantWidget from './components/AssistantWidget.tsx';
import WhatsappButton from './components/WhatsappButton.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';
import Services from './pages/Services.tsx';
import About from './pages/About.tsx';
import Solutions from './pages/Solutions.tsx';
import NewsEvents from './pages/NewsEvents.tsx';
import NewsDetail from './pages/NewsDetail.tsx';
import AdminDashboard from './pages/AdminDashboard.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfService from './pages/TermsOfService.tsx';
import Jobs from './pages/Jobs.tsx';
import JobDetail from './pages/JobDetail.tsx';
import Internships from './pages/Internships.tsx';
import ApplyInternship from './pages/ApplyInternship.tsx';
import ApplyJob from './pages/ApplyJob.tsx';
import Training from './pages/Training.tsx';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/news-events/:id" element={<NewsDetail />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/careers/jobs" element={<Jobs />} />
            <Route path="/careers/jobs/:id" element={<JobDetail />} />
            <Route path="/careers/jobs/apply" element={<ApplyJob />} />
            <Route path="/careers/internships" element={<Internships />} />
            <Route path="/careers/internships/apply" element={<ApplyInternship />} />
            <Route path="/careers/training" element={<Training />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsappButton />
        <AssistantWidget />
      </div>
    </Router>
  );
};

export default App;
