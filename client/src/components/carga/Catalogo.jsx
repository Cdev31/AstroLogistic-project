import ProductCard from './ProductCard'

export default function Catalogo({ inventario, onAdd, deshabilitado }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-bold">Catálogo de la Base</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {inventario.map((item) => (
          <ProductCard key={item.id} item={item} onAdd={onAdd} deshabilitado={deshabilitado} />
        ))}
      </div>
    </section>
  )
}