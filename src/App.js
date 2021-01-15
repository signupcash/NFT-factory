import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Route path="/" component={Hero} />
    </div>
  )
}

export default App;