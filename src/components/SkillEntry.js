import ControlPanel from "./ControlPanel";
import ControlButton from "./ControlButton";
import "./Entry.css";

export default function SkillEntry(props) {
  function processText(text) {
    let label,
      skills,
      usingPlaceholder = true;

    if (text) {
      usingPlaceholder = false;

      if (text.includes(":")) {
        const parts = text.split(":");
        label = parts[0] + ":";
        skills = parts[1] ? parts.slice(1).join(":") : null;
      } else {
        skills = text;
      }
    }

    return { label, skills, usingPlaceholder };
  }

  function updateProperty(propertyName, event) {
    props.updateEntry({ [propertyName]: event.target.value });
  }

  const labelPlaceholder = "Bold Label (if colon)->:";
  const skillsPlaceholder = " HTML, CSS, JS";
  const { text, deleteEntry } = props;
  const { label, skills, usingPlaceholder } = processText(text);

  return (
    <div className="skill entry relative">
      <ControlPanel>
        <ControlButton
          label="Delete Entry"
          onClick={deleteEntry}
          colorClass="bg-red-300"
        />
        <input
          type="text"
          className="grow"
          size={40}
          placeholder="Enter your skills here"
          value={text ? text : ""}
          onChange={updateProperty.bind(null, "text")}
        />
      </ControlPanel>

      <div className="w-full relative">
        <div
          className={`w-full cursor-default ${
            usingPlaceholder ? "text-gray-400" : ""
          }`}
        >
          <span className="font-bold">
            {usingPlaceholder ? labelPlaceholder : label}
          </span>
          {usingPlaceholder ? skillsPlaceholder : skills}
        </div>
      </div>
    </div>
  );
}
