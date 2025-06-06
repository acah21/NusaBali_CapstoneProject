import { initBurgerIcon } from './script/BurgerIcon.js';
import { initNavigation } from './script/navigation-helper.js';
import { initMap } from './script/map.js';
import './script/animations.js'; 
import "./styles/style.css";
import "./styles/culture.css";
import "./styles/about-us-responsive.css";
import "./styles/about-us.css";
import "./styles/destination.css";
import "./styles/navigation.css";
import { router } from './routes/route.js'; 
import './pages/app.js'; 

// Import images
import NUSABaliLogo from './images/NUSABali.png';
import NUSABaliWhite from './images/NUSABali white.png';

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
 // components yang penting
  initNavigation();
  initBurgerIcon();
  router();
  
  // Update image sources with null checking
  const backgroundImg = document.querySelector('.background img');
  if (backgroundImg) {
    backgroundImg.src = BackgroundAtasHome;
  }

  const headerLogo = document.querySelector('.main-header img');
  if (headerLogo) {
    headerLogo.src = NUSABaliLogo;
  }

  const footerLogo = document.querySelector('footer .container img');
  if (footerLogo) {
    footerLogo.src = NUSABaliWhite;
  }
});
