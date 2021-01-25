import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Layout from './components/Layout';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Route path="/" component={Container} />

    </div>
  )
}

export default App;