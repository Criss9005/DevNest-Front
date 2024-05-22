import React from 'react';
import Modal from './Modal';
import { useModal } from './useModal';
import css from './styles/modal.module.css';
import { Link } from 'react-router-dom';

function ButtonLink({ to, children }) {
  return (
    <Link to={to}>
      <button>{children}</button>
    </Link>
  );
}
const Modals = ({ result }) => {
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <div>
      <button className={css.startlose} onClick={openModal}>
        Start losing weight
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        {result && (
          <>
            <h3 className={css.titlemodal}>
              Your recommended daily calorie intake is
            </h3>
            <p>{result.dailyCalorieIntake}</p>
            <h4>Foods you should not eat</h4>
            <ul>
              {result.nonRecommendedFoods.map((food, index) => (
                <li key={index}>{food}</li>
              ))}
            </ul>
          </>
        )}
        <ButtonLink className={css.startlose} to="/register">
          Start losing weight
        </ButtonLink>
      </Modal>
    </div>
  );
};

export default Modals;
