import React from 'react';

import './App.css';
import { Search } from './features/search/Search';
import { Results } from './features/results/Results';



function App() {
  return (
    <div className="App">
      <div className="appSearch">
      < Search /></div>
      <div className="appResults">
      < Results /> </div>
    </div>
  );
}

export default App;
