import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Checklist from './components/Checklist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Checklist/>
  </React.StrictMode>
);
