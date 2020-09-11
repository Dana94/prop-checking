import React from 'react';
import './App.css';

import Card from './components/Card';

function App() {

  const quote = {
    quote: "Everything you want is on the other side of fear.",
    author: "Jack Canfield"
  }

  return (
    <div className="App">
      <header className="App-header">
        <Card quote={quote} />
      </header>
    </div>
  );
}

export default App;
