export default function ErrorAlert({ mensaje, onClose }) {
  if (!mensaje) return null
  return (
    <div className="mb-4 flex items-center justify-between rounded-lg bg-amber-100 p-4 text-amber-900">
      <span>⚠️ {mensaje}</span>
      <button onClick={onClose} className="ml-4 font-bold">✕</button>
    </div>
  )
}