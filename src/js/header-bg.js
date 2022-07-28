const header = document.querySelector(".header");

function handleScroll() {
  const screenWidth = window.visualViewport.width;
  const scrollY = window.scrollY

  if (scrollY > 120 && screenWidth < 768) {
    header.classList.add('header__bg')
  }
  if (scrollY > 70 && screenWidth > 768) {
    header.classList.add('header__bg')
  }
  
  if (scrollY < 120 && screenWidth < 768) {
    header.classList.remove('header__bg')
  }

  if (scrollY < 70 && screenWidth > 768) {
    header.classList.remove('header__bg')
  }
}

document.addEventListener("scroll", handleScroll);
