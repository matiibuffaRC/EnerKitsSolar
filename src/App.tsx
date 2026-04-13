// import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

// Import de components
import HeaderComponent from './components/HeaderComponent/HeaderComponent.tsx';
import FooterComponent from "./components/FooterComponent/FooterComponent.tsx";


// Import de pages
import HomePage from './pages/HomePage.tsx';
import ProductsPage from './pages/ProductsPage.tsx';

function App() {

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default App

// Colores principales:
// #E0F600 (Principal color)

// Main section: 
//  Menú para ver los diferentes servicios
//  Proyectos a gran escala
//  Proyectos completados
//  Ventajas
//  Porque elegirnos
//  Contacto
// Footer:
