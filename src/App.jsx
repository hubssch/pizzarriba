import Header from './Components/Header.jsx'
import Menu from './Components/Menu.jsx'
import Reservations from './Components/Reservations.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="pb-12">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
