import Swal from 'sweetalert2'

function App() {
  const probarAlerta = () => {
    Swal.fire({
      title: 'Configuración inicial correcta',
      text: 'React, Bootstrap y SweetAlert2 están funcionando.',
      icon: 'success',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#0d6efd',
    })
  }

  return (
    <main className="container py-5">
      <section className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <span className="badge text-bg-primary mb-3">
            Entorno de desarrollo
          </span>

          <h1 className="h3">Inventario de TI</h1>

          <p className="text-secondary">
            Base del frontend preparada para iniciar el desarrollo.
          </p>

          <button
            type="button"
            className="btn btn-primary"
            onClick={probarAlerta}
          >
            Probar alerta
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
