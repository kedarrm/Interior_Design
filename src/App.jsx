import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/HomeComponent/Navbar'
import Home from './pages/Home'
import ProcessPage from './pages/Process'
import ProjectsPage from './pages/Projects'
import ContactPage from './pages/Contact'
import ServicesPage from './pages/Services'

function App() {

  return (
    <div className="bg-[#f7f5f2] text-neutral-900 min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/Process" element={<ProcessPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
