export default function ProductCard({ item, onAdd, deshabilitado }) {
  const agotado = item.stock === 0

  return (
    <div className="mb-3 rounded-xl border-b-2 border-green-700 bg-white p-4 shadow-sm">
      <h3 className="font-bold text-green-900">{item.nombre}</h3>
      <p className="text-sm text-gray-500">{item.categoria}</p>
      <span className="mt-2 inline-block border-green-600 border-2 rounded-full bg-white px-3 py-1 text-sm text-green-600">
        {item.precio} Cr
      </span>
      <p className="mt-2 text-sm">Stock disponible: {item.stock}</p>
      <button
        disabled={agotado || deshabilitado}
        onClick={() => onAdd(item.id)}
        className={`mt-3 w-full rounded-lg py-2 text-white ${
          agotado ? 'cursor-not-allowed bg-gray-400' : 'bg-green-600 hover:bg-green-700 disabled:opacity-60'
        }`}
      >
        {agotado ? 'Agotado en Base' : 'Añadir a la Nave'}
      </button>
    </div>
  )
}