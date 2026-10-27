const { Router } = require("express");
const { InventarioController } = require("../controllers/InventarioController");

const inventoryRouter = Router();
const inventoryController = new InventarioController()

inventoryRouter.get("/", inventoryController.showInventory)


module.exports = { inventoryRouter }