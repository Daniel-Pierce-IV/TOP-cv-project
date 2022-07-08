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
                  className="delete-highlight absolute h-6 w-6 aspect-square text-red-400 bg-white -translate-x-full top-[12px] -translate-y-1/2 -left-1"
                  onClick={this.deleteHighlight.bind(this, index)}
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
