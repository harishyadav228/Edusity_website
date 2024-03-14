import React from 'react';
import './ATitle.css';

const ATitle = ({subTitle, title}) => {
  return (
    <div className='title'>

    <p>{subTitle}</p>
    <h2>{title}</h2>    

</div>
  )
}

export default ATitle



