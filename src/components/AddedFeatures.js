import React from 'react';
import { connect } from "react-redux";
import AddedFeature from './AddedFeature';
import { REMOVE_FEATURE } from "../actions";

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} name={item.name} price={item.price} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    add: id => dispatch(REMOVE_FEATURE)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeatures);
