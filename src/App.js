import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./Components/hooks/useTelegram";
import Header from "./Components/Header/Header";
import {Routes, Route} from "react-router-dom";
import ProductList from "./Components/ProductList/ProductList";
import Form from './Components/Form/Form'
import BigProoductItem from "./Components/ProductItem/BigItem/BigProoductItem";
import Basket from "./Components/Basket/Basket";
function App() {
  const {onToggleButton, tg} = useTelegram()

  useEffect(()=> {
    tg.ready()
  }, [])


  return (
    <div className="App">
        <Routes>
            <Route index element={<ProductList/>}/>
            <Route path={'/bigproructitem'} element={<BigProoductItem/>}/>
            <Route path={'/basket'} element={<Basket/>}/>
        </Routes>
    </div>
  );
}

export default App;
