import React from "react";
import ExperienceEntry from "./ExperienceEntry";
import ProjectEntry from "./ProjectEntry";
import Header from "./Header";
import Section from "./Section";
import SkillEntry from "./SkillEntry";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.pageElement = React.createRef();

    this.state = {
      entries: {
        experience: [this.defaultExperience],
        project: [this.defaultProject],
        skill: [this.defaultSkill],
      },
    };
  }

  componentDidMount = () => {
    // Maintains aspect ratio by setting max width to initial width
    this.pageElement.current.style = `max-width: ${this.pageElement.current.clientWidth}px;`;
  };

  get defaultExperience() {
    return {
      jobTitle: null,
      employer: null,
      timeframe: null,
      highlights: [null],
    };
  }

  createExperience = () => {
    this.updateState((curState) => {
      curState.entries.experience.push(this.defaultExperience);
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

  get defaultProject() {
    return {
      projectTitle: null,
      url: null,
      description: null,
    };
  }

  createProject = () => {
    this.updateState((curState) => {
      curState.entries.project.push(this.defaultProject);
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

  get defaultSkill() {
    return {
      text: null,
    };
  }

  createSkill = () => {
    this.updateState((curState) => {
      curState.entries.skill.push(this.defaultSkill);
    });
  };

  deleteSkill = (index) => {
    this.updateState((curState) => {
      curState.entries.skill = curState.entries.skill.filter(
        (entry, entryIndex) => entryIndex !== index
      );
    });
  };

  updateSkill = (index, skillState) => {
    this.updateState((curState) => {
      curState.entries.skill[index] = skillState;
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

          <div className="p-4 pt-0 flex flex-col gap-3">
            <Section title="Skills" createEntry={this.createSkill}>
              {this.state.entries.skill.map((entry, i) => (
                <SkillEntry
                  key={`skill-${i}`}
                  entry={entry}
                  updateEntry={this.updateSkill.bind(this, i)}
                  deleteEntry={this.deleteSkill.bind(this, i)}
                />
              ))}
            </Section>

            <Section
              title="Experience"
              createEntry={this.createExperience}
              flexClasses="gap-1.5"
            >
              {this.state.entries.experience.map((entry, i) => (
                <ExperienceEntry
                  key={`experience-${i}`}
                  entryKey={i}
                  entry={entry}
                  updateEntry={this.updateExperience.bind(this, i)}
                  deleteEntry={this.deleteExperience.bind(this, i)}
                />
              ))}
            </Section>

            <Section
              title="Projects"
              createEntry={this.createProject}
              flexClasses="gap-1.5"
            >
              {this.state.entries.project.map((entry, i) => (
                <ProjectEntry
                  key={`project-${i}`}
                  entry={entry}
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
