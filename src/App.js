import React from 'react';
import Header from './components/Header';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
