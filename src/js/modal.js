const backdrop = document.querySelector('.backdrop')
const closeModal = document.querySelector('.close-modal')

const handleCloseModal = () => backdrop.classList.add('modal__is-hidden');

export const openModal = () => backdrop.classList.remove('modal__is-hidden');

closeModal.addEventListener('click', handleCloseModal);

