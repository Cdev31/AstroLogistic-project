export default function BodegaItem({ item, onCambiar, onEliminar, deshabilitado }) {
  return (
    <li className="flex items-center justify-between gap-2 p-3">
      <div>
        <p className="font-medium">{item.nombre}</p>
        <p className="text-xs text-gray-500">{item.cantidad} u. · {item.subtotal} Cr</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="inline-flex overflow-hidden rounded border">
          <button
            disabled={deshabilitado}
            onClick={() => onCambiar(item.id, item.cantidad - 1)}
            className="px-3 py-1 hover:bg-gray-100"
          >−</button>
          <span className="border-x px-3 py-1">{item.cantidad}</span>
          <button
            disabled={deshabilitado}
            onClick={() => onCambiar(item.id, item.cantidad + 1)}
            className="px-3 py-1 hover:bg-gray-100"
          >+</button>
        </div>
        <button
          disabled={deshabilitado}
          onClick={() => onEliminar(item.id)}
          className="rounded border border-red-500 px-2 py-1 text-sm text-red-600 hover:bg-red-50"
        >
          Desembarcar
        </button>
      </div>
    </li>
  )
}