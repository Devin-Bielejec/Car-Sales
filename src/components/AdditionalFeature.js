import React from 'react';

const AdditionalFeature = props => {
  console.log("Additional Feature", props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
      className="button" 
      key={props.id} 
      onClick={()=>props.addFeature(props.id)}>Add</button>
      {props.name} (+{props.price})
    </li>
  );
};

export default AdditionalFeature;


