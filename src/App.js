import React from 'react';
import './App.css';
import Books from './Components /Books /Books';
import {Routes, Route} from 'react-router-dom';
import Viewscreen from './Components /ViewScreen/Viewscreen';

function App() {
  return (
    <>
    <div className="app">
    <Routes>
    
      <Route path="/" element={<Books />} />
      <Route path="/books" element={<Viewscreen />} />
      
    
  
    
    </Routes>
    </div>
    </>
  );
}

export default App;
