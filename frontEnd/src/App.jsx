import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import Tesla from './pages/Tesla'
import NotFound from './pages/NotFound'
import Lucid from './pages/Lucid'
import Rivian from './pages/Rivian'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Contact from './components/Contact'
import LuxuryCars from './pages/LuxuryCars'
import LaunchPage from './pages/LaunchPage'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path="/launchpage" element={<LaunchPage />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/tesla" element={<Tesla />}/>
        <Route path="/lucid" element={<Lucid />}/>
        <Route path="/rivian" element={<Rivian />}/>
        <Route path="/luxurycars" element={<LuxuryCars />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>

    </>
  )
}

export default App
