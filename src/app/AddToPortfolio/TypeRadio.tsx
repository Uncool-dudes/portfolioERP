import { ChangeEvent } from 'react';

interface ChildComponentProps {
  onSendData: (data: string) => void;
}

const portfolioItemType = [
  { type: "Skill", name: "Skill" },
  { type: "Achievement", name: "Achievement" },
  { type: "Project", name: "Project" },
  { type: "ProfessionalExp", name: "Professional Experience" },
];

export default function TypeRadio({ onSendData }: ChildComponentProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSendData(e.target.value);
  };
  return (
    <fieldset className="px-3" >
      <legend className="text-sm/6 text-foreground">Portfolio Item</legend>
      <div className="mt-2 space-y-6 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        {portfolioItemType.map((itemType) => (
          <div key={itemType.type} className="flex items-center">
            <input
              defaultChecked={itemType.type === "email"}
              type="radio"
              name="itemType"
              id={itemType.type}
              value={itemType.type}
              onChange={handleChange}
              className="h-4 w-4 form-radio accent-primary"
            />
            <label
              htmlFor={itemType.type}
              className="ml-3 block text-sm/6 font-medium text-foreground"
            >
              {itemType.name}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}