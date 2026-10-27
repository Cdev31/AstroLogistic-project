const { Router } = require("express");
const { InventarioService } = require("../services/InventarioService");
const { CargaService } = require("../services/CargaService");
const { crearInventarioRouter } = require("./inventarioRouter");
const { crearCargaRouter } = require("./cargaRouter");

const ApiRouter = (app) => {
    const router = Router();

    const inventarioService = new InventarioService();
    const cargaService = new CargaService(inventarioService);

    router.use("/inventario", crearInventarioRouter(inventarioService));
    router.use("/carga", crearCargaRouter(cargaService));

    app.use("/api", router);
};

module.exports = { ApiRouter };
