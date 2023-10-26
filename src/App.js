import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./Components/hooks/useTelegram";
import {Routes, Route} from "react-router-dom";
import ProductList from "./Components/ProductList/ProductList";
import BigProductItem from "./Components/ProductItem/BigItem/BigProductItem";
import Basket from "./Components/Basket/Basket";
import PersonalData from "./Components/PersaanalData/PersonalData";

function App() {
  const {tg} = useTelegram()

  useEffect(()=> {
    tg.ready()
    tg.expand()
    tg.isClosingConfirmationEnabled = true
  }, [])

    useEffect(() =>{
        tg.BackButton.show()
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
