import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import './App.css';

function App() {
  return (
    <div className="container">
      <Sidebar>
        <h1>Título 1 - Sidebar</h1>
      </Sidebar>
      <div className="conteudo" style={{ marginLeft: '250px' }}>
        <h1>Título 1 - Conteúdo</h1>
        <Content />
      </div>
    </div>
  );
}

export default App;

