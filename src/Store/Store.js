import { createStore } from 'redux';

const products = [
    {id: '1', key: '1', title:'Рюкзак', price: 5000, description: 'Походный, большого объема', count: 0, img: new Image()  },
    {id: '2', key: '2', title:'Подушка для сна', price: 1000, description: 'Самая мягкая подушка', count: 0, img: new Image()  },
    {id: '3', key: '3', title:'Мягкая игрушка "Гусь"', price: 2000, description: 'Согреет вас ночью', count: 0, img: new Image()  },
    {id: '4', key: '4', title:'Зарядка для телефона', price: 1000, description: 'Высокой мощьности', count: 0, img: new Image()  },
    {id: '5', key: '5', title:'Зубная паста', price: 200, description: 'Отбеливающая', count: 0, img: new Image()  },
    {id: '6', key: '6', title:'Уран 235', price: 1, description: 'Топливо для вашей АЭС', count: 0, img: new Image()  },
    {id: '7', key: '7', title:'Телевизор', price: 50000, description: 'Высокого разрешения', count: 0, img: new Image()  },
    {id: '8', key: '8', title:'Нефтяная вышка', price: 10000000, description: 'Высокодебитная', count: 0, img: new Image()  },
    {id: '9', key: '9', title:'Остров', price: 50000000, description: 'Маленький остров в Тихом океане', count: 0, img: new Image()  },
    {id: '10', key: '10', title:'Молоко', price: 100, description: 'Домик в деревне 3,2%', count: 0, img: new Image()  },
]

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
            return { ...state, filteredProducts: action.payload };
        default:
            return state;
    }
}

const store = createStore(rootReducer);

export default store;
