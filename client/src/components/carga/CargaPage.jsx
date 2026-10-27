import useCarga from '../../hooks/useCarga'
import MissionPanel from './MissionPanel'
import ErrorAlert from './ErrorAlert'
import Catalogo from './Catalogo'
import Bodega from './Bodega'

export default function CargaPage() {
  const {
    inventario, carga, error, calculando,
    agregar, cambiarCantidad, eliminar, cerrarError,
  } = useCarga()

  const items = carga.itemsCargados.map((c) => {
    const producto = inventario.find((p) => p.id === c.id)
    return {
      ...c,
      nombre: producto?.nombre ?? `Equipo ${c.id}`,
      subtotal: (producto?.precio ?? 0) * c.cantidad,
    }
  })

  return (
    <>
      <ErrorAlert mensaje={error} onClose={cerrarError} />
      <MissionPanel creditos={carga.creditos} total={carga.total} calculando={calculando} />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Catalogo inventario={inventario} onAdd={agregar} deshabilitado={calculando} />
        </div>
        <Bodega
          items={items}
          onCambiar={cambiarCantidad}
          onEliminar={eliminar}
          deshabilitado={calculando}
        />
      </div>
    </>
  )
}