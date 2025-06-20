import React from 'react'
import KeywordPills from "@/components/KeywordPills";

type EmployerProps = {
  name: string;
  title: string;
  years: number[];
  description: string;
  keywords: string[];
}

const Employer = ({name, title, years, description, keywords}: EmployerProps) => {
  return (
    <li className="flex flex-col">
      <div>
        <h3 className="flex items-center leading-snug">
          <span className="text-gray-100 font-bold text-lg">{name}</span>
          <span aria-hidden="true" className="mx-2">•</span>
          <span className='text-accent'>{title}</span>
          <span aria-hidden="true" className="mx-2">•</span>
          <span className="italic">{`${years[0]} - ${years[1]}`}</span>
        </h3>
      </div>
      <div>
        <p className="mt-2 text-sm leading-normal">{description}</p>
      </div>
      <div>
        <KeywordPills keywords={keywords} />
      </div>
    </li>
  )
}

export default Employer