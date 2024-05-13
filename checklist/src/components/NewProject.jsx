import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function buttonClicked() {
    let nameInput = document.getElementById('nameInput');
    console.log(nameInput);
    if (nameInput.style.visibility == 'visible') {
        nameInput.style.visibility = 'hidden'
    }
    else {
        nameInput.style.visibility = 'visible';
    }
}

const NewProject = () => {
    return (
        <div>
            <div className="flex justify-center">
                <button onClick={buttonClicked} className="p-6 bg-asparagus rounded-sm min-h-80 min-w-36">
                    <p className="text-7xl font-black text-white"><FontAwesomeIcon icon={faPlus}/></p>
                </button>
            </div>
            <div>
                <input id="nameInput" placeholder="Project Name" className="border-2 p-2 w-1/2" style={{ visibility: 'hidden' }}></input>
            </div>
        </div>
    );
}

export default NewProject;