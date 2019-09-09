import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux";
import { ADD_FEATURE } from "../actions";


const AdditionalFeatures = (props, dispatch) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} name={item.name} price={item.price} addFeature={(id)=>props.dispatch({type: ADD_FEATURE, payload: id})}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    store: state.store
  }
}

export default connect(mapStateToProps, {ADD_FEATURE})(AdditionalFeatures);
