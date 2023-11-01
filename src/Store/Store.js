import { createStore } from 'redux';
import products from "./Products";

const initialState = {
    addedItems: [],
    products,
    filteredProducts: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                addedItems: [...state.addedItems, action.payload]
            };
        case 'INCREASE_ITEM':
            return {
                ...state,
                addedItems: state.addedItems.map(item =>
                    item.id === action.payload ? { ...item, count: item.count + 1 } : item
                )
            };
        case 'DECREASE_ITEM':
            return {
                ...state,
                addedItems: state.addedItems.map(item =>
                    item.id === action.payload ? { ...item, count: item.count - 1 } : item
                ).filter(item => item.count !== 0)
            };
        case 'SET_FILTERED_PRODUCTS':
            return { ...state, filteredProducts: action.payload }
        default:
            return state;
    }
}

const store = createStore(rootReducer);

export default store;
