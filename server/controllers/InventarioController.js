const { InventarioService } = require("../services/InventarioService");

class InventarioController {
    constructor() {
        this.inventoryService = new InventarioService();
    }

    showInventory = (_, res) => {
        try {
            const inventory = this.inventoryService.getAll();
            res.status(200).json(inventory);
        } catch (error) {
            res.status(400).json({
                message: "Error de carga"
            });
        }
    }
}

module.exports = { InventarioController }