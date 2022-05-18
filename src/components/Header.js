import UserContext from "../context/UserContext";
import {useContext} from 'react'

const Header = () => {

    const value = useContext(UserContext)
    return (
        <>
            <h2>Hello {value.name} 👋</h2>
        </>
    )
}

export default Header;
