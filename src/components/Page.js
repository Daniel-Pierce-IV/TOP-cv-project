import { createRef, useState, useEffect } from "react";
import Header from "./Header";
import Section from "./Section";
import ExperienceFactory from "../Experience";
import ExperienceEntry from "./ExperienceEntry";
import SkillFactory from "../Skill";
import SkillEntry from "./SkillEntry";
import ProjectEntry from "./ProjectEntry";
import ProjectFactory from "../Project";

export default function Page() {
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
  const [createSkill, deleteSkill, updateSkill] = generateEntryCRUD(
    skills,
    setSkills,
    SkillFactory
  );

  const [experiences, setExperiences] = useState(() => [ExperienceFactory()]);
  const [createExperience, deleteExperience, updateExperience] =
    generateEntryCRUD(experiences, setExperiences, ExperienceFactory);

  const [projects, setProjects] = useState(() => [ProjectFactory()]);
  const [createProject, deleteProject, updateProject] = generateEntryCRUD(
    projects,
    setProjects,
    ProjectFactory
  );

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

function generateEntryCRUD(entries, setEntries, EntryFactory) {
  return [
    function createEntry() {
      setEntries(entries.concat(EntryFactory()));
    },
    function deleteEntry(index) {
      setEntries(entries.filter((e, i) => i !== index));
    },
    function updateEntry(index, changes) {
      setEntries(
        entries.map((e, i) => (i !== index ? e : { ...e, ...changes }))
      );
    },
  ];
}
