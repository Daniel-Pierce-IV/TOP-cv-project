import React from "react";
import "./ExperienceEntry.css";

class ExperienceEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  copyEntryState = () => {
    return {
      ...this.props.experience,
      highlights: [...this.props.experience.highlights],
    };
  };

  updateEntry = (mutatorFunction) => {
    const entryCopy = this.copyEntryState();
    mutatorFunction(entryCopy);
    this.props.updateEntry(entryCopy);
  };

  updateValue = (propertyName, event) => {
    this.updateEntry((entryCopy) => {
      entryCopy[propertyName] = event.target.value;
    });
  };

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

  // Ensures that the textarea grows vertically with the text it contains
  textareaResizer = (textareaRef) => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  render() {
    const { jobTitle, employer, timeframe, highlights } = this.props.experience;
    const { entryKey, deleteEntry } = this.props;

    const mainClasses = "basis-0 grow whitespace-nowrap ";

    return (
      <div className="experience entry relative">
        <div className="control-button-area w-40 absolute -translate-x-full h-full"></div>

        {/* <div className="entry-controls flex flex-col gap-1 h-full absolute -translate-x-full -left-5"> */}
        <div className="entry-controls flex gap-1 absolute -translate-y-full">
          <button
            className="bg-green-300 px-2 py-[2px]"
            onClick={this.createHighlight}
          >
            Add Highlight
          </button>

          <button className="bg-red-300 px-2 py-[2px]" onClick={deleteEntry}>
            Delete Entry
          </button>
        </div>

        <div className="flex justify-between">
          <input
            type="text"
            className={mainClasses}
            name="jobTitle"
            placeholder="Job Title"
            value={jobTitle ? jobTitle : ""}
            onInput={this.updateValue.bind(this, "jobTitle")}
          />

          <input
            type="text"
            className={mainClasses + "text-center"}
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
            const highlightRef = React.createRef();
            return (
              <li key={`${entryKey}-${index}`} className="relative mb-1">
                <div
                  className="delete-highlight absolute h-full aspect-square bg-red-300 -translate-x-full top-1/2 -translate-y-1/2 -left-1"
                  onClick={this.deleteHighlight.bind(this, index)}
                ></div>

                <textarea
                  ref={highlightRef}
                  className="w-full block overflow-hidden resize-none"
                  name={`highlights[${entryKey}][]`}
                  placeholder="A notable task or achievement"
                  value={text ? text : ""}
                  rows="1"
                  onInput={(event) => {
                    this.updateHighlight(index, event);
                    this.textareaResizer(highlightRef);
                  }}
                ></textarea>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ExperienceEntry;
