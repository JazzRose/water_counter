import { useState,useEffect } from 'react';
import Modal from 'react-modal';

import '../App.css';
import Header from '../components/Header';
import TrackerContainer from '../containers/TrackerContainer';
import UserContext from '../context/UserContext'
import { useModal } from '../hooks/useModal';
import {useFetch} from '../hooks/useFetch'

const MainPage = () => {

    const [name, setName] = useState('Stranger');
    const [goal, setGoal] = useState(1);
    const [data, setData] = useState(null);
    // const [isModalOpen, setIsModalOpen] = useState(true);

    let changeModal = useModal()
    

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleGoalChange = (e) => {
        setGoal(parseInt(e.target.value))
    }

    // const toggleModal = () => {
    //     setIsModalOpen(!isModalOpen); //needs to be a custom hook

    useEffect(() => {
        fetchData()
       //useFetch(data,setData);
    }, [data]);

    const fetchData =  function(){
        fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => setData(data.slice(0,100) ));
        // .then(data=> console.log(data.slice(0,10)));
      }

    return (
        <>
            <Modal
                isOpen={changeModal.isModalOpen}
                ariaHideApp={false}
                contentLabel="User options"
            >
                <label htmlFor='name'>Your name: </label>
                <input type="text" name="name" placeholder={name} onChange={handleNameChange} />
                <br></br>
                <label htmlFor='goal'>Your goal: </label>
                <input type="number" min="1" name="goal" defaultValue={goal} onChange={handleGoalChange} />
                <button onClick={changeModal.toggleModal}>OK</button>
            </Modal>
            <UserContext.Provider value ={{name, setName, goal, setGoal}}>
            <Header/>
            <TrackerContainer data = {data}/>
            </UserContext.Provider>
        </>
    )
}

export default MainPage;
