import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import ContactPage from './ContactPage';
import InstitutionalPage from './InstitutionalPage';
import ProjectsPage from './ProjectsPage'
import ReferencesPage from './ReferencesPage';
import QuotePage from './QuotePage';
import Navbar from './Navbar'; 
import Footer from './Footer';
function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar'ı buraya ekleyin */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Home */}
        <Route path="/products" element={<ProductsPage />} />
        {/* Ürünler */}
        <Route path="/institutional" element={<InstitutionalPage />} />
        {/* Kurumsal */}
        <Route path="/contact" element={<ContactPage />} />
        {/* Contact */}
        <Route path="/projects" element={<ProjectsPage />} />
        {/* Ürünler */}
        <Route path="/references" element={<ReferencesPage />} />
        {/* Referanslar */}
        <Route path="/quote" element={<QuotePage />} />
        {/* Get a Quote */}
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;


// Home - Kurumsal - Ürünler - Projeler - Referanslar - Contact - Teklif Al