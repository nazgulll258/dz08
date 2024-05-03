import React from 'react';
import { useModal } from './ModalContext';

const MainPage = () => {
    const { openModal } = useModal();

    return (
        <button onClick={openModal}>Открыть модальное окно</button>
    );
};

export default MainPage;
