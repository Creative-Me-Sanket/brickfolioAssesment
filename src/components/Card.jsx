import React from 'react'

const Card = ({src, index }) => {
  return <div className="card">
    <img className="card" src={src} style={{height:"100%" , width:"100%"}}/>
  </div>;
};

export default Card