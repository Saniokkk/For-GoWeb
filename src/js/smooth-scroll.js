const aboutSection = document.querySelector('#about')
const casesSection = document.querySelector('#cases')
const blogSection = document.querySelector('#blog')
const contactSection = document.querySelector('#contact')
const navigate = document.querySelector('.header-nav__list');

const rootElement = document.documentElement;

function getCoords(elem) {
  const box = elem.getBoundingClientRect();  
  return box.top + window.pageYOffset;
}

function scrollToTop(coord) {
  const headerHeight = window.visualViewport.width < 768 ? 120 : 80
  rootElement.scrollTo({
    top: coord ? coord - headerHeight : 0,
    behavior: "smooth"
  });
}

const handleClick = (event) => {
  const nameBtn = event.target.name;
  
  switch (nameBtn) {
    case 'home':
      scrollToTop()
      break;
    case 'about':
      scrollToTop(getCoords(aboutSection));
      break;
    case 'cases':
      scrollToTop(getCoords(casesSection));
      break;
    case 'blog':
      scrollToTop(getCoords(blogSection));
      break;
    case 'contact':
      scrollToTop(getCoords(contactSection));
      break;
      
    default:
      break;
  }
}

navigate.addEventListener('click', handleClick)