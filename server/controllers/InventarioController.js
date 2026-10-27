class InventarioController {
    constructor(inventarioService) {
        this.inventoryService = inventarioService;
    }

    showInventory = (_, res) => {
        try {
            const inventory = this.inventoryService.getAll();
            res.status(200).json(inventory);
        } catch (error) {
            res.status(400).json({
                mensaje: "Error de carga"
            });
        }
    }
}

module.exports = { InventarioController }