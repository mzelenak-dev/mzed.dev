import React from 'react'
import genListKey from '@/lib/utils';

type KeywordPillsProps = {
  keywords: string[];
}

const KeywordPills = ({keywords}: KeywordPillsProps) => {
  const pills = keywords.map((item, index) => (
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

export default KeywordPills