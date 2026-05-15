import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// Simple Scroll Reveal Logic
const observerOptions = {
  threshold: 0.05,
  rootMargin: '0px 0px -20px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

// Function to start observing
const startObserving = () => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => observer.observe(el));
};

// Start observing and also re-observe on route changes
window.addEventListener('load', startObserving);
document.addEventListener('click', () => {
  // Slight delay to allow DOM to update after React render
  setTimeout(startObserving, 100);
});
