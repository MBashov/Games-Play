import { Routes, Route } from 'react-router'

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from './components/register/Register'
import CreateGame from './components/create-game/CreateGame'
import Catalog from './components/catalog/Catalog'
import DetailsGame from './components/details-game/DetailsGame'

function App() {

  return (
    <div id="box">
      <main id="main-content">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<Catalog />} />
          <Route path='/games/:gameId/details' element={<DetailsGame />} />
          <Route path='/games/create' element={<CreateGame />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>


      </main>

    </div>
  )
}

export default App
