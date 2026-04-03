// import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

// Import de components
import HeaderComponent from './components/HeaderComponent/HeaderComponent.tsx';



// Import de pages
import HomePage from './pages/HomePage.tsx';

function App() {

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path="/" element={<HomePage />} />

      </Routes>
    </>
  )
}

export default App

// Colores principales:
// #E0F600 (Principal color)