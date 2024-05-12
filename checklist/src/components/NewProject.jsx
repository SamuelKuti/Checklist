import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewProject = () => {
    return (
        <div className="flex justify-center">
            <button className="border-4 border-black rounded-xl p-6 min-h-24 min-w-24">
                <p className="text-4xl"><FontAwesomeIcon icon={faPlus}/></p>
            </button>
        </div>
    );
}

export default NewProject;