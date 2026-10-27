
class CargaService {
    constructor(InventarioService) {
        this.InventarioService = InventarioService;
        this.creditos = 500;
        this.itemsCargados = [];
    }

    getTotal() {
        return this.itemsCargados.reduce((total, item) => {
            const producto = this.InventarioService.findById(item.id);
            return total + producto.precio * item.cantidad;
        }, 0);
    }

    getCarga() {
        return {
            creditos: this.creditos - this.getTotal(),
            itemsCargados: this.itemsCargados,
            total: this.getTotal()
        };
    }

    agregar(equipoId, cantidad) {
        const producto = this.InventarioService.findById(equipoId);

        if (!producto) {
            throw new Error("El suministro no existe en la base");
        }

        if (!Number.isInteger(cantidad) || cantidad <= 0) {
            throw new Error("Cantidad no permitida");
        }

        if (producto.stock < cantidad) {
            throw new Error("Stock en base insuficiente");
        }

        const costo = producto.precio * cantidad;

        if (this.getTotal() + costo > this.creditos) {
            throw new Error("Créditos insuficientes");
        }

        const item = this.itemsCargados.find(
            (item) => item.id === producto.id
        );

        this.InventarioService.discountStock(producto.id, cantidad);

        if (item) {
            item.cantidad += cantidad;
        } else {
            this.itemsCargados.push({
                id: producto.id,
                cantidad: cantidad
            });
        }

        return this.getCarga();
    }

    actualizarUnidades(id, cantidad) {
        const item = this.itemsCargados.find(
            (item) => item.id === Number(id)
        );

        if (!item) {
            throw new Error("El suministro no está en la carga");
        }

        if (!Number.isInteger(cantidad) || cantidad < 0) {
            throw new Error("Cantidad no permitida");
        }

        if (cantidad === 0) {
            return this.eliminar(id);
        }

        const diferencia = cantidad - item.cantidad;

        if (diferencia > 0) {
            const producto = this.InventarioService.findById(id);

            if (producto.stock < diferencia) {
                throw new Error("Stock en base insuficiente");
            }

            const nuevoTotal = this.getTotal() +
                producto.precio * diferencia;

            if (nuevoTotal > this.creditos) {
                throw new Error(
                    "Créditos insuficientes para esta cantidad"
                );
            }

            this.InventarioService.discountStock(id, diferencia);
        }

        if (diferencia < 0) {
            this.InventarioService.increaseStock(
                id, Math.abs(diferencia)
            );
        }

        item.cantidad = cantidad;

        return this.getCarga();
    }

    eliminar(id) {
        const item = this.itemsCargados.find(
            (item) => item.id === Number(id)
        );

        if (!item) {
            throw new Error("El suministro no está en la carga");
        }

        this.InventarioService.increaseStock(id, item.cantidad);

        this.itemsCargados = this.itemsCargados.filter(
            (item) => item.id !== Number(id)
        );

        return this.getCarga();
    }
}

module.exports = { CargaService };
