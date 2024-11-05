'use client'
import { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const ProfessionalExp = [
  { levelName: 'idk1', levelType: 'Bruhh1' },
  { levelName: 'idk2', levelType: 'Bruhh2' },
  { levelName: 'idk3', levelType: 'Bruhh3' },
];

export default function ProfessionalExperience() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-3">
      
      
      <div className="mb-4">
        <label
          htmlFor="EmployerName"
          className="block text-sm font-medium text-foreground"
        >
          Enter Employer Name
        </label>
        <input
          id="EmployerName"
          name="EmployerName"
          type="text"
          placeholder="Your Employer Name"
          className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
        />
      </div>

      <div className="mt-4">
        <Listbox value={selected} onChange={setSelected}>
          <Listbox.Label className="block text-sm font-medium text-foreground">
            Position during the internship
          </Listbox.Label>
          <div className="relative mt-2">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-foreground shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm">
              <span className="inline-flex w-full truncate">
                <span className="truncate">
                  {selected ? selected.levelName : 'Select'}
                </span>
                {selected && (
                  <span className="ml-2 truncate text-gray-500">
                    {selected.levelType}
                  </span>
                )}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
              </span>
            </ListboxButton>

            <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {ProfessionalExp.map((level) => (
                <ListboxOption
                  key={level.levelType}
                  value={level}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-foreground data-[focus]:bg-primary data-[focus]:text-white"
                >
                  <div className="flex">
                    <span className="truncate font-normal group-data-[selected]:font-semibold">
                      {level.levelName}
                    </span>
                    <span className="ml-2 truncate text-gray-500 group-data-[focus]:text-indigo-200">
                      {level.levelType}
                    </span>
                  </div>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                    <CheckIcon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>
    </div>
  );
}