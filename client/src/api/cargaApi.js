const BASE = '/api'

const request = async (url, options) => {
  const res = await fetch(url, options)
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(data.mensaje || 'Error en la petición')
  }
  return data
}

const jsonOptions = (method, body) => ({
  method,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
})

export const getInventario = () => request(`${BASE}/inventario`)
export const getCarga = () => request(`${BASE}/carga`)
export const agregarItem = (equipoId, cantidad) =>
  request(`${BASE}/carga/agregar`, jsonOptions('POST', { equipoId, cantidad }))
export const actualizarUnidades = (id, cantidad) =>
  request(`${BASE}/carga/actualizar-unidades/${id}`, jsonOptions('PUT', { cantidad }))
export const eliminarItem = (id) =>
  request(`${BASE}/carga/eliminar/${id}`, { method: 'DELETE' })