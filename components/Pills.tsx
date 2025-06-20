import React from 'react'

const Pills = ({list}) => {
  const pills = list.map((item) => (
     <p className="keyword-pill">{item}</p>
  ));
  
  return (
    <div>{pills}</div>
  )
}

export default Pills