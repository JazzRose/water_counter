import {useState} from 'react';

export const useModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(true);

    const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    }

    return{ toggleModal, isModalOpen}

}