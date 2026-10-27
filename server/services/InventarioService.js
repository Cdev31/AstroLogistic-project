class InventarioService {
    constructor() {
        this.inventario = [
            { id: 1, nombre: "Tanque de Oxigeno XL", precio: 50.00, stock: 5, categoria: "Soporte Vital" },
            { id: 2, nombre: "Bateria de Litio Galactico", precio: 24.00, stock: 3, categoria: "Energia" },
            { id: 3, nombre: "Reaccion de Comida espacial", precio: 30.00, stock: 12, categoria: "Suminitro" },
            { id: 4, nombre: "Tanque de Oxigeno L", precio: 67.00, stock: 8, categoria: "Soporte Vital" },

        ]
    }

    getAll() {
        return this.inventario;
    }

    findById(id) {
        return this.inventario.find((item) => item.id === Number(id));
    }

    discountStock(id, quantity) {
        const productoItem = this.findById(id);

        if (!productoItem) {
            throw new Error("El suministro no existe en la base");
        }

        if (productoItem.stock < quantity) {
            throw new Error("Stock insuficiente")
        }

        productoItem.stock -= quantity;
        return productoItem
    }

    increaseStock(id, quantity) {

        if (productoItem <= 0) {
            throw new Error("Cantidad no permitida");
        }

        const productoItem = this.findById(id);

        if (!productoItem) {
            throw new Error("El suministro no existe en la base")
        }

        productoItem.stock += quantity;
        return productoItem;
    }
}

module.exports = { InventarioService }