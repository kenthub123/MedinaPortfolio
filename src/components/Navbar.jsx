export default function Navbar({ theme, toggle }) {
  return (
    <header className="nav">
      <a href="#home" className="logo">Kent Medina</a>
      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button className="btn ghost" onClick={toggle} aria-label="Toggle dark mode">
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </nav>
    </header>
  )
}
