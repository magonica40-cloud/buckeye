import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ConsultationModal } from './components/ConsultationModal';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ClientsPage } from './pages/ClientsPage';
import { WorkshopsPage } from './pages/WorkshopsPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<string>('Advertising & Marketing');
  const [modalWorkshop, setModalWorkshop] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (category?: string, workshopTitle?: string) => {
    if (category) setModalCategory(category);
    if (workshopTitle) setModalWorkshop(workshopTitle);
    else setModalWorkshop(undefined);
    setIsModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FBF9F6] text-[#1B1C1A]">
        {/* Top Header */}
        <Header onOpenConsultation={handleOpenConsultation} />

        {/* Page Content Routes */}
        <main className="flex-1 w-full">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage onOpenConsultation={handleOpenConsultation} />} 
            />
            <Route 
              path="/about" 
              element={<AboutPage onOpenConsultation={handleOpenConsultation} />} 
            />
            <Route 
              path="/services" 
              element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} 
            />
            <Route 
              path="/clients" 
              element={<ClientsPage onOpenConsultation={handleOpenConsultation} />} 
            />
            <Route 
              path="/workshops" 
              element={<WorkshopsPage onOpenConsultation={handleOpenConsultation} />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            {/* Fallback redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenConsultation={handleOpenConsultation} />

        {/* Mobile Sticky Bottom Navigation (as in Stitch prototype) */}
        <MobileBottomNav />

        {/* Interactive Strategic Consultation / Enquiry Modal */}
        <ConsultationModal
          isOpen={isModalOpen}
          onClose={handleCloseConsultation}
          initialCategory={modalCategory}
          initialWorkshop={modalWorkshop}
        />
      </div>
    </Router>
  );
};

export default App;
