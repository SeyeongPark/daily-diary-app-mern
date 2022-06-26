import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DailyDiary from './components/Main/dailyDiary';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<DailyDiary/>}/>
      </Routes>
    </Router>
  );
}

export default App;
