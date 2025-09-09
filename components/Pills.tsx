import React from 'react'
import genListKey from '@/lib/utils';

type PillsProps = {
  list: string[];
}

const Pills = ({list}: PillsProps) => {
  const pills = list.map((item, index) => (
    <li
      key={`item-${index}-${genListKey()}`}
      className="mr-1 mt-2"
    >
      <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
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