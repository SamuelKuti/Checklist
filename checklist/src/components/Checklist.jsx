import Heading from "./Heading";
import NewProject from "./NewProject";

const Checklist = () => {
  return (
    <div className="bg-offWhite">
      <Heading content={'Your Projects'}></Heading>
      <NewProject></NewProject>
    </div>
  )
}

export default Checklist;