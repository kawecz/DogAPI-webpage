import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Main from './pages/Main.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import './App.css'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<MainLayout />}>
       <Route index element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
       </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
