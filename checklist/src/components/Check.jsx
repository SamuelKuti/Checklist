import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function addProject() {
    console.log("Project Added");
}

const Check = ({ id }) => {
    return (
        <button id={id} onClick={addProject} className="bg-asparagus text-2xl p-2 my-4 w-16 h-11 flex justify-center rounded-md text-offWhite">
            <FontAwesomeIcon icon={faCheck}/>
        </button>
    );
}

export default Check;