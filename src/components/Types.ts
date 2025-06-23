// Data type declare

import React from "react";

export interface GeneralInfoData {
  name: string;
  phone: string;
  email: string;
  git: string;
  summary: string;
}

export interface EducationData {
  id: string;
  degree: string;
  school: string;
  location: string;
  startYear: string;
  endYear: string;
}

export interface ExperienceData {
  id: string;
  position: string;
  company: string;
  location: string;
  startYear: string;
  endYear: string;
  desc: string;
}

export interface GeneralInfoProps {
  generalInfo: GeneralInfoData;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface EducationProps {
  education: EducationData[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  onAdd: () => void;
  onDelete: (id: string) => void;
}

export interface ExperienceProps {
  experience: ExperienceData[];
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => void;
  onAdd: () => void;
  onDelete: (id: string) => void;
}
