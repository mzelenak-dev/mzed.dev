import React from 'react'
import genListKey from '@/lib/utils';

const Pills = ({list}) => {
  const pills = list.map((item, index) => (
     <p key={`item-${index}-${genListKey()}`} className="keyword-pill">{item}</p>
  ));
  
  return (
    <div>{pills}</div>
  )
}

export default Pills