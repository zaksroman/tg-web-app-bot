import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./Components/hooks/useTelegram";
import {Routes, Route} from "react-router-dom";
import ProductList from "./Components/ProductList/ProductList";
import BigProoductItem from "./Components/ProductItem/BigItem/BigProoductItem";
import Basket from "./Components/Basket/Basket";
import Search from "./Components/Search/Search";

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

function App() {
  const {tg} = useTelegram()

  useEffect(()=> {
    tg.ready()
  }, [])


  return (
    <div className="App">
        <Routes>
            <Route index element={<ProductList products={products}/>}/>
            <Route path={'/bigproructitem/:id'} element={ <BigProoductItem products={products}/>}/>
            <Route path={'/basket'} element={<Basket/>}/>
        </Routes>
    </div>
  );
}

export default App;
