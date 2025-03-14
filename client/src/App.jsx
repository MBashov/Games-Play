import { Routes, Route } from 'react-router'

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from './components/register/Register'
import CreateGame from './components/create-game/CreateGame'
import Catalog from './components/catalog/Catalog'
import DetailsGame from './components/details-game/DetailsGame'
import EditGame from './components/edit-game/EditGame'
import { useState } from 'react'

function App() {

  const [email, setemail] = useState('');

  const setEmailHandler = (email) => {
    setemail(email);
  }

  return (
    <div id="box">
      <main id="main-content">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<Catalog />} />
          <Route path='/games/:gameId/details' element={<DetailsGame email={email} />} />
          <Route path='/games/:gameId/edit' element={<EditGame />} />
          <Route path='/games/create' element={<CreateGame />} />
          <Route path='/login' element={<Login onLogin={setEmailHandler} />} />
          <Route path='/register' element={<Register />} />
        </Routes>


      </main>

    </div>
  )
}

export default App
