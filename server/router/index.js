const { Router } = require("express");
const { inventarioRouter } = require("./inventarioRouter");
const { cargaRouter } = require("./cargaRouter");


const ApiRouter = (app) => {
    const router = Router();
    router.use("/inventario", inventarioRouter)
    router.use("/carga", cargaRouter)
    app.use("/api/", router)
}

module.exports = { ApiRouter }