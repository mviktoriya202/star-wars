import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/homePage/homePage.tsx";
import {InfoPage} from "./pages/infoPage/infoPage.tsx";
import {Header} from "./shared/ui";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/:id' element={<InfoPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
