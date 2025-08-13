import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Main.tsx loaded');

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

if (!rootElement) {
  console.error('Root element not found!');
} else {
  console.log('Creating React root...');
  const root = ReactDOM.createRoot(rootElement);
  console.log('Rendering App...');
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  console.log('App rendered successfully');
}
