import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <div className='App'>
      <Navbar/>
      <div className="main-content">
      <Sidebar/>
      <Home/>
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App
