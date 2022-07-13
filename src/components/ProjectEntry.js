import ControlButton from "./ControlButton";
import ControlPanel from "./ControlPanel";
import DynamicTextarea from "./DynamicTextarea";
import "./Entry.css";

export default function ProjectEntry(props) {
  const { projectTitle, url, description, deleteEntry, updateEntry } = props;
  const mainClasses = "basis-0 grow whitespace-nowrap ";

  function updateProperty(propertyName, event) {
    updateEntry({ [propertyName]: event.target.value });
  }

  return (
    <div className="experience entry relative">
      <ControlPanel>
        <ControlButton
          label="Delete Entry"
          onClick={deleteEntry}
          colorClass="bg-red-300"
        />
      </ControlPanel>

      <div className="flex justify-between mb-[1px]">
        <input
          type="text"
          className={mainClasses + " mr-[1px]"}
          name="projectTitle"
          placeholder="Project Title"
          value={projectTitle ? projectTitle : ""}
          onInput={updateProperty.bind(null, "projectTitle")}
        />

        <input
          type="text"
          className={mainClasses + "text-right"}
          name="url"
          placeholder="https://www.example.com"
          value={url ? url : ""}
          onInput={updateProperty.bind(null, "url")}
        />
      </div>

      <div className="flex">
        <DynamicTextarea
          className="grow ml-4"
          name={description}
          placeholder="Description of your project"
          value={description}
          onInput={updateProperty.bind(null, "description")}
        />
      </div>
    </div>
  );
}
