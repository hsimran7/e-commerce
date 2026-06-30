import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route ,Router} from 'react-router-dom';
import Header from './components/header/index.jsx'
import Home from './Pages/home/index.jsx'


function App() {
  return(
    
    <BrowserRouter> 
       <Routes>
        <Route path="/" exact={true} element={<Header />} />
        <Route path="/home" exact={true} element={<Home />} />
       
      </Routes>

    </BrowserRouter>

    
  );
}

export default App;
