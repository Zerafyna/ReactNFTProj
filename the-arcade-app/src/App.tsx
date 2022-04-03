import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Mint, Leaderboard, NotFound } from './pages';
import { Footer, Navigation } from './components';

function App() {
  return (
    <div className="App">
      <Router>
       <Navigation />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/mint' element={<Mint />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/about' element={<About />} />
        <Route path="*" element={<NotFound/>}/>
       </Routes>
       <Footer />
     </Router>
    </div>
  );
}

export default App;
