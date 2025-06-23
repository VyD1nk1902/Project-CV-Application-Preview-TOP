import type { GeneralInfoProps } from "./Types";
import Input from "../ui/input";
import TextArea from "../ui/TextArea";

export default function GeneralInfo({ generalInfo, onChange }: GeneralInfoProps) {
  return (
    <section>
      <h2>Personal Info</h2>
      <Input
        label="Full Name"
        htmlFor="name"
        name="name"
        placeholder="First and last name..."
        type="text"
        onChange={onChange}
        value={generalInfo.name}
        id="name"
      />
      <Input
        label="Email"
        htmlFor="email"
        name="email"
        placeholder="Your Email..."
        type="email"
        id="email"
        onChange={onChange}
        value={generalInfo.email}
      />
      <Input
        label="Phone Number"
        htmlFor="phone"
        name="phone"
        placeholder="Your phone number..."
        type="text"
        id="phone"
        onChange={onChange}
        value={generalInfo.phone}
      />
      <Input
        label="Git Hub"
        htmlFor="git"
        name="git"
        placeholder="Your github link..."
        type="string"
        id="git"
        onChange={onChange}
        value={generalInfo.git}
      />
      <TextArea
        label="Description"
        htmlFor="summary"
        name="summary"
        placeholder="Write something about yourself..."
        id="summary"
        onChange={onChange}
        value={generalInfo.summary}
      />
    </section>
  );
}
