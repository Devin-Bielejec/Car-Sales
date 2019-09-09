import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

const reducer = (state = initialState, action) => {
    console.log("made it to the reducer");
    switch (action.type) {
        case ADD_FEATURE:
            const itemToAdd = state.store.filter( item => item.id === action.payload)[0]

            return {
                ...state, 
                car: {
                    ...state.car, 
                    features: state.car.features.includes(itemToAdd) ? [...state.car.features] : [...state.car.features, itemToAdd]
                }
                }
        case REMOVE_FEATURE:
            const itemToRemove = state.store.filter( item => item.id === action.payload)[0];
            console.log([1,2,3])
            console.log(itemToRemove);
            console.log([...state.car.features][0]);
            console.log([...state.car.features].splice(state.car.features.indexOf(itemToRemove), 1))
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features].filter( item => item.id !== action.payload )
                }
            }
        default:
            return state;
    }
}

export { reducer };