const { Router } = require("express");
const { CargaController } = require("../controllers/CargaController");

function crearCargaRouter(cargaService) {
    const cargaRouter = Router();
    const cargaController = new CargaController(cargaService);

    cargaRouter.get("/", cargaController.showCarga);

    cargaRouter.post("/agregar", cargaController.addCarga);

    cargaRouter.put("/actualizar-unidades/:id", cargaController.updateCarga);

    cargaRouter.delete("/eliminar/:id", cargaController.deleteCarga);

    return cargaRouter;
}

module.exports = { crearCargaRouter };