import Entry from "./Entry";
import "./ExperienceEntry.css";
import DynamicTextarea from "./DynamicTextarea";

class ExperienceEntry extends Entry {
  constructor(props) {
    super(props);
  }

  createHighlight = () => {
    this.updateEntry((entryCopy) => {
      entryCopy.highlights.push(null);
    });
  };

  updateHighlight = (index, event) => {
    this.updateEntry((entryCopy) => {
      entryCopy.highlights[index] = event.target.value;
    });
  };

  deleteHighlight = (index) => {
    this.updateEntry((entryCopy) => {
      entryCopy.highlights = entryCopy.highlights.filter((e, i) => i !== index);
    });
  };

  render() {
    const { jobTitle, employer, timeframe, highlights } = this.props.entry;
    const { entryKey } = this.props;
    const mainClasses = "basis-0 grow whitespace-nowrap ";

    return (
      <div className="experience entry relative">
        {this.renderControlOverlay(
          this.createControl("Delete Entry", this.deleteEntry, "bg-red-300"),
          this.createControl("Add Highlight", this.createHighlight)
        )}

        <div className="flex justify-between mb-[1px]">
          <input
            type="text"
            className={mainClasses + "mr-[1px]"}
            name="jobTitle"
            placeholder="Job Title"
            value={jobTitle ? jobTitle : ""}
            onInput={this.updateValue.bind(this, "jobTitle")}
          />

          <input
            type="text"
            className={mainClasses + "text-center mr-[1px]"}
            name="employer"
            placeholder="Employer"
            value={employer ? employer : ""}
            onInput={this.updateValue.bind(this, "employer")}
          />

          <input
            type="text"
            className={mainClasses + "text-right"}
            name="timeframe"
            placeholder="20XX - Present"
            value={timeframe ? timeframe : ""}
            onInput={this.updateValue.bind(this, "timeframe")}
          />
        </div>

        <ul className="pl-4">
          {highlights.map((text, index) => {
            return (
              <li
                key={`${entryKey}-${index}`}
                className="relative mt-1 first:mt-0"
              >
                <div
                  className="delete-highlight absolute h-full aspect-square bg-red-300 -translate-x-full top-1/2 -translate-y-1/2 -left-1"
                  onClick={this.deleteHighlight.bind(this, index)}
                ></div>

                <DynamicTextarea
                  className="w-full"
                  name={`highlights[${entryKey}][]`}
                  placeholder="A notable task or achievement"
                  value={text}
                  onInput={this.updateHighlight.bind(this, index)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ExperienceEntry;
