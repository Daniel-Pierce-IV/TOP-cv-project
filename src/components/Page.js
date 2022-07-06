import React from "react";
import ExperienceEntry from "./ExperienceEntry";
import ProjectEntry from "./ProjectEntry";
import Header from "./Header";
import Section from "./Section";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.pageElement = React.createRef();

    this.defaultExperience = {
      jobTitle: null,
      employer: null,
      timeframe: null,
      highlights: [null],
    };

    this.defaultProject = {
      projectTitle: null,
      url: null,
      description: null,
    };

    this.state = {
      entries: {
        experience: [this.defaultExperience],
        project: [this.defaultProject],
      },
    };
  }

  componentDidMount = () => {
    // Maintains aspect ratio by setting max width to initial width
    this.pageElement.current.style = `max-width: ${this.pageElement.current.clientWidth}px;`;
  };

  createExperience = () => {
    this.updateState((curState) => {
      curState.entries.experience.push({
        ...this.defaultExperience,
        highlights: [...this.defaultExperience.highlights],
      });
    });
  };

  deleteExperience = (index) => {
    this.updateState((curState) => {
      curState.entries.experience = curState.entries.experience.filter(
        (entry, entryIndex) => entryIndex !== index
      );
    });
  };

  updateExperience = (index, experienceState) => {
    this.updateState((curState) => {
      curState.entries.experience[index] = experienceState;
    });
  };

  createProject = () => {
    this.updateState((curState) => {
      curState.entries.project.push({
        ...this.defaultProject,
      });
    });
  };

  deleteProject = (index) => {
    this.updateState((curState) => {
      curState.entries.project = curState.entries.project.filter(
        (entry, entryIndex) => entryIndex !== index
      );
    });
  };

  updateProject = (index, projectState) => {
    this.updateState((curState) => {
      curState.entries.project[index] = projectState;
    });
  };

  updateState = (mutatorFunction) => {
    const stateClone = this.copyState();
    mutatorFunction(stateClone);
    this.setState(stateClone);
  };

  copyState = () => {
    return {
      entries: {
        ...this.state.entries,
        experience: this.state.entries.experience.map((entry) => ({
          ...entry,
          highlights: [...entry.highlights],
        })),
      },
    };
  };

  render() {
    return (
      <div className="px">
        <div
          ref={this.pageElement}
          className="page aspect-[8.5/11] h-full bg-white"
        >
          <Header />

          <div className="p-4 pt-0">
            <Section title="Experience" createEntry={this.createExperience}>
              {this.state.entries.experience.map((entry, i) => (
                <ExperienceEntry
                  key={`experience-${i}`}
                  entryKey={i}
                  experience={entry}
                  updateEntry={this.updateExperience.bind(this, i)}
                  deleteEntry={this.deleteExperience.bind(this, i)}
                />
              ))}
            </Section>

            <Section title="Projects" createEntry={this.createProject}>
              {this.state.entries.project.map((entry, i) => (
                <ProjectEntry
                  key={`project-${i}`}
                  project={entry}
                  updateEntry={this.updateProject.bind(this, i)}
                  deleteEntry={this.deleteProject.bind(this, i)}
                />
              ))}
            </Section>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
