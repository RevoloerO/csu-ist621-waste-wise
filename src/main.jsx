import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { hydrate, render } from "react-dom";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
/*
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>, rootElement);
} else {
  render(<StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>, rootElement);
}*/