import React from 'react'
import genListKey from '@/lib/utils';

type PillsProps = {
  list: string[];
}

const Pills = ({list}: PillsProps) => {
  const pills = list.map((item, index) => (
    <li
      key={`item-${index}-${genListKey()}`}
      className="px-3 py-1 text-xs text-white rounded-full keyword-pill"
    >
      {item}
    </li>
  ));
  
  return (
    <ul className='flex flex-wrap gap-2 mt-5'>
      {pills}
    </ul>
  )
}

export default Pills