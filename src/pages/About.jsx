import React from 'react';
import { useModal } from './ModalContext';
import ModalWindow from './ModalWindow';

const About = () => {
    const { isOpen, closeModal } = useModal();
    return (
        <div>
            <h1>About Page</h1>
            <ModalWindow isOpen={isOpen} onClose={closeModal} />
        </div>
    );
};

export default About;
