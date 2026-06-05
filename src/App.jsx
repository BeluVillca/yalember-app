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
      celular: "59172222222",
      avatar: "https://img.icons8.com/?size=100&id=HEBTcR9O3uzR&format=png&color=000000"
    },
    {
      id: 3,
      nombre:"JHAZ",
      rol: "YALEMBER",
      descripcion: "Listas VIP, reserva de entradas y reservas de mesas principales.",
      celular: "59172222222",
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
      
      {/* NAVBAR SUPERIOR BOOTSTRAP */}
      <nav className="navbar navbar-dark fixed-top custom-navbar px-3">
        <a className="navbar-brand text-white fw-bold" style={{letterSpacing: '2px'}} href="#top">
          <i className="bi bi-mask text-danger me-2"></i> LABUBU
        </a>
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="custom-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-end mt-2">
            <li className="nav-item"><a className="nav-link" href="#top" data-bs-toggle="modal" data-bs-target="#eventModal">Info Evento</a></li>
            <li className="nav-item"><a className="nav-link" href="#top" data-bs-toggle="modal" data-bs-target="#staffModal">Nuestro Staff</a></li>
            <li className="nav-item"><a className="nav-link" href="#top" data-bs-toggle="modal" data-bs-target="#barModal">Bar Sorpresa</a></li>
          </ul>
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
        <p className="small text-muted mb-2 text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '2px' }}>Síguenos y contáctanos</p>
        <div className="d-flex justify-content-center gap-4 text-secondary">
          <a href="TU_ENLACE_TIKTOK" target="_blank" rel="noreferrer" className="text-white hover-danger transition-all">
            <i className="bi bi-tiktok fs-3 sponsor-icon"></i>
          </a>
          <a href="TU_ENLACE_WHATSAPP" target="_blank" rel="noreferrer" className="text-success hover-danger transition-all">
            <i className="bi bi-whatsapp fs-3 sponsor-icon"></i>
          </a>
        </div>
      </div>

      {/* BOTÓN FLOTANTE CONFIRMACIÓN */}
      <div className="cta-floating fixed-bottom p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
        <a href="https://wa.me/59176597401?text=Hola%20LABUBU!%20Quiero%20asistir%20a%20YALEMBER" target="_blank" rel="noreferrer" className="btn btn-danger w-100 d-flex align-items-center justify-content-center gap-2 py-2 fw-bold rounded-pill shadow">
          <i className="bi bi-check2-square fs-5"></i> Confirmar Asistencia
        </a>
      </div>

      {/* ==============================================
          MODALES DE BOOTSTRAP (VENTANAS EMERGENTES)
          ============================================== */}

 {/* MODAL: EL EVENTO */}
      <div className="modal fade" id="eventModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content bg-dark" style={{ border: '1px solid rgba(255,0,68,0.2)' }}>
            <div className="modal-header border-0 pb-0">
              <h5 className="modal-title text-danger fw-bold"><i className="bi bi-calendar-event-fill me-2"></i> EL EVENTO</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            
            <div className="modal-body text-center pt-2">
              <img src={imagenInfoEvento} alt="Información del Evento" className="img-fluid rounded-4 mb-4 shadow-lg" style={{ border: '2px solid rgba(255,0,68,0.3)' }} />
              
              <h6 className="text-white fw-bold text-uppercase tracking-wider mb-2" style={{ letterSpacing: '1px' }}>La Fiesta Más Exclusiva</h6>
              <p className="text-muted small px-2 mb-4">Prepárate para una noche inolvidable. YALEMBER llega con una producción de primer nivel, luces láser, sonido envolvente y el mejor ambiente de la ciudad.</p>
              
              {/* BLOQUES DE INFORMACIÓN ESTILO BOTONES/WIDGETS */}
              <div className="d-flex flex-column gap-2 mb-4">
                
                {/* NUEVO BLOQUE: DÍA / FECHA */}
                <div className="d-flex align-items-center p-3 rounded-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="bg-danger rounded-circle d-flex justify-content-center align-items-center me-3 shadow" style={{ width: '45px', height: '45px' }}>
                    <i className="bi bi-calendar-check-fill text-white fs-5"></i>
                  </div>
                  <div className="text-start">
                    <small className="d-block text-danger fw-bold" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>DÍA DEL EVENTO</small>
                    <span className="text-white fw-semibold small">Viernes, 12 de Junio</span>
                  </div>
                </div>

                <div className="d-flex align-items-center p-3 rounded-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="bg-danger rounded-circle d-flex justify-content-center align-items-center me-3 shadow" style={{ width: '45px', height: '45px' }}>
                    <i className="bi bi-geo-alt-fill text-white fs-5"></i>
                  </div>
                  <div className="text-start">
                    <small className="d-block text-danger fw-bold" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>LUGAR</small>
                    <span className="text-white fw-semibold small">SALON FANTASIO (Camacho, Esq. Colón)</span>
                  </div>
                </div>

                <div className="d-flex align-items-center p-3 rounded-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="bg-danger rounded-circle d-flex justify-content-center align-items-center me-3 shadow" style={{ width: '45px', height: '45px' }}>
                    <i className="bi bi-clock-fill text-white fs-5"></i>
                  </div>
                  <div className="text-start">
                    <small className="d-block text-danger fw-bold" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>APERTURA</small>
                    <span className="text-white fw-semibold small">16:00 Hrs - Llega temprano</span>
                  </div>
                </div>

                <div className="d-flex align-items-center p-3 rounded-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="bg-danger rounded-circle d-flex justify-content-center align-items-center me-3 shadow" style={{ width: '45px', height: '45px' }}>
                    <i className="bi bi-stars text-white fs-5"></i>
                  </div>
                  <div className="text-start">
                    <small className="d-block text-danger fw-bold" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>DRESS CODE</small>
                    <span className="text-white fw-semibold small">Casual / Prepara tu mejor outfit</span>
                  </div>
                </div>
              </div>

              {/* ALERTA DE INGRESO */}
              <div className="alert p-3 rounded-4 text-start d-flex gap-3 align-items-center mb-4" style={{ background: 'rgba(255, 193, 7, 0.1)', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                <i className="bi bi-exclamation-triangle-fill text-warning fs-3"></i>
                <div style={{ fontSize: '0.8rem' }}>
                  <strong className="text-warning d-block mb-1">REGLAS DE INGRESO (+18)</strong>
                  <span className="text-white-50">Ingreso únicamente con Carnet de Identidad original vigente. Nos reservamos el derecho de admisión.</span>
                </div>
              </div>

              {/* MAPA VISUAL CON BOTÓN SUPERPUESTO */}
              <div className="position-relative rounded-4 overflow-hidden border border-danger shadow-lg mt-2" style={{ height: '140px', background: '#000' }}>
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&auto=format&fit=crop&q=80" 
                  alt="Mapa de Ubicación" 
                  className="w-100 h-100 object-fit-cover opacity-50" 
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center" style={{ background: 'rgba(0,0,0,0.3)' }}>
                  <h6 className="text-white fw-bold mb-2 text-shadow">¿No sabes cómo llegar?</h6>
                  <a href="https://maps.app.goo.gl/n1AVcJWxDTM2sVUN8?g_st=ac" target="_blank" rel="noreferrer" className="btn btn-danger rounded-pill fw-bold px-4 py-2 shadow-lg hover-scale transition-all">
                    <i className="bi bi-geo-alt-fill me-2"></i> Abrir en Google Maps
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
          <div className="modal-content bg-dark">
            <div className="modal-header border-0">
              <h5 className="modal-title text-danger fw-bold"><i className="bi bi-music-note-list me-2"></i> LINE UP & EN VIVO</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center">
              
              {/* IMAGEN AÑADIDA AQUÍ */}
              <img src={imagenInfoEvento} alt="Line Up del Evento" className="img-fluid rounded-4 mb-3 shadow-lg" style={{ border: '1px solid rgba(255,0,68,0.3)' }} />
              
              <div className="mb-4 p-3 rounded-4" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--rojo-neon)' }}>
                <h6 className="text-white fw-bold mb-1"><i className="bi bi-mic-fill me-2"></i> ARTISTA INVITADO</h6>
                <h3 className="text-danger fw-black text-uppercase" style={{ textShadow: '0 0 10px rgba(255,0,68,0.5)' }}>KUMBIA DALE</h3>
                <p className="text-muted small m-0">Tocando todos sus éxitos totalmente en vivo a la medianoche.</p>
              </div>
              
              <h6 className="text-white fw-bold mb-3 text-start border-bottom border-danger pb-2"><i className="bi bi-headphones me-2"></i> DJs RESIDENTES</h6>
              
              <div className="d-flex align-items-center gap-3 mb-3 text-start">
                <div className="bg-black rounded-circle d-flex align-items-center justify-content-center border border-danger" style={{ width: '50px', height: '50px' }}>
                  <i className="bi bi-disc text-danger fs-4"></i>
                </div>
                <div>
                  <h6 className="m-0 text-white">DJ FANTASIO</h6>
                  <small className="text-muted">Reggaeton Old School & Perreo</small>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 mb-2 text-start">
                <div className="bg-black rounded-circle d-flex align-items-center justify-content-center border border-danger" style={{ width: '50px', height: '50px' }}>
                  <i className="bi bi-speaker text-danger fs-4"></i>
                </div>
              </div>
            </div>
          </div>s
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
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark" style={{ border: '1px solid rgba(255,0,68,0.2)' }}>
            <div className="modal-header border-0 pb-0">
              <h5 className="modal-title text-danger fw-bold"><i className="bi bi-gift-fill me-2"></i> LABUBU CUMPLEAÑEROS</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            
            <div className="modal-body text-center pt-2">
              {/* TÍTULO DE BIENVENIDA */}
              <h6 className="text-white fw-black text-uppercase tracking-wider mb-3 px-2" style={{ fontSize: '0.95rem', letterSpacing: '1px', color: 'var(--rojo-neon)' }}>
                 FESTEJA TU CUMPLEAÑOS CON LABUBU EVENTS EN EL YALEMBER 
              </h6>
              
              {/* TARJETA DE BENEFICIOS */}
              <div className="p-3 rounded-4 text-start mb-4 shadow-sm" style={{ background: 'rgba(255, 0, 64, 0.08)', border: '1px solid rgba(255, 0, 64, 0.25)' }}>
                <span className="d-block text-danger fw-bold small mb-2"><i className="bi bi-stars"></i> TUS BENEFICIOS POR SER TU MES:</span>
                <ul className="list-unstyled m-0 text-white-50 small d-flex flex-column gap-1">
                  <li><i className="bi bi-check2 text-danger me-2"></i>Tu ingreso es <strong>TOTALMENTE GRATIS</strong>.</li>
                  <li><i className="bi bi-check2 text-danger me-2"></i>Tienes <strong>+1 Invitación VIP</strong> para tu acompañante.</li>
                  <li><i className="bi bi-check2 text-danger me-2"></i>Te regalamos <strong>1 Shot de cortesía</strong> en la barra.</li>
                </ul>
              </div>

              {/* FORMULARIO */}
              <form onSubmit={handleCumple} className="text-start px-1">
                {/* CAMPO: NOMBRE */}
                <div className="mb-3">
                  <label className="form-label text-white-50 small fw-semibold">Nombre del Cumpleañero:</label>
                  <input 
                    type="text" 
                    className="form-control custom-input bg-black text-white border-secondary rounded-3" 
                    placeholder="Ej: Rodrigo Paz" 
                    required 
                    value={cumpleForm.nombre} 
                    onChange={e => setCumpleForm({...cumpleForm, nombre: e.target.value})}
                  />
                </div>

                {/* NUEVO CAMPO: FECHA DE NACIMIENTO */}
                <div className="mb-3">
                  <label className="form-label text-white-50 small fw-semibold">Fecha de Nacimiento:</label>
                  <input 
                    type="date" 
                    className="form-control custom-input bg-black text-white border-secondary rounded-3" 
                    required 
                    value={cumpleForm.fechaNacimiento} 
                    onChange={e => setCumpleForm({...cumpleForm, fechaNacimiento: e.target.value})}
                  />
                </div>

                {/* CAMPO: SHOT */}
                <div className="mb-4">
                  <label className="form-label text-white-50 small fw-semibold">Elige tu Shot de Cortesía:</label>
                  <select 
                    className="form-select custom-input bg-black text-white border-secondary rounded-3" 
                    value={cumpleForm.shot} 
                    onChange={e => setCumpleForm({...cumpleForm, shot: e.target.value})}
                  >
                    <option value="Tequila">Tequila Dorado</option>
                    <option value="Jägermeister">Jägermeister Frio</option>
                    <option value="Vodka">Vodka Negro</option>
                    <option value="Ron">Ron Fuego</option>
                  </select>
                </div>

                {/* BOTÓN DE ACCIÓN */}
                <button type="submit" className="btn btn-danger w-100 fw-bold rounded-pill py-2.5 shadow hover-scale transition-all">
                  <i className="bi bi-balloon-heart-fill me-2"></i> Registrar mi Cumpleaños
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: BAR SORPRESA */}
      <div className="modal fade" id="barModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content bg-dark">
            <div className="modal-header border-0">
              <h5 className="modal-title text-danger fw-bold"><i className="bi bi-cup-straw me-2"></i> BAR SORPRESA</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p className="text-muted small text-center mb-4">Tragos explosivos preparados en vivo por nuestros bartenders.</p>
              
              <div className="drink-card p-3 mb-3 border border-danger rounded-3" style={{ background: 'rgba(255,0,0,0.05)' }}>
                <div className="drink-title fw-bold text-danger"><i className="bi bi-fire me-2"></i> BEBIDA DINAMITA</div>
                <div className="small text-white mt-1">Mezcla explosiva de licores fuertes encendidos en fuego. Tómalo de un solo golpe.</div>
              </div>

              <div className="drink-card p-3 mb-3 border border-warning rounded-3" style={{ background: 'rgba(255,255,0,0.05)' }}>
                <div className="drink-title text-warning fw-bold"><i className="bi bi-cloud-haze2 me-2"></i> GAS LACRIMÓGENO</div>
                <div className="small text-white mt-1">Trago ahumado con hielo seco y sabor ácido intenso. Te hará llorar pero pedirás más.</div>
              </div>

              <div className="drink-card p-3 mb-3 border border-info rounded-3" style={{ background: 'rgba(0,255,255,0.05)' }}>
                <div className="drink-title text-info fw-bold"><i className="bi bi-unlock-fill me-2"></i> BEBIDA DESBLOQUEO</div>
                <div className="small text-white mt-1">El elixir ideal para quitar la timidez. Suave, frutal pero engañoso.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: PRÓXIMOS EVENTOS */}
      <div className="modal fade" id="nextEventsModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark">
            <div className="modal-header border-0">
              <h5 className="modal-title text-danger fw-bold"><i className="bi bi-rocket-takeoff-fill me-2"></i> PRÓXIMOS EVENTOS</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center py-5">
              <i className="bi bi-calendar-x text-muted" style={{fontSize: '3rem'}}></i>
              <h6 className="mt-3 text-white fw-bold">Pronto revelaremos más locuras...</h6>
              <p className="small text-muted mt-2">Mantente atento a las redes de <strong>LABUBU EVENTS</strong> para enterarte de nuestra próxima gran temática.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;