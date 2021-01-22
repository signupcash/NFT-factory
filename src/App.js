import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Layout from './components/Layout';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Layout />
      <Route path="/" component={Container} />
      <Footer />
    </div>
  )
}

export default App;