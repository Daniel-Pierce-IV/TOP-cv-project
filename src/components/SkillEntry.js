import Entry from "./Entry";
import React from "react";

class SkillEntry extends Entry {
  constructor(props) {
    super(props);
    this.inputKey = Entry.controlCount++;
  }

  processText = (text) => {
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
  };

  render() {
    const labelPlaceholder = "Bold Label (if colon)->:";
    const skillsPlaceholder = " HTML, CSS, JS";
    const { text } = this.props.entry;
    const { label, skills, usingPlaceholder } = this.processText(text);

    const controlOverlay = this.renderControlOverlay(
      this.createControl("Delete Entry", this.deleteEntry, "red"),
      <input
        type="text"
        key={this.inputKey}
        className="grow"
        placeholder={`${labelPlaceholder + skillsPlaceholder}`}
        value={text ? text : ""}
        onChange={this.updateValue.bind(this, "text")}
      />
    );

    return (
      <div className="skill entry relative">
        {controlOverlay}

        <div className="w-full relative">
          <div
            ref={this.skillsRef}
            className={`w-full ${usingPlaceholder ? "text-gray-400" : ""}`}
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
}

export default SkillEntry;
