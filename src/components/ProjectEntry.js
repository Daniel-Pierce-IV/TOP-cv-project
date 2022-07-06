import Entry from "./Entry";
import { createRef } from "react";

class ProjectEntry extends Entry {
  constructor(props) {
    super(props);
  }

  // Ensures that the textarea grows vertically with the text it contains
  textareaResizer = (textareaRef) => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  render() {
    const { projectTitle, url, description } = this.props.entry;
    const mainClasses = "basis-0 grow whitespace-nowrap ";
    const textareaRef = createRef();

    return (
      <div className="experience entry relative">
        {this.renderControlOverlay(
          this.createControl("Delete Entry", this.deleteEntry, "red")
        )}

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
