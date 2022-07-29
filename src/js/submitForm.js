// const backdrop = document.querySelector('.backdrop');
// const closeModal = document.querySelector('.close-modal')
import { openModal } from "./modal.js";
const form = document.querySelector('.form');
const worning = document.querySelector('.worning');
const textWorning = document.querySelector('.text-worning')

// const toggleModal = () => {
//   backdrop.classList.toggle('modal__is-hidden');
// }

function isValidEmail(email) { 
  return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email); 
} 

function onFormSubmit(event) {
    event.preventDefault();
  if (event.currentTarget.elements.email.value === '') {
    textWorning.textContent = 'This is required field';
    worning.classList.remove('visually-hidden');

    } else {
      //   const name = event.currentTarget.elements.name.name;
      //   const email = event.currentTarget.elements.email.name;
      //   formData[name] = event.currentTarget.elements.name.value;
      //   formData[email] = event.currentTarget.elements.email.value;
      const { name: { value: name}, email: { value: email } } = event.currentTarget.elements;
      const data = { name, email };

      if (!isValidEmail(email)) {
        textWorning.textContent = `Your email ${email}  invalid, it must contain @`;
        worning.classList.remove('visually-hidden');
      } else {
        toggleModal();
        worning.classList.add('visually-hidden');
        event.currentTarget.reset();
      }
    }   
}
// const handleCloseModal = () => {
//   toggleModal()
// }

form.addEventListener('submit', onFormSubmit)

// closeModal.addEventListener('click', handleCloseModal);
