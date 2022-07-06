import Entry from "./Entry";
import DynamicTextarea from "./DynamicTextarea";

class ProjectEntry extends Entry {
  constructor(props) {
    super(props);
  }

  render() {
    const { projectTitle, url, description } = this.props.entry;
    const mainClasses = "basis-0 grow whitespace-nowrap ";

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
          <DynamicTextarea
            className="grow mx-4"
            name={description}
            placeholder="Description of your project"
            value={description}
            onInput={this.updateValue.bind(this, "description")}
          />
        </div>
      </div>
    );
  }
}

export default ProjectEntry;
