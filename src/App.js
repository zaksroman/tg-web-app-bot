import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Routes, Route} from "react-router-dom";
import ProductList from "./Routes/ProductList/ProductList";
import BigProductItem from "./Routes/BigItem/BigProductItem";
import Basket from "./Routes/Basket/Basket";
import PersonalData from "./Routes/PersaanalData/PersonalData";

function App() {
  const {tg} = useTelegram()

  useEffect(()=> {
    tg.ready()
    tg.expand()
    tg.isClosingConfirmationEnabled = true
  }, [])


  return (
    <div className="App">
        <Routes>
            <Route index element={<ProductList />}/>
            <Route path={'/bigproructitem/:id'} element={ <BigProductItem />}/>
            <Route path={'/basket'} element={<Basket/>}/>
            <Route path={'/personaldata'} element={<PersonalData/>}/>
        </Routes>
    </div>
  );
}

export default App;
