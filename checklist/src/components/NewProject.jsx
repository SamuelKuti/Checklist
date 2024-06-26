import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "./Input";

function buttonClicked() {
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
        nameInput.style.visibility = 'visible';
        checkButton.style.visibility = 'visible';
        removeButton.style.visibility = 'visible';
    }
}

const NewProject = () => {
    return (
        <div>
            <div className="flex justify-center">
                <button onClick={buttonClicked} className="p-6 bg-asparagus rounded-md min-h-80 min-w-36">
                    <p className="text-7xl font-black text-offWhite"><FontAwesomeIcon icon={faPlus}/></p>
                </button>
            </div>
        </div>
    );
}

export default NewProject;