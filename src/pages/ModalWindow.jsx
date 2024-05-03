import React from 'react';

const ModalWindow = ({ isOpen, onClose }) => {
    return (
        <div style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-content">
                <h2>Модальное окно</h2>
                <p>Здесь ваш контент...</p>
                <button onClick={onClose}>Закрыть модальное окно</button>
            </div>
        </div>
    );
};

export default ModalWindow;
