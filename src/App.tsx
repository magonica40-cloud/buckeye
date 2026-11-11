import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ConsultationModal } from './components/ConsultationModal';
import { ScrollToTop } from './components/ScrollToTop';
import { CustomCursor } from './components/CustomCursor';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ClientsPage } from './pages/ClientsPage';
import { WorkshopsPage } from './pages/WorkshopsPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<string>('Advertising & Marketing');
  const [modalWorkshop, setModalWorkshop] = useState<string | undefined>(undefined);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
    <div className={`flex flex-col ${isHomePage ? 'h-screen overflow-hidden' : 'min-h-screen'} bg-[#FBF9F6] text-[#1B1C1A] relative`} style={{ cursor: 'none' }}>
      <CustomCursor />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-40 opacity-[0.022] mix-blend-multiply select-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <Header onOpenConsultation={handleOpenConsultation} />

      <main className={`flex-1 w-full ${isHomePage ? 'pt-20 sm:pt-[6.75rem] overflow-hidden' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/about" element={<AboutPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/clients" element={<ClientsPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/workshops" element={<WorkshopsPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!isHomePage && <MobileBottomNav />}

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={handleCloseConsultation}
        initialCategory={modalCategory}
        initialWorkshop={modalWorkshop}
      />
    </div>
  );
};

export const App: React.FC = () => (
  <Router>
    <ScrollToTop />
    <AppContent />
  </Router>
);

export default App;
