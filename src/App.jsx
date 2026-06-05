
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// 👇 1. IMPORTA TUS ARCHIVOS DIRECTAMENTE AQUÍ 👇
import imagenY1 from './assets/Y1.jpg';
import imagenY2 from './assets/Y2.jpg';
import imagenInfoEvento from './assets/info_evento.jpg';


function App() {
  // ⏳ CONTADOR (Para el 12 de Junio de 2026)
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

  // 🎂 FORMULARIO CUMPLEAÑEROS
  const [cumpleForm, setCumpleForm] = useState({ nombre: '', shot: 'Tequila' });

  const handleCumple = (e) => {
    e.preventDefault();
    alert(`🎉 ¡Registrado! ${cumpleForm.nombre}, tu Shot de ${cumpleForm.shot} te espera en barra.`);
    setCumpleForm({ nombre: '', shot: 'Tequila' });
  };

  // 👥 DATA DE TU STAFF
  const staffList = [
    {
      id: 1,
      nombre: "Carlos Mendoza",
      rol: "Coordinador RRPP",
      descripcion: "Encargado de listas VIP y reservas de mesas principales. ¡Escríbeme para armar tu combo!",
      celular: "59171111111",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      nombre: "Andrea Rojas",
      rol: "Relaciones Públicas",
      descripcion: "Especialista en cumpleaños y beneficios grupales. Te aseguro los mejores shots de cortesía.",
      celular: "59172222222",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="app-container px-3">
      
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
      <div className="text-center mb-3 mt-4 pt-4">
        <span className="presenter-tag">LABUBU EVENTS PRESENTA</span>
        <h1 className="brand-title">YALEMBER</h1>
      </div>

      {/* 🎬 CARRUSEL MIXTO (VIDEO + IMÁGENES) */}
      <div id="mainCarousel" className="carousel slide mb-4 shadow-lg rounded-4 overflow-hidden" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="6000">
            <div className="ratio ratio-16x9">
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={imagenY1} className="d-block w-100" alt="Promo 1" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={imagenY2} className="d-block w-100" alt="Promo 2" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={imagenY1} className="d-block w-100" alt="Promo 3" />
          </div>
        </div>
      </div>

      {/* ⏳ CONTADOR VISUAL RENDERIZADO */}
      <div className="countdown-wrapper mb-4 text-center p-3 rounded-4" style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 0, 64, 0.2)' }}>
        <p className="small mb-2 text-uppercase tracking-wider" style={{ color: 'var(--text-muted)', letterSpacing: '2px', fontSize: '0.75rem' }}>El descontrol inicia en:</p>
        <div className="d-flex justify-content-center gap-3">
          <div className="time-block">
            <h2 className="fw-black m-0" style={{ color: 'var(--rojo-neon)', fontSize: '2rem', textShadow: '0 0 10px rgba(255,0,68,0.5)' }}>{timeLeft.dias}</h2>
            <span className="text-muted small" style={{ fontSize: '0.65rem' }}>DÍAS</span>
          </div>
          <div className="time-separator fw-bold text-muted fs-3">:</div>
          <div className="time-block">
            <h2 className="fw-black m-0" style={{ color: 'var(--rojo-neon)', fontSize: '2rem', textShadow: '0 0 10px rgba(255,0,68,0.5)' }}>{String(timeLeft.horas).padStart(2, '0')}</h2>
            <span className="text-muted small" style={{ fontSize: '0.65rem' }}>HRS</span>
          </div>
          <div className="time-separator fw-bold text-muted fs-3">:</div>
          <div className="time-block">
            <h2 className="fw-black m-0" style={{ color: 'var(--rojo-neon)', fontSize: '2rem', textShadow: '0 0 10px rgba(255,0,68,0.5)' }}>{String(timeLeft.minutos).padStart(2, '0')}</h2>
            <span className="text-muted small" style={{ fontSize: '0.65rem' }}>MIN</span>
          </div>
          <div className="time-separator fw-bold text-muted fs-3">:</div>
          <div className="time-block">
            <h2 className="fw-black m-0" style={{ color: 'var(--rojo-neon)', fontSize: '2rem', textShadow: '0 0 10px rgba(255,0,68,0.5)' }}>{String(timeLeft.segundos).padStart(2, '0')}</h2>
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
          <span> LABUBU Cumpleañeros</span>
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
          <span>Próximos</span>
        </div>
      </div>

      {/* AUSPICIADORES / SPONSORS */}
      <div className="text-center mt-5 mb-5 pb-4 sponsors-wrapper">
        <p className="small text-muted mb-2 text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '2px' }}>Auspiciado por</p>
        <div className="d-flex justify-content-center gap-4 text-secondary">
          <i className="bi bi-apple fs-4 sponsor-icon"></i>
          <i className="bi bi-spotify fs-4 sponsor-icon"></i>
          <i className="bi bi-tencent-qq fs-4 sponsor-icon"></i>
        </div>
      </div>

      {/* BOTÓN FLOTANTE CONFIRMACIÓN */}
      <div className="cta-floating">
        <a href="https://wa.me/59170000000?text=Hola%20LABUBU!%20Quiero%20asistir%20a%20YALEMBER" target="_blank" rel="noreferrer" className="btn btn-main-cta w-100 d-flex align-items-center justify-content-center gap-2">
          <i className="bi bi-check2-square fs-5"></i> Confirmar Asistencia
        </a>
      </div>

      {/* ==============================================
          MODALES DE BOOTSTRAP (VENTANAS EMERGENTES)
          ============================================== */}

      {/* MODAL: EL EVENTO */}
      <div className="modal fade" id="eventModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title text-danger fw-bold">📅 EL EVENTO</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center">
              {/* 👇 AQUÍ ESTÁ LA CORRECCIÓN 👇 */}
              <img src={imagenInfoEvento} alt="Información del Evento" className="img-fluid rounded-4 mb-3 shadow-lg" style={{ border: '1px solid rgba(255,0,68,0.3)' }} />
              
              <h6 className="text-white fw-bold mt-2">LA FIESTA MÁS EXCLUSIVA DE LA TEMPORADA</h6>
              <p className="text-muted small text-start mt-3">
                Prepárate para una noche inolvidable. YALEMBER llega con una producción de primer nivel, luces láser, sonido envolvente y el mejor ambiente de la ciudad.
                <br/><br/>
                📍 <strong>Lugar:</strong> Club Zona Sur (Calle 15, Esq. Principal)<br/>
                🕰️ <strong>Apertura:</strong> 22:00 Hrs<br/>
                👗 <strong>Dress Code:</strong> Elegante / Dress to Impress
              </p>

              <div className="alert alert-dark border-danger text-start mt-3 p-2" role="alert">
                <i className="bi bi-exclamation-triangle-fill text-warning me-2"></i>
                <small className="text-white"><strong>REGLAS DE INGRESO:</strong> Evento estrictamente para mayores de 18 años (+18). Ingreso únicamente con Carnet de Identidad original vigente. Nos reservamos el derecho de admisión.</small>
              </div>

              <a href="https://maps.google.com/?q=Tu+Direccion+Aqui" target="_blank" rel="noreferrer" className="btn btn-outline-danger w-100 mt-2 d-flex align-items-center justify-content-center gap-2 rounded-pill">
                <i className="bi bi-geo-alt-fill"></i> Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: LINE UP */}
      <div className="modal fade" id="bandModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title text-danger fw-bold">🎵 LINE UP & EN VIVO</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center">
              <div className="mb-4 p-3 rounded-4" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--rojo-neon)' }}>
                <h6 className="text-white fw-bold mb-1">🎤 ARTISTA INVITADO</h6>
                <h3 className="text-danger fw-black text-uppercase" style={{ textShadow: '0 0 10px rgba(255,0,68,0.5)' }}>LOS REYES DEL RITMO</h3>
                <p className="text-muted small m-0">Tocando todos sus éxitos totalmente en vivo a la medianoche.</p>
              </div>
              
              <h6 className="text-white fw-bold mb-3 text-start border-bottom border-danger pb-2">🎧 DJs RESIDENTES</h6>
              
              <div className="d-flex align-items-center gap-3 mb-3 text-start">
                <div className="bg-dark rounded-circle d-flex align-items-center justify-content-center border border-danger" style={{ width: '50px', height: '50px' }}>
                  <i className="bi bi-disc text-danger fs-4"></i>
                </div>
                <div>
                  <h6 className="m-0 text-white">DJ CARLOS T.</h6>
                  <small className="text-muted">Reggaeton Old School & Perreo</small>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 mb-2 text-start">
                <div className="bg-dark rounded-circle d-flex align-items-center justify-content-center border border-danger" style={{ width: '50px', height: '50px' }}>
                  <i className="bi bi-speaker text-danger fs-4"></i>
                </div>
                <div>
                  <h6 className="m-0 text-white">DJ ALAN B.</h6>
                  <small className="text-muted">Tech House & Cachengue</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: STAFF RRPP */}
      <div className="modal fade" id="staffModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title text-danger fw-bold">👥 NUESTRO STAFF RRPP</h5>
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
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title text-danger fw-bold">🎈 LABUBU CUMPLEAÑEROS</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center">
              <p className="small mb-4 text-muted">¿Cumples años este mes? Regístrate aquí, tu grupo no paga entrada y tú tienes un shot de cortesía.</p>
              <form onSubmit={handleCumple} className="text-start">
                <div className="mb-3">
                  <label className="form-label text-white small">Nombre del Cumpleañero:</label>
                  <input type="text" className="form-control custom-input" placeholder="Ej: Maria Belen" required value={cumpleForm.nombre} onChange={e => setCumpleForm({...cumpleForm, nombre: e.target.value})}/>
                </div>
                <div className="mb-4">
                  <label className="form-label text-white small">Elige tu Shot de Cortesía:</label>
                  <select className="form-select custom-input" value={cumpleForm.shot} onChange={e => setCumpleForm({...cumpleForm, shot: e.target.value})}>
                    <option value="Tequila">Tequila Dorado</option>
                    <option value="Jägermeister">Jägermeister Frio</option>
                    <option value="Vodka">Vodka Negro</option>
                    <option value="Ron">Ron Fuego</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-danger w-100 fw-bold rounded-pill">Registrar Cumpleaños</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: BAR SORPRESA */}
      <div className="modal fade" id="barModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title text-danger fw-bold">🍸 BAR SORPRESA</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p className="text-muted small text-center mb-4">Tragos explosivos preparados en vivo por nuestros bartenders.</p>
              
              <div className="drink-card">
                <div className="drink-title"><i className="bi bi-fire"></i> BEBIDA DINAMITA</div>
                <div className="small text-white mt-1">Mezcla explosiva de licores fuertes encendidos en fuego. Tómalo de un solo golpe.</div>
              </div>

              <div className="drink-card border-warning">
                <div className="drink-title text-warning"><i className="bi bi-cloud-haze2"></i> GAS LACRIMÓGENO</div>
                <div className="small text-white mt-1">Trago ahumado con hielo seco y sabor ácido intenso. Te hará llorar pero pedirás más.</div>
              </div>

              <div className="drink-card border-info">
                <div className="drink-title text-info"><i className="bi bi-unlock-fill"></i> BEBIDA DESBLOQUEO</div>
                <div className="small text-white mt-1">El elixir ideal para quitar la timidez. Suave, frutal pero engañoso.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: PRÓXIMOS EVENTOS */}
      <div className="modal fade" id="nextEventsModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title text-danger fw-bold">🚀 PRÓXIMOS EVENTOS</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center">
              <i className="bi bi-calendar2-x text-muted" style={{fontSize: '3rem'}}></i>
              <h6 className="mt-3 text-white">Pronto revelaremos más locuras...</h6>
              <p className="small text-muted">Mantente atento a las redes de <strong>LABUBU EVENTS</strong> para enterarte de nuestra próxima gran temática.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
