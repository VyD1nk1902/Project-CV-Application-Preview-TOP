import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import type { EducationData, ExperienceData } from "./Types";
import Button from "../ui/button";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";
import CvPreview from "./CvPreview";

const DEFAULT_GENERAL_INFO = {
  name: "",
  email: "",
  phone: "",
  git: "",
  summary: "",
};

const DEFAULT_EDUCATION: EducationData[] = [
  {
    id: uuid(),
    degree: "",
    school: "",
    location: "",
    startYear: "",
    endYear: "",
  },
];

const DEFAULT_EXPERIENCE: ExperienceData[] = [
  {
    id: uuid(),
    position: "",
    company: "",
    location: "",
    startYear: "",
    endYear: "",
    desc: "",
  },
];

export default function CvGenerate() {
  // Hooks state
  const [generalInfo, setGeneralInfo] = useState(DEFAULT_GENERAL_INFO);
  const [education, setEducation] = useState(DEFAULT_EDUCATION);
  const [experience, setExperience] = useState(DEFAULT_EXPERIENCE);

  // function update field for General info
  function handleGeneralChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setGeneralInfo((prev) => ({ ...prev, [name]: value }));
  }

  //education change
  function handleEducationChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) {
    const { name, value } = e.target;
    setEducation((prev) =>
      prev.map((education) => (education.id === id ? { ...education, [name]: value } : education))
    );
  }

  //education add
  function handleEducationAdd() {
    setEducation((prev) => [
      ...prev,
      {
        id: uuid(),
        degree: "",
        school: "",
        location: "",
        startYear: "",
        endYear: "",
      },
    ]);
  }

  //education delete
  function handleEducationDelete(id: string) {
    setEducation((prev) => prev.filter((edu) => edu.id !== id));
  }

  //experience change
  function handleExperienceChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) {
    const { name, value } = e.target;
    setExperience((prev) =>
      prev.map((experience) => (experience.id === id ? { ...experience, [name]: value } : experience))
    );
  }

  //experience add
  function handleExperienceAdd() {
    setExperience((prev) => [
      ...prev,
      {
        id: uuid(),
        position: "",
        company: "",
        location: "",
        startYear: "",
        endYear: "",
        desc: "",
      },
    ]);
  }

  //experience delete
  function handleExperienceDelete(id: string) {
    setExperience((prev) => prev.filter((exp) => exp.id !== id));
  }

  //delete all
  function handleClearAll() {
    setGeneralInfo(DEFAULT_GENERAL_INFO);
    setEducation(DEFAULT_EDUCATION);
    setExperience(DEFAULT_EXPERIENCE);
  }

  //render example
  function handleRenderExample() {
    setGeneralInfo({
      name: "Vy Dinh",
      phone: "0707182799",
      email: "cv@gmail.com",
      git: "https://github.com/VyD1nk1902",
      summary:
        "I have recently obtained my Bachelor's degree in Computer Networks and Data Communications. Despite my background, I am passionate about web programming and am currently pursuing a career transition into this field. I possess foundational knowledge of React Hooks, state management, props handling, TypeScript, and Tailwind CSS. Although this career change presents significant challenges, I am truly enjoying the journey and remain highly motivated. I am a quick learner, able to perform well under pressure, and am committed to developing my skills further. My goal is to secure a position as a web programmer in the near future.",
    });
    setEducation([
      {
        id: uuid(),
        degree: "Computer Networks and Data Communications",
        school: "Hoa Sen University",
        location: "TP.HCM VIETNAM",
        startYear: "2018-09",
        endYear: "2025-02",
      },
    ]);
    setExperience([
      {
        id: uuid(),
        position: "IT Helpdesk",
        company: "Eye Hospital of Ho Chi Minh City",
        location: "Sai Gon - Viet Nam",
        startYear: "2023-08",
        endYear: "2024-11",
        desc: "Responsible for supporting the maintenance and repair of computers and network devices within the hospital's network system. Duties included inspecting, servicing, and repairing hardware components, replacing network cables, and installing or replacing security cameras throughout the hospital. I held this position during my graduation internship. The role provided me with extensive hands-on experience, as there were daily requests for replacement, maintenance, or repair of network equipment within the hospital.",
      },
    ]);
  }

  //render UI
  return (
    <section className="container">
      <div className="form-column">
        <div className="button-field">
          <Button type="reset" className="bg-white text-black  hover:bg-red-600" onClick={handleClearAll}>
            Clear All
          </Button>
          <Button type="button" className="bg-[#242424] hover:bg-cyan-500" onClick={handleRenderExample}>
            Load Example
          </Button>
        </div>
        <div className="form-field">
          <GeneralInfo generalInfo={generalInfo} onChange={handleGeneralChange} />
          <Education
            education={education}
            onChange={handleEducationChange}
            onAdd={handleEducationAdd}
            onDelete={handleEducationDelete}
          />
          <Experience
            experience={experience}
            onChange={handleExperienceChange}
            onAdd={handleExperienceAdd}
            onDelete={handleExperienceDelete}
          />
        </div>
      </div>
      <div className="preview-column">
        <CvPreview generalInfo={generalInfo} education={education} experience={experience} />
      </div>
    </section>
  );
}
