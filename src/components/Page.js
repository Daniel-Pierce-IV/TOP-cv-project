import { createRef, useState, useEffect } from "react";
import Header from "./Header";
import Section from "./Section";
import ExperienceFactory from "../Experience";
import ExperienceEntry from "./ExperienceEntry";
import SkillFactory from "../Skill";
import SkillEntry from "./SkillEntry";
import ProjectEntry from "./ProjectEntry";
import ProjectFactory from "../Project";

function Page() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: null,
    title: null,
    phone: null,
    email: null,
    linkedin: null,
    github: null,
  });

  function updatePersonalInfo(changeObj) {
    setPersonalInfo({
      ...personalInfo,
      ...changeObj,
    });
  }

  const [skills, setSkills] = useState(() => [SkillFactory()]);

  function createSkill() {
    setSkills(skills.concat(SkillFactory()));
  }

  function deleteSkill(index) {
    setSkills(skills.filter((e, i) => i !== index));
  }

  function updateSkill(index, changes) {
    setSkills(skills.map((e, i) => (i !== index ? e : { ...e, ...changes })));
  }

  const [experiences, setExperiences] = useState(() => [ExperienceFactory()]);

  function createExperience() {
    setExperiences(experiences.concat(ExperienceFactory()));
  }

  function deleteExperience(index) {
    setExperiences(experiences.filter((e, i) => i !== index));
  }

  function updateExperience(index, changes) {
    setExperiences(
      experiences.map((e, i) => (i !== index ? e : { ...e, ...changes }))
    );
  }

  const [projects, setProjects] = useState(() => [ProjectFactory()]);

  function createProject() {
    setProjects(projects.concat(ProjectFactory()));
  }
  function deleteProject(index) {
    setProjects(projects.filter((e, i) => i !== index));
  }

  function updateProject(index, changes) {
    setProjects(
      projects.map((e, i) => (i !== index ? e : { ...e, ...changes }))
    );
  }

  const pageElement = createRef();

  useEffect(() => {
    // Maintains aspect ratio by setting max width to initial width
    pageElement.current.style = `max-width: ${pageElement.current.clientWidth}px;`;
  }, []);

  return (
    <div className="px">
      <div ref={pageElement} className="page aspect-[8.5/11] h-full bg-white">
        <Header {...personalInfo} updateInfo={updatePersonalInfo} />

        <div className="p-4 pt-0 flex flex-col gap-3">
          <Section
            title="Skill"
            createEntry={createSkill}
            flexClasses="gap-1.5"
          >
            {skills.map((skill, i) => (
              <SkillEntry
                key={skill.id}
                updateEntry={(changes) => updateSkill(i, changes)}
                deleteEntry={() => deleteSkill(i)}
                {...skill}
              />
            ))}
          </Section>

          <Section
            title="Experience"
            createEntry={createExperience}
            flexClasses="gap-1.5"
          >
            {experiences.map((experience, i) => (
              <ExperienceEntry
                key={experience.id}
                updateEntry={(changes) => updateExperience(i, changes)}
                deleteEntry={() => deleteExperience(i)}
                {...experience}
              />
            ))}
          </Section>

          <Section
            title="Project"
            createEntry={createProject}
            flexClasses="gap-1.5"
          >
            {projects.map((project, i) => (
              <ProjectEntry
                key={project.id}
                updateEntry={(changes) => updateProject(i, changes)}
                deleteEntry={() => deleteProject(i)}
                {...project}
              />
            ))}
          </Section>
        </div>
      </div>
    </div>
  );
}

export default Page;
