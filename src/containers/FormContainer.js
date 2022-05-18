
const FormContainer = ({handleEmpty, handleUpdate}) => {

    const handleInc = () => {
        handleUpdate(1);
    }

    const handleDec = () => {
        handleUpdate(-1);
    }

    const handleClear = () => {
        handleEmpty()
    }

    return (
        <>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
            <button onClick={handleClear}>Reset to 0</button>
        </>
    )
}

export default FormContainer;
