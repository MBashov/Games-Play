import { Routes, Route } from 'react-router'

import Header from "./components/Header"
import Home from "./components/home/Home"

function App() {

  return (
    <div id="box">
      <main id="main-content">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>


      </main>

    </div>
  )
}

export default App
