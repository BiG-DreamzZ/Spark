import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: '#ff008c', fontFamily: 'Arial, sans-serif' }}>
        Welcome to AJ SPARK!
      </h1>
      <p style={{ color: '#a600ff' }}>
        This is a placeholder for the 3D nail shelves, AR nail try-on, and more.
      </p>
      <p>Endless scrolling, voice navigation, and AJ Empire will be added here.</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
