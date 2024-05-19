import Modal from "./Modal"
import { useModal } from "./useModal"
import css from "./modal.module.css";

const Modals = () => {
    const [isOpen, openModal, closeModal] = useModal(false)
    return (
        <div>
            <button className={css.startlose} onClick={openModal}>Start losing weight</button>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <h3 className={css.titlemodal}>Your recommended daily calorie intake is</h3>
                <p>formula michael</p>
                <h4>formula michael</h4>
                <ul>
                    <ul>1. Flour products</ul>
                    <ul>2. Milk</ul>
                    <ul>3. Red meat</ul>
                    <ul>4. Smoked meats</ul>
                </ul>
                <button className={css.startlose}>Start losing weight</button>
            </Modal>
        </div>
    )
}

export default Modals