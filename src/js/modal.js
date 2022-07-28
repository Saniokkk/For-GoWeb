const backdrop = document.querySelector('.backdrop');
const closeModal = document.querySelector('.close-modal')
const listCases = document.querySelector('.cases__list');
const modal = document.querySelector('.modal')
// const imageToModal = document.querySelector('.img-modal');

const toggleModal = () => {
  backdrop.classList.toggle('modal__is-hidden');
}


const handleClick = (event) => {
  // // const nextImg = event.target.closest('li').nextElementSibling.querySelector('.cases__img');
  // // const prevImg = event.target.closest('li').previousElementSibling.querySelector('.cases__img');
  // console.log(event.target.closest('li').previousElementSibling);
  // console.log(event.target.closest('li').nextElementSibling);

  if (event.target.tagName === 'IMG') {
    
  }
}

const handleCloseModal = (event) => {
  toggleModal()
}

listCases.addEventListener('click', handleClick);
closeModal.addEventListener('click', handleCloseModal)