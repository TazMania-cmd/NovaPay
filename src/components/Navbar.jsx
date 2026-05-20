const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-glass glass">
        <div className="logo">
          NOVA PAY <span>| GATEWAY FINTECH</span>
        </div>
        <div className="nav-links">
          <a href="#home">INICIO</a>
          <a href="#projects">PROJETOS</a>
          <a href="#services">SERVICOS</a>
          <a href="#experience">EXPERIENCIA</a>
          <a href="#about">SOBRE</a>
          <a href="#contact">CONTATO</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
