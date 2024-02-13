import { createStore } from 'redux';
// import products from "./Products";

const initialState = {
    addedItems: [],
    products: [],
    filter: ''
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload.map(product => {
                    return { ...product, count: 0 }
                }),
                addedItems: []
            };
        case 'ADD_ITEM':
            const updatedProducts = state.products.map(product => {
                if (product._id === action.payload._id) {
                    return { ...product, count: 1 };
                }
                return product;
            });

            const addedItems = updatedProducts
                .filter(product => product.count > 0)
                .map(product => {
                    return { _id: product._id, count: product.count };
                });

            return {
                ...state,
                products: updatedProducts,
                addedItems: addedItems
            };

        case 'INCREASE_ITEM':
            const increasedProducts = state.products.map(item =>
                item._id === action.payload ? { ...item, count: item.count + 1 } : item
            );

            const increasedItems = increasedProducts
                .filter(product => product.count > 0)
                .map(product => {
                    return { _id: product._id, count: product.count };

                });
            return {
                ...state,
                products: increasedProducts,
                addedItems: increasedItems
            };

        case 'DECREASE_ITEM':
            const decreasedProducts = state.products.map(item =>
                item._id === action.payload ? { ...item, count: item.count - 1 } : item
            );

            const decreasedItems = decreasedProducts
                .filter(product => product.count > 0)
                .map(product => {
                    return { _id: product._id, count: product.count };
                });

            return {
                ...state,
                products: decreasedProducts,
                addedItems: decreasedItems
            };
        case 'SET_FILTER':
            return { ...state, filter: action.payload }
        case 'DELETE_ITEM':

            const deletedProduct = state.products.map(item => {
                if (item._id === action.payload && item.count > 0) {
                    return { ...item, count: 0 }
                }
                return item;
            })
            const deletedItems = deletedProduct
                .filter(product => product.count > 0)
                .map(product => {
                    return { _id: product._id, count: product.count };
                });

            return {
                ...state,
                products: deletedProduct,
                addedItems: deletedItems
            };
        default:
            return state;
    }
}

const store = createStore(rootReducer);

export default store;
