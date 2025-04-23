import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{ background: 'linear-gradient(to right, #ff008c, #a600ff)', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: '#f9f9f9', fontFamily: 'Arial, sans-serif' }}>
          Welcome to AJ SPARK!
        </h1>
      </header>
      <main style={{ backgroundColor: '#f9f9f9', padding: '20px', textAlign: 'center' }}>
        <p style={{ color: '#a600ff', fontSize: '18px' }}>
          This is the AJ SPARK Homepage—a placeholder for the 3D nail shelves (117 products), AR nail try-on, voice navigation, AJ Empire Assistant, and more.
        </p>
        <p style={{ color: '#ff008c' }}>
          Explore the “Nails of Nigeria” mural and “Spin the Butterfly” teaser in the full version, coming next!
        </p>
      </main>
    </div>
  );
}

export default App;
