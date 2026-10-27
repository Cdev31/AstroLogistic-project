export default function ProductCard({ item, onAdd, deshabilitado }) {
  const agotado = item.stock === 0

  return (
    <div className="mb-3 rounded-xl border bg-white p-4 shadow-sm">
      <h3 className="font-bold">{item.nombre}</h3>
      <p className="text-sm text-gray-500">{item.categoria}</p>
      <span className="mt-2 inline-block rounded-full bg-green-600 px-3 py-1 text-sm text-white">
        {item.precio} Cr
      </span>
      <p className="mt-2 text-sm">Stock disponible: {item.stock}</p>
      <button
        disabled={agotado || deshabilitado}
        onClick={() => onAdd(item.id)}
        className={`mt-3 w-full rounded-lg py-2 text-white ${
          agotado ? 'cursor-not-allowed bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60'
        }`}
      >
        {agotado ? 'Agotado en Base' : 'Añadir a la Nave'}
      </button>
    </div>
  )
}