import { useCallback, useEffect, useState } from 'react'
import * as api from '../api/cargaApi'

export default function useCarga() {
  const [inventario, setInventario] = useState([])
  const [carga, setCarga] = useState({ creditos: 0, itemsCargados: [], total: 0 })
  const [error, setError] = useState(null)
  const [calculando, setCalculando] = useState(false)

  const refrescar = useCallback(async () => {
    const [inv, car] = await Promise.all([api.getInventario(), api.getCarga()])
    setInventario(inv)
    setCarga(car)
  }, [])

  useEffect(() => {
    refrescar().catch((e) => setError(e.message))
  }, [refrescar])

  const ejecutar = async (accion) => {
    setCalculando(true)
    setError(null)
    try {
      await accion()
      await refrescar()
    } catch (e) {
      setError(e.message)
    } finally {
      setCalculando(false)
    }
  }

  const agregar = (id) => ejecutar(() => api.agregarItem(id, 1))
  const cambiarCantidad = (id, cantidad) =>
    ejecutar(() =>
      cantidad <= 0 ? api.eliminarItem(id) : api.actualizarUnidades(id, cantidad)
    )
  const eliminar = (id) => ejecutar(() => api.eliminarItem(id))

  return {
    inventario, carga, error, calculando,
    agregar, cambiarCantidad, eliminar,
    cerrarError: () => setError(null),
  }
}