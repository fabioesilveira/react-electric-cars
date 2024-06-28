import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import Tesla from './pages/Tesla'
import NotFound from './pages/NotFound'
import Lucid from './pages/Lucid'



function App() {

  return (
    <>
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path="/tesla" element={<Tesla />}/>
        <Route path="/lucid" element={<Lucid />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>

    </>
  )
}

export default App
