import type React from "react";

export default function Input({
  label,
  htmlFor,
  name,
  placeholder,
  type,
  value,
  onChange,
  id,
}: {
  label: string;
  htmlFor: string;
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={htmlFor} className="flex items-center">
        {label}
      </label>
      <input className="" name={name} placeholder={placeholder} type={type} value={value} onChange={onChange} id={id} />
    </div>
  );
}
