import Heading from "./Heading";
import NewProject from "./NewProject";
import Check from "./Check";
import Remove from "./Remove";
import Input from "./Input";
import Number from "./Number"

const Checklist = () => {
  return (
    /* Entire Page */
    <div className="bg-offWhite px-20 py-12">
      
      {/* Your Projects Heading */}
      <div className="mb-4 ml-20">
        <Heading content={"Your Projects"} colour={"heading"}></Heading>
      </div>

      {/* Project Display & Plus Button */}
      <div className="flex gap-3 justify-center">
        <div className="w-[788px] h-80 bg-pistachio rounded-md"></div>
        <NewProject></NewProject>
      </div>

      {/* Project Input Fields */}
      <div className="flex gap-3 mt-2">
        <Input id={"nameInput"} placeholder={"Project Name..."}></Input>
        <Check id={"addProjectButton"}></Check>
        <Remove id={"removeProjectButton"}></Remove>
      </div>

      {/* Selected Project Heading & Percent */}
      <div className="mt-10 grid grid-cols-6 w-full">
        <div className="col-span-3 ml-20">
          <Heading content={"Selected Project"} colour={"heading"}></Heading>
          <Heading content={"Your Project"} colour={"dimGray"}></Heading>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2 ml-10">
          <Number value={60}></Number>
        </div>
      </div>

      {/* Task Input Fields */}
      <div className="flex gap-3 mt-2">
        <Input id={"taskInput"} placeholder={"Task Name..."}></Input>
        <Check id={"addTaskButton"}></Check>
        <Remove id={"removeTaskButton"}></Remove>
      </div>
    </div>
  )
}

export default Checklist;