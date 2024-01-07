import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/detail.css';
import '../styles/comment.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('.nav-bar'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
