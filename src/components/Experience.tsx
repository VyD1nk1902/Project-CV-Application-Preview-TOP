import type { ExperienceProps } from "./Types";
import Input from "../ui/input";
import Button from "../ui/button";
import TextArea from "../ui/TextArea";

export default function Experience({ experience, onChange, onAdd, onDelete }: ExperienceProps) {
  return (
    <section>
      <h2>Experience</h2>
      {experience.map((expItem, index) => (
        <div key={expItem.id}>
          {experience.length > 1 && <h3>Experience #{index + 1}</h3>}
          <Input
            label="Position Title"
            htmlFor={`position-${expItem.id}`}
            name="position"
            placeholder="e.g, IT Helpdesk"
            type="text"
            value={expItem.position}
            onChange={(e) => onChange(e, expItem.id)}
            id={`position-${expItem.id}`}
          />
          <Input
            label="Company Name"
            htmlFor={`company-${expItem.id}`}
            name="company"
            placeholder="Your Company Name..."
            type="text"
            value={expItem.company}
            onChange={(e) => onChange(e, expItem.id)}
            id={`company-${expItem.id}`}
          />
          <Input
            label="Location"
            htmlFor={`location-${expItem.id}`}
            name="location"
            placeholder="City, Country"
            type="text"
            value={expItem.location}
            onChange={(e) => onChange(e, expItem.id)}
            id={`location-${expItem.id}`}
          />
          <Input
            label="Start Date"
            htmlFor={`startYear-${expItem.id}`}
            name="startYear"
            placeholder="MM/YYYY"
            type="month"
            value={expItem.startYear}
            onChange={(e) => onChange(e, expItem.id)}
            id={`startYear-${expItem.id}`}
          />
          <Input
            label="End Date"
            htmlFor={`endYear-${expItem.id}`}
            name="endYear"
            placeholder="MM/YYYY or Present"
            type="month"
            value={expItem.endYear}
            onChange={(e) => onChange(e, expItem.id)}
            id={`endYear-${expItem.id}`}
          />
          <TextArea
            label="Description"
            htmlFor={`desc-${expItem.id}`}
            name="desc"
            placeholder="A short summary of the tasks you performed at the company and the skills or experience you gained from that job."
            value={expItem.desc}
            onChange={(e) => onChange(e, expItem.id)}
            id={`desc-${expItem.id}`}
          />

          {experience.length > 1 && (
            <Button type="button" onClick={() => onDelete(expItem.id)} className="bg-red-600 hover:bg-red-400 mb-4">
              Delete
            </Button>
          )}
          {index < experience.length - 1 && <hr />}
        </div>
      ))}
      <Button type="button" onClick={onAdd} className="bg-green-500 hover:bg-green-400">
        + Add New Experiences
      </Button>
    </section>
  );
}
