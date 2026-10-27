export default function MissionPanel({ creditos, total, calculando }) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-2 rounded-lg bg-sky-100 p-4 text-sky-900">
      <span>Créditos disponibles: <strong>{creditos} Cr</strong></span>
      {calculando && <span className="text-sm italic">Calculando peso...</span>}
      <span>
        Costo total de Carga:{' '}
        <span className="rounded-full bg-gray-800 px-3 py-1 text-sm text-white">{total} Cr</span>
      </span>
    </div>
  )
}