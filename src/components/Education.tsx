import type { EducationProps } from "./Types";
import Input from "../ui/input";
import Button from "../ui/button";

export default function Education({ education, onChange, onAdd, onDelete }: EducationProps) {
  return (
    <section>
      <h2>Education</h2>
      {education.map((eduItem, index) => (
        <div key={eduItem.id}>
          {education.length > 1 && <h3>Education #{index + 1}</h3>}
          <Input
            label="Degree / Qualification"
            htmlFor={`degree-${eduItem.id}`}
            name="degree"
            placeholder="e.g, Network Comuter"
            type="text"
            value={eduItem.degree}
            onChange={(e) => onChange(e, eduItem.id)}
            id={`degree-${eduItem.id}`}
          />
          <Input
            label="University"
            htmlFor={`school-${eduItem.id}`}
            name="school"
            placeholder="Hoa Sen University"
            type="text"
            value={eduItem.school}
            onChange={(e) => onChange(e, eduItem.id)}
            id={`school-${eduItem.id}`}
          />
          <Input
            label="Location"
            htmlFor={`location-${eduItem.id}`}
            name="location"
            placeholder="City, Country"
            type="text"
            value={eduItem.location}
            onChange={(e) => onChange(e, eduItem.id)}
            id={`location-${eduItem.id}`}
          />
          <Input
            label="Start Date"
            htmlFor={`startYear-${eduItem.id}`}
            name="startYear"
            placeholder="MM/YYYY"
            type="month"
            value={eduItem.startYear}
            onChange={(e) => onChange(e, eduItem.id)}
            id={`startYear-${eduItem.id}`}
          />
          <Input
            label="End Date"
            htmlFor={`endYear-${eduItem.id}`}
            name="endYear"
            placeholder="MM/YYYY or Present"
            type="month"
            value={eduItem.endYear}
            onChange={(e) => onChange(e, eduItem.id)}
            id={`endYear-${eduItem.id}`}
          />

          {education.length > 1 && (
            <Button type="button" onClick={() => onDelete(eduItem.id)} className="bg-red-600 hover:bg-red-400 mb-4">
              Delete
            </Button>
          )}
          {index < education.length - 1 && <hr />}
        </div>
      ))}
      <Button type="button" onClick={onAdd} className="bg-green-500 hover:bg-green-400">
        + Add New Education
      </Button>
    </section>
  );
}
