const { Router } = require("express");
const { InventarioController } = require("../controllers/InventarioController");

const inventoryRouter = Router();
const inventoryController = new InventarioController()

inventarioRouter.get("/", inventoryController.showInventory)


module.exports = { inventoryRouter }