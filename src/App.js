import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Layout from './components/Layout';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Layout />
      <Route path="/" component={Hero} />
      <Footer />
    </div>
  )
}

export default App;