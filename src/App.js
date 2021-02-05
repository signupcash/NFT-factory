import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Footer from './components/Footer';
import Layout from './components/Layout';

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