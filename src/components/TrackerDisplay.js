import PieChart from './PieChart';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import Quote from './Quote';

const TrackerDisplay = ({glasses, data}) => {

    const value = useContext(UserContext)
    return (
        <>
            <p>{value.name}'s daily goal: {value.goal}</p>
            <p>Glasses drunk: {glasses}</p>
            <PieChart glasses={glasses} goal={value.goal} />
            { glasses >= value.goal ? "Goal reached! 🥳" : null }
            <br></br>
        </>
    )
}

export default TrackerDisplay;
