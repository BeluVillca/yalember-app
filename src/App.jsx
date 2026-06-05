import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// IMPORTA TUS ARCHIVOS DIRECTAMENTE AQUÍ
import imagenY1 from './assets/Y2.jpg';
import imagenY2 from './assets/Y2.jpg';
import imagenInfoEvento from './assets/info_evento.jpg';

function App() {
  // CONTADOR (Para el 12 de Junio de 2026)
  const targetDate = new Date("June 12, 2026 22:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // FORMULARIO CUMPLEAÑEROS
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [cumpleForm, setCumpleForm] = useState({ nombre: '', shot: 'Tequila' });

  const handleCumple = (e) => {
    e.preventDefault();
    alert(`¡Registrado! ${cumpleForm.nombre}, tu Shot de ${cumpleForm.shot} te espera en barra.`);
    setCumpleForm({ nombre: '', shot: 'Tequila' });
  };

  // DATA DE TU STAFF
  const staffList = [
    {
      id: 1,
      nombre: "BELU",
      rol: "YALEMBER",
      descripcion: "Listas VIP, reserva de entradas y reservas de mesas principales.",
      celular: "59176597401",
      avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000"
    },
    {
      id: 2,
      nombre: "ERI",
      rol: "YALEMBER",
      descripcion: "Listas VIP, reserva de entradas y reservas de mesas principales.",
      celular: "59175825075",
      avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000"
    },
    {
      id: 3,
      nombre:"JHAZ",
      rol: "YALEMBER",
      descripcion: "Listas VIP, reserva de entradas y reservas de mesas principales.",
      celular: "59178858660",
      avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000"
    },
    // DATA DE TU STAFF
  
  { id: 1, nombre: "Rodrigo", rol: "Obelisco", descripcion: "Reserva de entradas.", celular: "59160106933", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 2, nombre: "Adriel", rol: "Obelisco", descripcion: "Reserva de entradas.", celular: "59173517637", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 3, nombre: "Angel", rol: "Obelisco", descripcion: "Reserva de entradas.", celular: "59169733579", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 4, nombre: "Sami", rol: "Básico", descripcion: "Reserva de entradas.", celular: "59177557625", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 5, nombre: "Carlitos", rol: "Puras - Monoblock", descripcion: "Reserva de entradas.", celular: "59168084371", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 6, nombre: "Lucy", rol: "Puras - Monoblock", descripcion: "Reserva de entradas.", celular: "59165540389", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 7, nombre: "Edil", rol: "C. Económicas (Montes)", descripcion: "Reserva de entradas.", celular: "59165119676", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 8, nombre: "Anahi", rol: "Medicina", descripcion: "Reserva de entradas.", celular: "59165177878", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 9, nombre: "Vale", rol: "Medicina / Odontologia", descripcion: "Reserva de entradas.", celular: "59163237309", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 10, nombre: "Jhonatan", rol: "Humanidades - Monoblock", descripcion: "Reserva de entradas.", celular: "59177781823", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 11, nombre: "Wendy", rol: "Humanidades - Monoblock", descripcion: "Reserva de entradas.", celular: "59162438860", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 12, nombre: "Vero", rol: "C. Sociales - Monoblock", descripcion: "Reserva de entradas.", celular: "59179633599", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 13, nombre: "Jhona", rol: "Multicine - Av. Arce", descripcion: "Reserva de entradas.", celular: "59163214933", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 14, nombre: "Kathy", rol: "Salesiana", descripcion: "Reserva de entradas.", celular: "59173251850", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 15, nombre: "Axel", rol: "Unifranz", descripcion: "Reserva de entradas.", celular: "59177788100", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 16, nombre: "Álvaro", rol: "Loyola", descripcion: "Reserva de entradas.", celular: "59179548573", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 17, nombre: "Zule", rol: "Plaza San Fransisco", descripcion: "Reserva de entradas.", celular: "59174041227", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 18, nombre: "Abril", rol: "Plaza del Estudiante", descripcion: "Reserva de entradas.", celular: "59175845458", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" },
  { id: 19, nombre: "Julian", rol: "Estadium Hernando Siles", descripcion: "Reserva de entradas.", celular: "59162530775", avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000" }




  ];

  return (
    <div className="app-container px-3 overflow-hidden">
      
{/* NAVBAR SUPERIOR - CON TU ICONO ORIGINAL */}
<nav className="navbar navbar-dark fixed-top px-3 py-2.5" 
     style={{ 
       background: 'rgba(10, 10, 10, 0.8)', 
       backdropFilter: 'blur(15px)',
       borderBottom: '1px solid rgba(255, 0, 68, 0.15)',
       zIndex: 1050
     }}>
  <div className="container-fluid px-0 position-relative">
    
    {/* BRAND / LOGO */}
    <a className="navbar-brand text-white fw-bold" 
       style={{ letterSpacing: '2px' }} 
       href="#top"
    >
      <i className="bi bi-mask text-danger me-2"></i> LABUBU
    </a>
    
    {/* TU BOTÓN HAMBURGUESA ORIGINAL (Controlado por React) */}
    <button 
      className="navbar-toggler custom-toggler" 
      type="button" 
      onClick={() => setMenuAbierto(!menuAbierto)}
    >
      <span className="custom-toggler-icon"></span>
    </button>
    
    {/* MENÚ DESPLEGABLE ESTILO TARJETA PREMIUM */}
    <div className={`position-absolute end-0 ${menuAbierto ? 'd-block' : 'd-none'}`} 
         style={{ 
           top: '100%', 
           width: '260px', 
           marginTop: '10px',
           background: 'rgba(15, 15, 15, 0.98)',
           backdropFilter: 'blur(10px)',
           border: '1px solid rgba(255, 0, 68, 0.25)',
           borderRadius: '16px',
           padding: '12px',
           boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7)',
           zIndex: 1100
         }}>
      <ul className="navbar-nav d-flex flex-column gap-1 text-start m-0 p-0">
        
        <li className="nav-item">
          <a className="nav-link text-white-50 fw-semibold text-uppercase tracking-wider px-3 py-2.5 rounded-3 d-flex align-items-center gap-2 menu-fixed-link" 
             href="#top" 
             onClick={() => setMenuAbierto(false)} 
             data-bs-toggle="modal" 
             data-bs-target="#eventModal"
          >
            <i className="bi bi-calendar-event text-danger fs-5"></i>
            <span>Yalember</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white-50 fw-semibold text-uppercase tracking-wider px-3 py-2.5 rounded-3 d-flex align-items-center gap-2 menu-fixed-link" 
             href="#top" 
             onClick={() => setMenuAbierto(false)}
             data-bs-toggle="modal" 
             data-bs-target="#staffModal"
          >
            <i className="bi bi-people text-danger fs-5"></i>
            <span>Nuestro Staff</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white-50 fw-semibold text-uppercase tracking-wider px-3 py-2.5 rounded-3 d-flex align-items-center gap-2 menu-fixed-link" 
             href="#top" 
             onClick={() => setMenuAbierto(false)}
             data-bs-toggle="modal" 
             data-bs-target="#barModal"
          >
            <i className="bi bi-cup-straw text-danger fs-5"></i>
            <span>Bar Sorpresa</span>
          </a>
        </li>

      </ul>
    </div>

  </div>
</nav>

      {/* CABECERA (HERO) */}
      <div className="text-center mb-3 mt-5 pt-5">
        <span className="presenter-tag d-block mb-2">LABUBU EVENTS PRESENTA</span>
        <h1 className="brand-title display-4 fw-bold">YALEMBER</h1>
      </div>

     {/* CARRUSEL (SOLO IMÁGENES - SE VEN COMPLETAS) */}
      <div id="mainCarousel" className="carousel slide mb-4 shadow-lg rounded-4 overflow-hidden" data-bs-ride="carousel">
        <div className="carousel-inner bg-black">
          {/* Imagen 1 */}
          <div className="carousel-item active" data-bs-interval="3000">
            <img 
              src={imagenY2} 
              className="d-block w-100 img-fluid" 
              style={{ height: 'auto', maxHeight: '70vh', objectFit: 'contain' }} 
              alt="Promo 1" 
            />
          </div>
          
          {/* Imagen 2 (Misma imagen por el momento) */}
          <div className="carousel-item" data-bs-interval="3000">
            <img 
              src={imagenY2} 
              className="d-block w-100 img-fluid" 
              style={{ height: 'auto', maxHeight: '70vh', objectFit: 'contain' }} 
              alt="Promo 2" 
            />
          </div>
        </div>
      </div>

      {/* CONTADOR VISUAL RENDERIZADO */}
      <div className="countdown-wrapper mb-4 text-center p-3 rounded-4 container-fluid" style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 0, 64, 0.2)' }}>
        <p className="small mb-2 text-uppercase tracking-wider" style={{ color: 'var(--text-muted)', letterSpacing: '2px', fontSize: '0.75rem' }}>El descontrol inicia en:</p>
        <div className="d-flex justify-content-center gap-2 gap-sm-3 flex-wrap">
          <div className="time-block text-center">
            <h2 className="fw-black m-0" style={{ color: 'var(--rojo-neon)', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', textShadow: '0 0 10px rgba(255,0,68,0.5)' }}>{timeLeft.dias}</h2>
            <span className="text-muted small" style={{ fontSize: '0.65rem' }}>DÍAS</span>
          </div>
          <div className="time-separator fw-bold text-muted" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>:</div>
          <div className="time-block text-center">
            <h2 className="fw-black m-0" style={{ color: 'var(--rojo-neon)', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', textShadow: '0 0 10px rgba(255,0,68,0.5)' }}>{String(timeLeft.horas).padStart(2, '0')}</h2>
            <span className="text-muted small" style={{ fontSize: '0.65rem' }}>HRS</span>
          </div>
          <div className="time-separator fw-bold text-muted" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>:</div>
          <div className="time-block text-center">
            <h2 className="fw-black m-0" style={{ color: 'var(--rojo-neon)', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', textShadow: '0 0 10px rgba(255,0,68,0.5)' }}>{String(timeLeft.minutos).padStart(2, '0')}</h2>
            <span className="text-muted small" style={{ fontSize: '0.65rem' }}>MIN</span>
          </div>
          <div className="time-separator fw-bold text-muted" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>:</div>
          <div className="time-block text-center">
            <h2 className="fw-black m-0" style={{ color: 'var(--rojo-neon)', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', textShadow: '0 0 10px rgba(255,0,68,0.5)' }}>{String(timeLeft.segundos).padStart(2, '0')}</h2>
            <span className="text-muted small" style={{ fontSize: '0.65rem' }}>SEG</span>
          </div>
        </div>
      </div>

      {/* GRID DE BOTONES TIPO APLICACIÓN MÓVIL */}
      <div className="action-grid mb-4">
        <div className="app-btn" data-bs-toggle="modal" data-bs-target="#eventModal">
          <i className="bi bi-calendar2-check-fill"></i>
          <span>El Evento</span>
        </div>
        <div className="app-btn" data-bs-toggle="modal" data-bs-target="#bandModal">
          <i className="bi bi-speaker-fill"></i>
          <span>Line UP</span>
        </div>
        <div className="app-btn" data-bs-toggle="modal" data-bs-target="#cumpleModal">
          <i className="bi bi-balloon-fill"></i>
          <span>LABUBU Cumpleañeros</span>
        </div>
        <div className="app-btn" data-bs-toggle="modal" data-bs-target="#barModal">
          <i className="bi bi-cup-straw"></i>
          <span>Bar Sorpresa</span>
        </div>
        <div className="app-btn" data-bs-toggle="modal" data-bs-target="#staffModal">
          <i className="bi bi-people-fill"></i>
          <span>Staff RRPP</span>
        </div>
        <div className="app-btn" data-bs-toggle="modal" data-bs-target="#nextEventsModal">
          <i className="bi bi-rocket-takeoff-fill"></i>
          <span>Próximos EVENTOS</span>
        </div>
      </div>
{/* REDES SOCIALES */}
<div className="text-center mt-5 mb-5 pb-5 sponsors-wrapper">
  {/* Subtítulo elegante */}
  <p className="text-secondary fw-bold text-uppercase tracking-widest mb-3" style={{ fontSize: '0.65rem', letterSpacing: '3px' }}>
    Síguenos y contáctanos
  </p>
  
  {/* Contenedor de botones flotantes */}
  <div className="d-flex justify-content-center gap-3">
    
    {/* TIKTOK */}
    <a 
      href="https://vt.tiktok.com/ZSQ8w2BhX/" 
      target="_blank" 
      rel="noreferrer" 
      className="d-flex align-items-center justify-content-center rounded-circle text-white shadow-sm social-link-btn"
      style={{ 
        width: '50px', 
        height: '50px', 
        background: 'rgba(255, 255, 255, 0.05)', 
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <i className="bi bi-tiktok fs-4"></i>
    </a>

    {/* INSTAGRAM (Opcional, pero ideal para eventos) */}
    <a 
      href="https://www.instagram.com/labubu_events?igsh=MTNzcDVwYWRtMTh6aA==" 
      target="_blank" 
      rel="noreferrer" 
      className="d-flex align-items-center justify-content-center rounded-circle text-white shadow-sm social-link-btn"
      style={{ 
        width: '50px', 
        height: '50px', 
        background: 'rgba(255, 255, 255, 0.05)', 
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <i className="bi bi-instagram fs-4"></i>
    </a>

    {/* WHATSAPP */}
    <a 
      href="https://chat.whatsapp.com/Kavs3lUQaBX49lVWZ7EsBs" 
      target="_blank" 
      rel="noreferrer" 
      className="d-flex align-items-center justify-content-center rounded-circle text-white shadow-sm social-link-btn"
      style={{ 
        width: '50px', 
        height: '50px', 
        background: 'rgba(255, 255, 255, 0.05)', 
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <i className="bi bi-whatsapp fs-4"></i>
    </a>

  </div>
</div>

      {/* BOTÓN FLOTANTE CONFIRMACIÓN */}
      <div className="cta-floating fixed-bottom p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
        <a href="https://wa.me/59176597401?text=Hola%20!%20Quiero%20asistir%20a%20YALEMBER" target="_blank" rel="noreferrer" className="btn btn-danger w-100 d-flex align-items-center justify-content-center gap-2 py-2 fw-bold rounded-pill shadow">
          <i className="bi bi-check2-square fs-5"></i> Confirmar Asistencia
        </a>
      </div>

      {/* ==============================================
          MODALES DE BOOTSTRAP (VENTANAS EMERGENTES)
          ============================================== */}

 {/* MODAL: EL EVENTO */}
<div className="modal fade" id="eventModal" tabIndex="-1" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0 bg-dark text-white shadow-2xl" style={{ borderRadius: '24px', overflow: 'hidden' }}>
      
      {/* Header minimalista */}
      <div className="modal-header border-0 px-4 pt-4 pb-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-danger-subtle text-danger px-2 py-1 rounded-3 fs-6">
            <i className="bi bi-calendar-event-fill"></i>
          </span>
          <h5 className="modal-title fw-bold tracking-wider m-0 text-uppercase small">El Evento</h5>
        </div>
        <button type="button" className="btn-close btn-close-white opacity-75" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div className="modal-body px-4 pb-4 text-center">
        
        {/* Imagen del Evento Principal */}
        <div className="position-relative mb-4 overflow-hidden rounded-4 shadow">
          <img 
            src={imagenInfoEvento} 
            alt="Información del Evento" 
            className="img-fluid w-100 object-fit-cover"
          />
        </div>
        
        {/* Intro */}
        <h6 className="text-white fw-bold text-uppercase tracking-widest small mb-2">La Fiesta Más Exclusiva</h6>
        <p className="text-white-50 small px-2 mb-4" style={{ lineHeight: '1.6' }}>
          Prepárate para una noche inolvidable. YALEMBER está apunto de aterrizar. ¿Te la pensas perder?
        </p>
        
        {/* BLOQUES DE INFORMACIÓN (Glassmorphism / Neon sutil) */}
        <div className="d-flex flex-column gap-2.5 mb-4">
          
          {/* FECHA */}
          <div className="d-flex align-items-center p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-10">
            <div className="bg-danger bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center border border-danger border-opacity-20 shadow-sm" style={{ width: '48px', height: '48px', minWidth: '48px' }}>
              <i className="bi bi-calendar-check-fill text-danger fs-5"></i>
            </div>
            <div className="text-start ms-3">
              <small className="d-block text-danger fw-bold tracking-wider uppercase" style={{ fontSize: '0.65rem' }}>DÍA DEL EVENTO</small>
              <span className="text-white fw-semibold small">Viernes, 12 de Junio</span>
            </div>
          </div>

          {/* LUGAR */}
          <div className="d-flex align-items-center p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-10">
            <div className="bg-danger bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center border border-danger border-opacity-20 shadow-sm" style={{ width: '48px', height: '48px', minWidth: '48px' }}>
              <i className="bi bi-geo-alt-fill text-danger fs-5"></i>
            </div>
            <div className="text-start ms-3">
              <small className="d-block text-danger fw-bold tracking-wider uppercase" style={{ fontSize: '0.65rem' }}>LUGAR</small>
              <span className="text-white fw-semibold small">SALON FANTASIO (Camacho, Esq. Colón)</span>
            </div>
          </div>

          {/* APERTURA */}
          <div className="d-flex align-items-center p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-10">
            <div className="bg-danger bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center border border-danger border-opacity-20 shadow-sm" style={{ width: '48px', height: '48px', minWidth: '48px' }}>
              <i className="bi bi-clock-fill text-danger fs-5"></i>
            </div>
            <div className="text-start ms-3">
              <small className="d-block text-danger fw-bold tracking-wider uppercase" style={{ fontSize: '0.65rem' }}>APERTURA</small>
              <span className="text-white fw-semibold small">16:00 Hrs - Llega temprano</span>
            </div>
          </div>

          {/* DRESS CODE */}
          <div className="d-flex align-items-center p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-10">
            <div className="bg-danger bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center border border-danger border-opacity-20 shadow-sm" style={{ width: '48px', height: '48px', minWidth: '48px' }}>
              <i className="bi bi-stars text-danger fs-5"></i>
            </div>
            <div className="text-start ms-3">
              <small className="d-block text-danger fw-bold tracking-wider uppercase" style={{ fontSize: '0.65rem' }}>DRESS CODE</small>
              <span className="text-white fw-semibold small">Casual / Prepara tu mejor outfit</span>
            </div>
          </div>
        </div>

        {/* ALERTA DE INGRESO (+18 MODERNO) */}
        <div className="p-3 rounded-4 text-start d-flex gap-3 align-items-center mb-4" 
             style={{ 
               background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.05) 0%, rgba(0, 0, 0, 0.4) 100%)', 
               border: '1px solid rgba(255, 193, 7, 0.2)',
               backdropFilter: 'blur(10px)'
             }}>
          <div className="bg-warning bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px', minWidth: '42px' }}>
            <i className="bi bi-exclamation-triangle-fill text-warning fs-5"></i>
          </div>
          <div style={{ fontSize: '0.8rem' }}>
            <strong className="text-warning d-block mb-0.5 tracking-wide small uppercase">REGLAS DE INGRESO (+18)</strong>
            <span className="text-white-50">Ingreso únicamente con Carnet de Identidad original vigente. Nos reservamos el derecho de admisión.</span>
          </div>
        </div>

        {/* MAPA VISUAL CON DISEÑO INTEGRADO */}
        <div className="position-relative rounded-4 overflow-hidden shadow-lg mt-2" style={{ height: '150px', background: '#000', border: '1px solid rgba(255, 0, 68, 0.15)' }}>
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&auto=format&fit=crop&q=80" 
            alt="Mapa de Ubicación" 
            className="w-100 h-100 object-fit-cover opacity-40" 
            style={{ filter: 'grayscale(30%)' }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3))' }}>
            <h6 className="text-white fw-bold mb-2 small tracking-wide">¿No sabes cómo llegar?</h6>
            <a href="https://maps.app.goo.gl/n1AVcJWxDTM2sVUN8?g_st=ac" target="_blank" rel="noreferrer" className="btn btn-danger rounded-pill fw-bold px-4 py-2 small shadow-sm" style={{ fontSize: '0.85rem', transition: 'all 0.2s ease-in-out' }}>
              <i className="bi bi-geo-alt-fill me-1.5"></i> Abrir en Google Maps
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

   {/* MODAL: LINE UP */}
<div className="modal fade" id="bandModal" tabIndex="-1" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0 bg-dark text-white shadow-2xl" style={{ borderRadius: '24px', overflow: 'hidden' }}>
      
      {/* Header con diseño minimalista */}
      <div className="modal-header border-0 px-4 pt-4 pb-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-danger-subtle text-danger px-2 py-1 rounded-3 fs-6">
            <i className="bi bi-music-note-list"></i>
          </span>
          <h5 className="modal-title fw-bold tracking-wider m-0 text-uppercase small">Line Up & En Vivo</h5>
        </div>
        <button type="button" className="btn-close btn-close-white opacity-75" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body px-4 pb-4">
        
        {/* Imagen del Evento Principal */}
        <div className="position-relative mb-4 overflow-hidden rounded-4 shadow">
          <img 
            src={imagenInfoEvento} 
            alt="Line Up del Evento" 
            className="img-fluid w-100 object-fit-cover"
            style={{ transition: 'transform 0.3s ease' }}
          />
        </div>
        
        {/* Tarjeta de Artista Invitado (Glassmorphism) */}
        <div className="mb-4 p-4 rounded-4 position-relative overflow-hidden" 
             style={{ 
               background: 'linear-gradient(135deg, rgba(255, 0, 68, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%)', 
               border: '1px solid rgba(255, 0, 68, 0.2)',
               backdropFilter: 'blur(10px)'
             }}>
          <span className="text-danger fw-semibold tracking-widest uppercase small mb-2 d-block">
            <i className="bi bi-mic-fill me-1"></i> Artista Invitado
          </span>
          <h2 className="fw-black text-white m-0 tracking-tight" style={{ fontSize: '2.25rem', letterSpacing: '-0.5px' }}>
            KUMBIA DALE
          </h2>
          <div className="mt-2 text-white-50 small">
            <i className="bi bi-clock me-1"></i> Espéralo <span className="mx-1">•</span> En Vivo
          </div>
        </div>
        
        {/* Sección de DJs */}
        <div className="mt-4">
          <div className="d-flex align-items-center justify-content-between border-bottom border-secondary border-opacity-25 pb-2 mb-3">
            <h6 className="fw-bold m-0 text-secondary text-uppercase small tracking-wider">
              <i className="bi bi-headphones me-2 text-danger"></i> Resident DJ
            </h6>
          </div>
          
          {/* Tarjeta DJ Único */}
          <div className="d-flex align-items-center gap-3 p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-10">
            <div className="bg-danger bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center border border-danger border-opacity-20 shadow-sm" 
                 style={{ width: '56px', height: '56px', minWidth: '56px' }}>
              <i className="bi bi-disc text-danger fs-3 animate-spin"></i>
            </div>
            <div>
              <h6 className="m-0 fw-bold text-white tracking-wide">DJ FANTASIO</h6>
              <p className="m-0 text-white-50 small mt-0.5">Reggaeton Old School & Perreo</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

      {/* MODAL: STAFF RRPP */}
      <div className="modal fade" id="staffModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content bg-dark">
            <div className="modal-header border-0">
              <h5 className="modal-title text-danger fw-bold"><i className="bi bi-people-fill me-2"></i> NUESTRO STAFF RRPP</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p className="text-muted small text-center mb-4">Ponte en contacto con nuestros relacionadores públicos para reservas.</p>
              {staffList.map((staff) => (
                <div key={staff.id} className="d-flex align-items-center gap-3 p-3 mb-3 rounded-4 shadow-sm" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 0, 68, 0.15)' }}>
                  <img src={staff.avatar} alt={staff.nombre} className="rounded-circle object-fit-cover shadow" style={{ width: '60px', height: '60px', border: '2px solid var(--rojo-neon)' }} />
                  <div className="flex-grow-1">
                    <h6 className="m-0 text-white fw-bold">{staff.nombre}</h6>
                    <small className="text-danger tracking-wider fw-semibold" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>{staff.rol}</small>
                    <p className="m-0 text-muted mt-1" style={{ fontSize: '0.8rem', lineHeight: '1.2' }}>{staff.descripcion}</p>
                  </div>
                  <div>
                    <a href={`https://wa.me/${staff.celular}?text=Hola%20${encodeURIComponent(staff.nombre)}!%20Quiero%20hacer%20una%20reserva%20para%20YALEMBER.`} target="_blank" rel="noreferrer" className="btn btn-success btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center shadow-lg" style={{ width: '38px', height: '38px', backgroundColor: '#25D366', borderColor: '#25D366' }}>
                      <i className="bi bi-whatsapp fs-5 text-white"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

{/* MODAL: CUMPLEAÑEROS LABUBU */}
<div className="modal fade" id="cumpleModal" tabIndex="-1" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable">
    
    <div className="modal-content border-0 bg-dark text-white shadow-2xl" style={{ borderRadius: '24px', overflow: 'hidden' }}>
      
      {/* Header minimalista */}
      <div className="modal-header border-0 px-4 pt-4 pb-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-danger-subtle text-danger px-2 py-1 rounded-3 fs-6">
            <i className="bi bi-gift-fill"></i>
          </span>
          <h5 className="modal-title fw-bold tracking-wider m-0 text-uppercase small">Labubu Cumpleañeros</h5>
        </div>
        <button type="button" className="btn-close btn-close-white opacity-75" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div className="modal-body px-4 pb-4">
        {/* TÍTULO DE BIENVENIDA */}
        <h6 className="text-white fw-bold text-uppercase tracking-widest small text-center mb-3 px-2" style={{ lineHeight: '1.4' }}>
          Festeja tu cumpleaños con Labubu Events en el Yalember
        </h6>
        
        {/* TARJETA DE BENEFICIOS (Glassmorphism / Red Neon) */}
        <div className="p-4 rounded-4 mb-4 position-relative overflow-hidden" 
             style={{ 
               background: 'linear-gradient(135deg, rgba(255, 0, 68, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%)', 
               border: '1px solid rgba(255, 0, 68, 0.2)',
               backdropFilter: 'blur(10px)'
             }}>
          <span className="text-danger fw-semibold tracking-wider small mb-2 d-block text-uppercase">
            <i className="bi bi-stars me-1"></i> Tus Beneficios del Mes:
          </span>
          <ul className="list-unstyled m-0 text-white-50 small d-flex flex-column gap-2" style={{ lineHeight: '1.5' }}>
            <li className="d-flex align-items-start gap-2">
              <i className="bi bi-check2-circle text-danger mt-0.5"></i>
              <span>Tu ingreso es <strong className="text-white">TOTALMENTE GRATIS</strong>.</span>
            </li>
            <li className="d-flex align-items-start gap-2">
              <i className="bi bi-check2-circle text-danger mt-0.5"></i>
              <span>Tienes <strong className="text-white">+1 Invitación VIP</strong> para tu acompañante.</span>
            </li>
            <li className="d-flex align-items-start gap-2">
              <i className="bi bi-check2-circle text-danger mt-0.5"></i>
              <span>Te regalamos <strong className="text-white">1 Shot de cortesía</strong> en la barra.</span>
            </li>
          </ul>
        </div>

        {/* FORMULARIO CON ENVÍO A WHATSAPP */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            
            // Reemplazar espacios y caracteres para la URL de WhatsApp
            const telefono = "59176597401"; // Código de país para Bolivia + tu número
            const textoMensaje = `¡Hola! Me gustaría registrar mi cumpleaños 🎉\n\n` +
                                 `👤 *Nombre:* ${cumpleForm.nombre}\n` +
                                 `📅 *Fecha de Nacimiento:* ${cumpleForm.fechaNacimiento}\n` +
                                 `🍹 *Shot de Cortesía:* ${cumpleForm.shot || 'Tequila Dorado'}`;
            
            const urlWhatsapp = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(textoMensaje)}`;
            
            // Abre WhatsApp en una pestaña nueva
            window.open(urlWhatsapp, '_blank');
          }} 
          className="text-start px-1"
        >
          {/* CAMPO: NOMBRE */}
          <div className="mb-3">
            <label className="form-label text-white-50 small fw-semibold tracking-wide uppercase" style={{ fontSize: '0.7rem' }}>
              Nombre del Cumpleañero:
            </label>
            <input 
              type="text" 
              className="form-control bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white rounded-3 px-3 py-2 small shadow-sm" 
              placeholder="Ej: Rodrigo Paz" 
              required 
              style={{ transition: 'all 0.2s' }}
              value={cumpleForm.nombre} 
              onChange={e => setCumpleForm({...cumpleForm, nombre: e.target.value})}
            />
          </div>

          {/* CAMPO: FECHA DE NACIMIENTO */}
          <div className="mb-3">
            <label className="form-label text-white-50 small fw-semibold tracking-wide uppercase" style={{ fontSize: '0.7rem' }}>
              Fecha de Nacimiento:
            </label>
            <input 
              type="date" 
              className="form-control bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white rounded-3 px-3 py-2 small shadow-sm" 
              required 
              style={{ colorScheme: 'dark' }} // Hace que el calendario nativo sea oscuro
              value={cumpleForm.fechaNacimiento} 
              onChange={e => setCumpleForm({...cumpleForm, fechaNacimiento: e.target.value})}
            />
          </div>

          {/* CAMPO: SHOT */}
          <div className="mb-4">
            <label className="form-label text-white-50 small fw-semibold tracking-wide uppercase" style={{ fontSize: '0.7rem' }}>
              Elige tu Shot de Cortesía:
            </label>
            <select 
              className="form-select bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white rounded-3 px-3 py-2 small shadow-sm" 
              value={cumpleForm.shot} 
              onChange={e => setCumpleForm({...cumpleForm, shot: e.target.value})}
            >
              <option value="Tequila Dorado" className="bg-dark">Bebida Dinamita</option>
              <option value="Jägermeister Frio" className="bg-dark">Bebida Gas Lágrimogeno</option>
              <option value="Vodka Negro" className="bg-dark">Bebida Desbloqueo</option>
              <option value="Ron Fuego" className="bg-dark">Bebida Explosiva</option>
            </select>
          </div>

          {/* BOTÓN DE ACCIÓN WHATSAPP */}
          <button type="submit" className="btn btn-danger w-100 fw-bold rounded-pill py-2.5 shadow-sm" style={{ fontSize: '0.9rem' }}>
            <i className="bi bi-whatsapp me-2"></i> Enviar Registro por WhatsApp
          </button>
        </form>
      </div>
    </div>
  </div>
</div>


  {/* MODAL: BAR SORPRESA */}
<div className="modal fade" id="barModal" tabIndex="-1" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content border-0 bg-dark text-white shadow-2xl" style={{ borderRadius: '24px', overflow: 'hidden' }}>
      
      {/* Header minimalista */}
      <div className="modal-header border-0 px-4 pt-4 pb-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-danger-subtle text-danger px-2 py-1 rounded-3 fs-6">
            <i className="bi bi-cup-straw"></i>
          </span>
          <h5 className="modal-title fw-bold tracking-wider m-0 text-uppercase small">Bar Sorpresa</h5>
        </div>
        <button type="button" className="btn-close btn-close-white opacity-75" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body px-4 pb-4">
        <p className="text-white-50 small text-center mb-4 px-2" style={{ lineHeight: '1.5' }}>
          Tragos explosivos preparados en vivo por nuestros mejores bartenders.
        </p>
        
        {/* CONTENEDOR DE TRAGOS */}
        <div className="d-flex flex-column gap-3">
          
          {/* TRAGO 1: BEBIDA DINAMITA */}
          <div className="p-3 rounded-4 position-relative overflow-hidden" 
               style={{ 
                 background: 'linear-gradient(135deg, rgba(255, 0, 68, 0.08) 0%, rgba(0, 0, 0, 0.5) 100%)', 
                 border: '1px solid rgba(255, 0, 68, 0.2)',
                 backdropFilter: 'blur(10px)'
               }}>
            <div className="d-flex align-items-center justify-content-between mb-1.5">
              <span className="fw-bold text-white tracking-wide small text-uppercase">
                <i className="bi bi-fire text-danger me-1.5"></i> Bebida Dinamita
              </span>
              <span className="badge rounded-pill bg-danger bg-opacity-10 text-danger border border-danger border-opacity-20 extreme-small uppercase fw-bold px-2 py-0.5" style={{ fontSize: '0.6rem', letterSpacing: '0.5px' }}>
                Fuego Directo
              </span>
            </div>
            <p className="m-0 text-white-50 small" style={{ fontSize: '0.825rem', lineHeight: '1.4' }}>
              Mezcla explosiva de licores fuertes encendidos en fuego. Tómalo de un solo golpe.
            </p>
          </div>

          {/* TRAGO 2: GAS LACRIMÓGENO */}
          <div className="p-3 rounded-4 position-relative overflow-hidden" 
               style={{ 
                 background: 'linear-gradient(135deg, rgba(255, 0, 68, 0.04) 0%, rgba(0, 0, 0, 0.5) 100%)', 
                 border: '1px solid rgba(255, 0, 68, 0.15)',
                 backdropFilter: 'blur(10px)'
               }}>
            <div className="d-flex align-items-center justify-content-between mb-1.5">
              <span className="fw-bold text-white tracking-wide small text-uppercase">
                <i className="bi bi-cloud-haze2 text-danger me-1.5"></i> Gas Lacrimógeno
              </span>
              <span className="badge rounded-pill bg-danger bg-opacity-10 text-danger border border-danger border-opacity-20 extreme-small uppercase fw-bold px-2 py-0.5" style={{ fontSize: '0.6rem', letterSpacing: '0.5px' }}>
                Efecto Humo
              </span>
            </div>
            <p className="m-0 text-white-50 small" style={{ fontSize: '0.825rem', lineHeight: '1.4' }}>
              Trago ahumado con hielo seco y sabor ácido intenso. Te hará llorar pero pedirás más.
            </p>
          </div>

          {/* TRAGO 3: BEBIDA DESBLOQUEO */}
          <div className="p-3 rounded-4 position-relative overflow-hidden" 
               style={{ 
                 background: 'linear-gradient(135deg, rgba(255, 0, 68, 0.04) 0%, rgba(0, 0, 0, 0.5) 100%)', 
                 border: '1px solid rgba(255, 0, 68, 0.15)',
                 backdropFilter: 'blur(10px)'
               }}>
            <div className="d-flex align-items-center justify-content-between mb-1.5">
              <span className="fw-bold text-white tracking-wide small text-uppercase">
                <i className="bi bi-unlock-fill text-danger me-1.5"></i> Bebida Desbloqueo
              </span>
              <span className="badge rounded-pill bg-danger bg-opacity-10 text-danger border border-danger border-opacity-20 extreme-small uppercase fw-bold px-2 py-0.5" style={{ fontSize: '0.6rem', letterSpacing: '0.5px' }}>
                Rompe Hielo
              </span>
            </div>
            <p className="m-0 text-white-50 small" style={{ fontSize: '0.825rem', lineHeight: '1.4' }}>
              El elixir ideal para quitar la timidez. Suave, frutal pero completamente engañoso.
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

      {/* MODAL: PRÓXIMOS EVENTOS */}
<div className="modal fade" id="nextEventsModal" tabIndex="-1" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content border-0 bg-dark text-white shadow-2xl" style={{ borderRadius: '24px', overflow: 'hidden' }}>
      
      {/* Header minimalista */}
      <div className="modal-header border-0 px-4 pt-4 pb-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-danger-subtle text-danger px-2 py-1 rounded-3 fs-6">
            <i className="bi bi-rocket-takeoff-fill"></i>
          </span>
          <h5 className="modal-title fw-bold tracking-wider m-0 text-uppercase small">Próximos Eventos</h5>
        </div>
        <button type="button" className="btn-close btn-close-white opacity-75" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      {/* Contenido con diseño de intriga / Glassmorphism */}
      <div className="modal-body text-center px-4 py-5">
        
        {/* Contenedor del Icono con brillo neón sutil */}
        <div className="d-inline-flex align-items-center justify-content-center mb-4 rounded-circle bg-danger bg-opacity-10 border border-danger border-opacity-20 shadow-lg" 
             style={{ width: '80px', height: '80px' }}>
          <i className="bi bi-calendar-event text-danger" style={{ fontSize: '2.25rem' }}></i>
        </div>
        
        {/* Bloque de Texto Estilizado */}
        <div className="p-4 rounded-4 position-relative overflow-hidden" 
             style={{ 
               background: 'linear-gradient(135deg, rgba(255, 0, 68, 0.04) 0%, rgba(0, 0, 0, 0.6) 100%)', 
               border: '1px solid rgba(255, 0, 68, 0.15)',
               backdropFilter: 'blur(10px)'
             }}>
          <h6 className="text-white fw-bold text-uppercase tracking-wide mb-2" style={{ fontSize: '1rem' }}>
            Pronto revelaremos más locuras...
          </h6>
          <p className="small text-white-50 m-0" style={{ lineHeight: '1.6' }}>
            Mantente atento a las redes oficiales de <strong className="text-white fw-semibold">LABUBU EVENTS</strong> para ser el primero en enterarte de nuestra próxima gran temática.
          </p>
        </div>

      </div>
    </div>
  </div>
</div>


{/* BOTÓN LARGO - PROMO BAR LIBRE */}
<div className="w-100 mt-4 px-2">
  <button 
    type="button" 
    className="btn w-100 py-3 rounded-4 fw-black tracking-widest text-uppercase d-flex align-items-center justify-content-center gap-2 shadow-lg bar-libre-btn"
    data-bs-toggle="modal" 
    data-bs-target="#barLibreModal"
    style={{
      background: 'linear-gradient(135deg, #832e2e 0%, #1a1a1a 100%)',
      color: '#fff',
      border: '1px solid rgba(255, 0, 68, 0.4)',
      fontSize: '0.95rem',
      letterSpacing: '2px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}
  >
    {/* Ícono de regalo cambiado a un rojo moderno y vibrante */}
    <i className="bi bi-gift-fill text-danger fs-5 animate-bounce" style={{ filter: 'drop-shadow(0 0 5px #ff0044)' }}></i>
    <span>Hora de Bar Libre</span>
  </button>
</div>

{/* MODAL: 1 HORA DE BAR LIBRE */}
<div className="modal fade" id="barLibreModal" tabIndex="-1" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered px-3">
    <div className="modal-content border-0 bg-dark text-white shadow-2xl" style={{ borderRadius: '24px', overflow: 'hidden' }}>
      
      {/* Header del Modal */}
      <div className="modal-header border-0 px-4 pt-4 pb-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          {/* Badge adaptado a rojo moderno */}
          <span className="badge bg-danger bg-opacity-10 text-danger px-2 py-1 rounded-3 fs-6 border border-danger border-opacity-25">
            <i className="bi bi-star-fill"></i>
          </span>
          <h5 className="modal-title fw-bold tracking-wider m-0 text-uppercase small text-danger">Beneficio Exclusivo</h5>
        </div>
        <button type="button" className="btn-close btn-close-white opacity-75" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      {/* Contenido del Modal */}
      <div className="modal-body text-center px-4 py-4">
        
        {/* Título Principal */}
        <h3 className="fw-black text-uppercase tracking-wide mb-3 text-white" style={{ fontSize: '1.6rem' }}>
          1 HORA DE BAR LIBRE
        </h3>
        
        {/* Línea divisoria neón */}
        <div className="mx-auto mb-4" style={{ width: '50px', height: '3px', background: '#ff0044', borderRadius: '2px' }}></div>

        {/* Caja de Información */}
        <div className="p-4 rounded-4 text-start mb-2" 
             style={{ 
               background: 'rgba(255, 255, 255, 0.03)', 
               border: '1px solid rgba(255, 255, 255, 0.08)' 
             }}>
          
          <div className="d-flex gap-3 mb-3">
            <div className="text-danger mt-1"><i className="bi bi-unlock-fill fs-4"></i></div>
            <div>
              <h6 className="fw-bold text-white mb-1 text-uppercase small tracking-wide">¿Cómo se desbloquea?</h6>
              <p className="small text-white-50 m-0">Se desbloquea automáticamente cuando compras tu entrada para el evento.</p>
            </div>
          </div>

          <div className="d-flex gap-3 pt-2 border-top border-secondary border-opacity-25">
            {/* Ícono de staff cambiado también a rojo neón para mantener la estética */}
            <div className="text-danger mt-1"><i className="bi bi-lightning-charge-fill fs-4" style={{ filter: 'drop-shadow(0 0 3px #ff0044)' }}></i></div>
            <div>
              <h6 className="fw-bold text-white mb-1 text-uppercase small tracking-wide">¡Asegura tu cupo!</h6>
              <p className="small text-white-50 m-0">Corre con tu staff de preferencia para adquirir tu ingreso antes de que se agoten.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</div>









    </div>
  );
}

export default App;