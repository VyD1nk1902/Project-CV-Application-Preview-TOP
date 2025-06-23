import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import type { GeneralInfoData, ExperienceData, EducationData } from "./Types";

//Preview Header
const CvPreviewHeader = ({ name, phone, email, git }: GeneralInfoData) => {
  if (!name && !phone && !email && !git) return null;
  return (
    <header>
      {name && <h1 className="font-bold text-center mb-8">{name}</h1>}
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {phone && (
          <div className="flex items-center gap-1 ">
            <MdOutlinePhoneAndroid />
            <p>{phone}</p>
          </div>
        )}
        {email && (
          <a href={`mailto:${email}`} className="flex items-center gap-1">
            <MdOutlineMail />
            <p>{email}</p>
          </a>
        )}
        {git && (
          <a href={git.startsWith("http") ? git : `https://${git}`} className="flex items-center gap-1">
            <FaGithub />
            <p>{git}</p>
          </a>
        )}
      </div>
    </header>
  );
};

//CvSection Block
const CvSectionBlock = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="font-bold" style={{ fontFamily: "var(--font-robo" }}>
      {title}
    </h2>
    {children}
  </section>
);

//CvItem
const CvItem = ({
  title,
  subtitle,
  startDate,
  endDate,
  description,
  location,
}: {
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}) => {
  if (!title && !subtitle && !startDate && !endDate && !location && !description) return null;
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <h3 className="font-bold">{title}</h3>
        <p className="relative bottom-[4px]">
          {startDate} | {endDate}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h3>{subtitle}</h3>
        <p className="relative bottom-[4px]">{location}</p>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
};

export default function CvPreview({
  generalInfo,
  education,
  experience,
}: {
  generalInfo: GeneralInfoData;
  education: EducationData[];
  experience: ExperienceData[];
}) {
  return (
    <div className="preview-container">
      <CvPreviewHeader {...generalInfo} />

      <section>
        {generalInfo.summary && (
          <CvSectionBlock title="Profile">
            <p>{generalInfo.summary}</p>
          </CvSectionBlock>
        )}

        {education.length > 0 && education[0].school && (
          <CvSectionBlock title="Education">
            {education.map((edu) => (
              <CvItem
                key={edu.id}
                title={edu.degree}
                subtitle={edu.school}
                startDate={edu.startYear}
                endDate={edu.endYear}
                location={edu.location}
                description=""
              />
            ))}
          </CvSectionBlock>
        )}

        {experience.length > 0 && experience[0].company && (
          <CvSectionBlock title="Company">
            {experience.map((exp) => (
              <CvItem
                key={exp.id}
                title={exp.position}
                subtitle={exp.company}
                startDate={exp.startYear}
                endDate={exp.endYear}
                location={exp.location}
                description={exp.desc}
              />
            ))}
          </CvSectionBlock>
        )}
      </section>
    </div>
  );
}
