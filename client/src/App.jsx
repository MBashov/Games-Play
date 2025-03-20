import { useState } from 'react'
import { Routes, Route } from 'react-router'

import { userContext } from './contexts/userContext'

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from './components/register/Register'
import CreateGame from './components/create-game/CreateGame'
import Catalog from './components/catalog/Catalog'
import DetailsGame from './components/details-game/DetailsGame'
import EditGame from './components/edit-game/EditGame'
import Logout from './components/logout/Logout'

function App() {

    const [authData, setAuthData] = useState({});

    const userLoginHandler = (data) => {
        setAuthData(data);
    }

    const userLogoutHandler = () => {
        setAuthData({});
    }

    return (
        <userContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
            <div id="box">
                <main id="main-content">
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/games' element={<Catalog />} />
                        <Route path='/games/:gameId/details' element={<DetailsGame />} />
                        <Route path='/games/:gameId/edit' element={<EditGame />} />
                        <Route path='/games/create' element={<CreateGame />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/logout' element={<Logout />} />
                    </Routes>
                </main>
            </div>
        </userContext.Provider>
    )
}

export default App
