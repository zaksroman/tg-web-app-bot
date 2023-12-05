import './App.module.css';
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

    function setupScrollbarFade() {
        let timer;
        const body = document.querySelector('body');

        function resetTimer() {
            clearTimeout(timer); // Очищаем существующий таймер
            body.classList.remove('body-scrollbar-hidden'); // Показываем скроллбар

            // Устанавливаем новый таймер
            timer = setTimeout(() => {
                body.classList.add('body-scrollbar-hidden'); // Скрываем скроллбар
            }, 100); // Время ожидания перед исчезновением скроллбара, 2000 миллисекунд (2 секунды)
        }

        // Устанавливаем события, которые будут сбрасывать таймер исчезновения скроллбара
        window.addEventListener('scroll', resetTimer, false);
        // window.addEventListener('mousemove', resetTimer, false);
        // window.addEventListener('keydown', resetTimer, false);
        window.addEventListener('touchmove', resetTimer, false);

        // Запускаем таймер в первый раз
        resetTimer();
    }

// Инициализация функции после загрузки DOM
    document.addEventListener('DOMContentLoaded', setupScrollbarFade);

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
