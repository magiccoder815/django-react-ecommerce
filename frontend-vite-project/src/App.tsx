import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import AboutScreen from './screens/AboutScreen';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeScreen/>} /> 
        <Route path="/about" element={<AboutScreen/>} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
    
      </div>
    </>
  )
}

export default App
