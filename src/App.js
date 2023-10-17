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

  useEffect(()=> {
    tg.ready()
  }, [])


  return (
    <div className="App">
        <link rel="stylesheet" href=""/>
        <Routes>
            <Route index element={<ProductList/>}/>
            <Route path={'/bigproructitem/:id'} element={ <BigProoductItem/>}}/>
            <Route path={'/basket'} element={<Basket/>}/>
        </Routes>
    </div>
  );
}

export default App;
