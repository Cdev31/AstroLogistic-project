const { Router } = require("express");
const { InventarioController } = require("../controllers/InventarioController");

function crearInventarioRouter(inventarioService) {
    const inventoryRouter = Router();
    const inventoryController = new InventarioController(inventarioService);

    inventoryRouter.get("/", inventoryController.showInventory);

    return inventoryRouter;
}

module.exports = { crearInventarioRouter };