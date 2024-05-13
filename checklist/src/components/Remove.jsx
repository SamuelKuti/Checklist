import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function removeProject() {
    let nameInput = document.getElementById('nameInput');
    let checkButton = document.getElementById('addProjectButton');
    let removeButton = document.getElementById('removeProjectButton');
    
    if (!nameInput){
        console.log("There was an error retrieving the project name input field");
    }
    else if (!checkButton){
        console.log("There was an error retrieving the add project check button");
    }
    else if (!removeButton){
        console.log("There was an error retrieving the remove project check button");
    }
    else {
        nameInput.style.visibility = 'hidden';
        checkButton.style.visibility = 'hidden';
        removeButton.style.visibility = 'hidden';
    }
}

const Remove = ({ id }) => {
    return (
        <button id={id} onClick={removeProject} className="bg-xRed text-2xl p-2 my-4 w-16 h-11 flex justify-center rounded-md text-offWhite">
            <FontAwesomeIcon icon={faX}/>
        </button>
    );
}

export default Remove;