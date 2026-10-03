import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <>
      <Navbar theme={theme} toggle={toggle} />
      <main>
        <Home />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Kent Medina
      </footer>
    </>
  )
}

export default App
