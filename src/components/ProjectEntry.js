import React from "react";

class ProjectEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  copyEntryState = () => {
    return {
      ...this.props.project,
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

  // Ensures that the textarea grows vertically with the text it contains
  textareaResizer = (textareaRef) => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  render() {
    const { projectTitle, url, description } = this.props.project;
    const { deleteEntry } = this.props;
    const mainClasses = "basis-0 grow whitespace-nowrap ";
    const textareaRef = React.createRef();

    return (
      <div className="experience entry relative">
        <div className="control-button-area w-40 absolute -translate-x-full h-full"></div>

        {/* <div className="entry-controls flex flex-col gap-1 h-full absolute -translate-x-full -left-5"> */}
        <div className="entry-controls flex gap-1 absolute -translate-y-full">
          <button className="bg-red-300 px-2 py-[2px]" onClick={deleteEntry}>
            Delete Entry
          </button>
        </div>

        <div className="flex justify-between">
          <input
            type="text"
            className={mainClasses}
            name="projectTitle"
            placeholder="Project Title"
            value={projectTitle ? projectTitle : ""}
            onInput={this.updateValue.bind(this, "projectTitle")}
          />

          <input
            type="text"
            className={mainClasses + "text-right"}
            name="url"
            placeholder="https://www.example.com"
            value={url ? url : ""}
            onInput={this.updateValue.bind(this, "url")}
          />
        </div>

        <div className="flex">
          <textarea
            ref={textareaRef}
            className="grow mx-4 block overflow-hidden resize-none"
            name={description}
            placeholder="Description of your project"
            value={description ? description : ""}
            rows="1"
            onInput={(event) => {
              this.updateValue("description", event);
              this.textareaResizer(textareaRef);
            }}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default ProjectEntry;
