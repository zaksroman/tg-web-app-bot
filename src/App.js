import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./Components/hooks/useTelegram";
import {Routes, Route} from "react-router-dom";
import ProductList from "./Components/ProductList/ProductList";
import BigProoductItem from "./Components/ProductItem/BigItem/BigProoductItem";
import Basket from "./Components/Basket/Basket";
import {useSelector} from "react-redux";

function App() {
  const {tg} = useTelegram()
  const addedItems = useSelector(state => state.addedItems);

  useEffect(()=> {
    tg.ready()
  }, [])

  if (addedItems.length === 0) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.show()
        tg.MainButton.setParams({
            text: `Перейти в корзину`
    })
  }


  return (
    <div className="App">
        <Routes>
            <Route index element={<ProductList />}/>
            <Route path={'/bigproructitem/:id'} element={ <BigProoductItem />}/>
            <Route path={'/basket'} element={<Basket/>}/>
        </Routes>
    </div>
  );
}

export default App;
