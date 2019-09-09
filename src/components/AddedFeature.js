import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button remove">X</button>
      {props.name} {props.price}
    </li>
  );
};

export default AddedFeature;
