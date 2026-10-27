const { InventarioService } = require("../services/InventarioService");

class InventarioController {
    constructor() {
        this.inventaryService = new InventarioService();
    }

    showInventory(_, res) {
        try {
            const inventory = this.inventaryService.getAll();
            res.status(200).json(inventory);
        } catch (error) {
            res.status(400).json();
        }
    }
}

module.exports = { InventarioController }