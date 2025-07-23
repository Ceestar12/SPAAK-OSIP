import React from 'react';
import ReactDOM from 'react-dom/client';
import Popup from './Popup';
import './index.css'; // optional if you're using Tailwind or custom global styles

const App = () => {
  return <Popup />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
