import React from 'react';
import { connect } from "react-redux";
import AddedFeature from './AddedFeature';
import { removeFeature } from "../actions";

const AddedFeatures = props => {
  console.log("Added Features", props);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature 
            key={item.id}
            id={item.id} 
            name={item.name} 
            price={item.price}
            removeFeature={props.removeFeature(item.id)} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    features: state.car.features
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeatures);
