import { useEffect, useState } from 'react';
import Quote from '../components/Quote';
import TrackerDisplay from "../components/TrackerDisplay";
import FormContainer from "./FormContainer";
import {useFetch} from '../hooks/useFetch'

const TrackerContainer = ({data}) => {

    const [glasses, setGlasses] = useState(0);

    const handleUpdate = (updateAmount) => {
        //console.log(data)
        if (glasses + updateAmount < 0) {
            setGlasses(0);
        }
        else {
            setGlasses(parseInt(glasses + updateAmount));
        }
    }

    const handleEmpty = () => {
        setGlasses(0);
    }

    return (
        <>
            <TrackerDisplay data = {data} glasses={glasses} />
            {data ? <Quote data={data[glasses]} /> : null}
            <FormContainer handleUpdate={handleUpdate} handleEmpty={handleEmpty} />
        </>
    )
}

export default TrackerContainer;
