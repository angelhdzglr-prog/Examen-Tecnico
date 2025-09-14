import { useEffect, useState } from "react";
import "./Inicio.css";

import Slider1 from "./assets/Slider-1.png";
import Slider2 from "./assets/Slider-2.png";
import Slider3 from "./assets/Slider-3.png";

export default function Inicio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const slides = [
    {
      titulo: "Brand naming & guidelines",
      proyecto: "Lean Product Roadmap",
      year: "2019 Project",
      image: Slider1,
    },
    {
      titulo: "Brand identify & merchandise",
      proyecto: "New Majestic Hotel",
      year: "2018 Project",
      image: Slider2,
    },
    {
      titulo: "Brand identity & web design",
      proyecto: "Crypto dashboard",
      year: "2016 Project",
      image: Slider3,
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  // Cerrar menú al redimensionar la ventana (si se cambia a desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');
      }
    };

    // Controlar el scroll del body cuando el menú está abierto
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <div style={{ padding: '0', margin: '0' }}>
      <div className="inicio-header pad-nav">
        <div className="titulo-logo">
          <h1>creative</h1>
        </div>
        
        {/* Botón de menú hamburguesa */}
        <button 
          className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Menú de navegación */}
        <nav className={`navbar estilo-lista ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-lista">
            <li className="navbar-elemento" onClick={handleLinkClick}>About</li>
            <li className="navbar-elemento" onClick={handleLinkClick}>Service</li>
            <li className="navbar-elemento" onClick={handleLinkClick}>Projects</li>
            <li>
              <button className="boton-secundario" onClick={handleLinkClick}>Schedule Call</button>
            </li>
          </ul>
        </nav>
      </div>

      <section className="encabezado-section">
        <div className="encabezado-content">
          <h1 className="titulos">Branding & website design agency</h1>
          <p className="texto">
            We specialize in visual storytelling by creating cohesive brand and
            website design solutions for small businesses, giving lasting
            impressions to audiences in a digital world.
          </p>
          <button className="boton">Learn More</button>
        </div>
        <div className="encabezado-image"></div>
      </section>

      <div className="inicio-header espaciado">
        <div className="segundo-img"></div>
        <div className="segunda-text">
          <div className="margen-design">
            <h1 className="titulo-blanco">
              <span>Design</span> is strategic.
            </h1>
            <p className="texto-blanco">
              "A well-crafted design strategy consistently produces desired
              outcomes and brand awareness. We are firm believers that success
              lies in creative collaboration with our clients."
            </p>
            <button className="boton-terceario">Schedule a Call</button>
          </div>
        </div>
      
        <div className="lista-titulo-estilo">
          <h1 className="estilo-titulo titulo-lista">Our approach for creating a winning brand</h1>
        </div>
        
        <div className="lista">
          <div className="lista-est">
            <div>
              <span className="numero">01</span>
              <h3 className="titulo-puntos">Brand Strategy</h3>
              <p className="texto-blanco"> Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key. </p>
            </div>
            <div>
              <span className="numero">02</span>
              <h3 className="titulo-puntos">Brand Design</h3>
              <p className="texto-blanco"> Keeping the brand design unique and meaningful helps in communicating the brand's timeless value effectively. </p>
            </div>
            <div>
              <span className="numero">03</span>
              <h3 className="titulo-puntos">Web Design</h3>
              <p className="texto-blanco"> A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues. </p>
            </div>
          </div>
        </div>
      </div>

      <div className="inicio-header slider-contenedor">
        <div className="fondo-slider">
          <h1 className="titulo-blanco">
            {slides[current].titulo}
            <div className="estilo-botones">
              <button className="btn-slider" onClick={prevSlide}>
                &lt;
              </button>
              <button className="btn-slider" onClick={nextSlide}>
                &gt;
              </button>
            </div>
          </h1>
        </div>

        <div className="tercera-imagen estilo-img">
          <img
            src={slides[current].image}
            alt={slides[current].proyecto}
            className="slider-image"
          />
          <div className="slider-caption">
            <p className="titulo-puntos">{slides[current].proyecto}</p>
            <p className="texto-blanco">{slides[current].year}</p>
          </div>
        </div>
      </div>

      <footer className="footer-p">
        <h1 className="titulo-negro ancho-footer">Let's build something great together.</h1>
        <button className="boton">Schedule a Call</button>
      </footer>
    </div>
  );
}