import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <Route path="/" component={Layout} />
    </div>
  )
}

export default App;