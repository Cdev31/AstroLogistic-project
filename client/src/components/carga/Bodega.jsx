import BodegaItem from './BodegaItem'

export default function Bodega({ items, onCambiar, onEliminar, deshabilitado }) {
  return (
    <aside>
      <h2 className="mb-3 text-xl font-bold">Tu Bodega de Carga</h2>
      {items.length === 0 ? (
        <p className="rounded-lg border bg-white p-4 text-sm text-gray-500">
          La bodega está vacía.
        </p>
      ) : (
        <ul className="divide-y rounded-lg border bg-white">
          {items.map((item) => (
            <BodegaItem
              key={item.id}
              item={item}
              onCambiar={onCambiar}
              onEliminar={onEliminar}
              deshabilitado={deshabilitado}
            />
          ))}
        </ul>
      )}
    </aside>
  )
}