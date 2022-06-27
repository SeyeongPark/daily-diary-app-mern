import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DailyDiary from './components/main/diary';
import Graph from './components/graph/graph';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<DailyDiary/>}/>
      <Route exact path='/graph' element={<Graph/>}/>
      </Routes>
    </Router>
  );
}

export default App;
