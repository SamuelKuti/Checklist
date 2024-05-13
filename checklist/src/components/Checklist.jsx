import Heading from "./Heading";
import NewProject from "./NewProject";
import Check from "./Check";
import Remove from "./Remove";
import Input from "./Input";

const Checklist = () => {
  return (
    <div className="bg-offWhite px-20 py-12">
      <Heading content={"Your Projects"}></Heading>
      <div className="flex gap-3 justify-center">
        <div className="w-[788px] h-80 bg-pistachio rounded-md"></div>
        <NewProject></NewProject>
      </div>
      <div className="flex gap-3 mt-2">
        <Input id={"nameInput"} placeholder={"Project Name..."}></Input>
        <Check id={"addProjectButton"}></Check>
        <Remove id={"removeProjectButton"}></Remove>
      </div>
    </div>
  )
}

export default Checklist;