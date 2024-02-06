import './App.module.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Routes, Route} from "react-router-dom";
import ProductList from "./Routes/ProductList/ProductList";
import BigProductItem from "./Routes/BigItem/BigProductItem";
import Basket from "./Routes/Basket/Basket";
import PersonalData from "./Routes/PersaanalData/PersonalData";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await fetch('http://localhost:8000/api/getProducts');
    //             const data = await response.json();
    //             dispatch({ type: 'SET_PRODUCTS', payload: data});
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     })();
    // }, []);


  const {tg} = useTelegram()

  useEffect(()=> {
    tg.ready()
    tg.expand()
    tg.isClosingConfirmationEnabled = true
  }, [])

    function setupScrollbarFade() {
        let timer;
        const body = document.querySelector('body');

        function resetTimer() {
            clearTimeout(timer); // Очищаем существующий таймер
            body.classList.remove('body-scrollbar-hidden');


            timer = setTimeout(() => {
                body.classList.add('body-scrollbar-hidden');
            }, 100);
        }


        window.addEventListener('scroll', resetTimer, false);
        window.addEventListener('touchmove', resetTimer, false);

        resetTimer();
    }

    document.addEventListener('DOMContentLoaded', setupScrollbarFade);

  return (
    <div className="App">
        <Routes>
            <Route index element={<ProductList />}/>
            <Route path={'/bigproructitem/:_id'} element={ <BigProductItem />}/>
            <Route path={'/basket'} element={<Basket/>}/>
            <Route path={'/personaldata'} element={<PersonalData/>}/>
        </Routes>
    </div>
  );
}

export default App;
