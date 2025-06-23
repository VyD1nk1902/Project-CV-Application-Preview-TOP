export default function TextArea({
  htmlFor,
  label,
  name,
  placeholder,
  value,
  onChange,
  id,
}: {
  htmlFor: string;
  label: string;
  name: string;
  placeholder: string;
  value: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={htmlFor}>{label}</label>
      <textarea name={name} rows={4} placeholder={placeholder} value={value} id={id} onChange={onChange}></textarea>
    </div>
  );
}
