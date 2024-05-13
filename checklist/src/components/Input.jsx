
const Input = ({ placeholder, id }) => {
    return (
        <input id={id} placeholder={placeholder} className="border-2 p-2 w-[800px] my-4 ml-20" style={{ visibility: 'visible' }}></input>
    );
}

export default Input;