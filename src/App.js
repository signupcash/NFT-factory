import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Container from './components/Container';

function App() {
  return (
    <div>
      <Route path="/" component={Container} />
    </div>
  )
}

export default App;