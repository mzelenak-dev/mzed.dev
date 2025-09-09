import React from 'react'
import genListKey from '@/lib/utils';

type PillsProps = {
  list: string[];
}

const Pills = ({list}: PillsProps) => {
  const pills = list.map((item, index) => (
    <li
      key={`item-${index}-${genListKey()}`}
      className="mr-1.5 mt-2"
    >
      <div className='flex items-center rounded-xl bg-teal-400/10 px-3 py-2 text-xs md:font-medium text-teal-300'>
        {item}
      </div>
    </li>
  ));
  
  return (
    <ul className='mt-2 flex flex-wrap gap-2'>
      {pills}
    </ul>
  )
}

export default Pills