import { useState } from "react";

export const useModal = (initialValue = false) =>{
  const [isOpen, setIsOpen] = useState(initialValue)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return [isOpen, openModal, closeModal]
};

/* 
const openModal = document.querySelector('.buttonsoluciones');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');

  openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
  });

  closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
  }); */
