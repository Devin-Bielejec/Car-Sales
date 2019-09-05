const ADD_FEATURE = "ADD_FEATURE";
const REMOVE_FEATURE = "REMOVE_FEATURE";


const addFeature = () => {
    return {
        type: ADD_FEATURE,
        carInfo
    }
}

const removeFeature = () => {
    return {
        type: REMOVE_FEATURE,
        carInfo
    }
}

export { ADD_FEATURE, REMOVE_FEATURE }