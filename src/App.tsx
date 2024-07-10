import { Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/homePage/homePage.tsx";
import {InfoPage} from "./pages/infoPage/infoPage.tsx";
import {Header} from "./shared/ui";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/:id' element={<InfoPage/>}/>
            </Routes>
        </>
    )
}

export default App
