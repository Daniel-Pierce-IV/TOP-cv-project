import DynamicTextarea from "./DynamicTextarea";
import ControlPanel from "./ControlPanel";
import ControlButton from "./ControlButton";
import "./ExperienceEntry.css";
import "./Entry.css";

export default function ExperienceEntry(props) {
  function createHighlight() {
    props.updateEntry({ highlights: [...props.highlights, null] });
  }

  function updateHighlight(index, event) {
    props.updateEntry({
      highlights: props.highlights.map((e, i) =>
        i !== index ? e : event.target.value
      ),
    });
  }

  function deleteHighlight(index) {
    props.updateEntry({
      highlights: props.highlights.filter((e, i) => i !== index),
    });
  }

  function updateProperty(propertyName, event) {
    props.updateEntry({ [propertyName]: event.target.value });
  }

  const { jobTitle, employer, timeframe, highlights, deleteEntry } = props;
  const mainClasses = "basis-0 grow whitespace-nowrap ";

  return (
    <div className="experience entry relative">
      <ControlPanel>
        <ControlButton
          label="Delete Entry"
          onClick={deleteEntry}
          colorClass="bg-red-300"
        />
        <ControlButton label="Add Highlight" onClick={createHighlight} />
      </ControlPanel>

      <div className="flex justify-between mb-[1px]">
        <input
          type="text"
          className={mainClasses + "mr-[1px]"}
          name="jobTitle"
          placeholder="Job Title"
          value={jobTitle ? jobTitle : ""}
          onInput={updateProperty.bind(null, "jobTitle")}
        />

        <input
          type="text"
          className={mainClasses + "text-center mr-[1px]"}
          name="employer"
          placeholder="Employer"
          value={employer ? employer : ""}
          onInput={updateProperty.bind(null, "employer")}
        />

        <input
          type="text"
          className={mainClasses + "text-right"}
          name="timeframe"
          placeholder="20XX - Present"
          value={timeframe ? timeframe : ""}
          onInput={updateProperty.bind(null, "timeframe")}
        />
      </div>

      <ul className="pl-4">
        {highlights.map((text, index) => {
          return (
            <li key={index} className="relative mt-1 first:mt-0">
              <div
                className="delete-highlight absolute h-6 w-6 aspect-square text-red-400 -translate-x-full top-[12px] -translate-y-1/2 -left-1 hover:brightness-[.8] active:brightness-[.6]"
                onClick={deleteHighlight.bind(null, index)}
              >
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"
                  />
                </svg>
              </div>

              <div className="list-icon absolute h-4 w-4 -translate-x-full top-[12px] -translate-y-1/2 -left-0.5 ">
                <svg viewBox="2 2 20 20">
                  <path
                    fill="currentColor"
                    d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                  />
                </svg>
              </div>

              <DynamicTextarea
                className="w-full"
                name={`highlights[]`}
                placeholder="A notable task or achievement"
                value={text}
                onInput={updateHighlight.bind(null, index)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
