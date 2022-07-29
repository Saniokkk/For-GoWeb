// const aboutSection = document.querySelector('#about').getBoundingClientRect().y;
// const casesSection = document.querySelector('#cases').getBoundingClientRect().y;
// const blogSection = document.querySelector('#blog').getBoundingClientRect().y;
// const contactSection = document.querySelector('#contact').getBoundingClientRect().y;
// const navigate = document.querySelector('.header-nav__list');
// // document.documentElement.getBoundingClientRect().top;
// const rootElement = document.documentElement;

// function scrollToTop(e) {
//   // Scroll to top logic
//   rootElement.scrollTo({
//     top: e ? e : 0,
//     behavior: "smooth"
//   });
// }

// const handleClick = (event) => {
//   const nameBtn = event.target.name;

//   switch (nameBtn) {
//     case 'home':
//       scrollToTop()
//       break;
//     case 'about':
//       console.log(aboutSection)
//       scrollToTop(aboutSection)
//       break;
//     case 'cases':
//       console.log(casesSection)
//       scrollToTop(casesSection)
//       break;
//     case 'blog':
//       console.log(blogSection)
//       scrollToTop(blogSection)
//       break;
//     case 'contact':
//       console.log(contactSection)
//       scrollToTop(contactSection)
//       break;
  
//     default:
//       break;
//   }
// }

// navigate.addEventListener('click', handleClick)