import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Estilos de las librerías.
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-table/dist/bootstrap-table.min.css'
import 'sweetalert2/dist/sweetalert2.min.css'

// Componentes interactivos de Bootstrap; el bundle incluye Popper.
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
