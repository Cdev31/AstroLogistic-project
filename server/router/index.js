const { Router } = require("express");
const { inventoryRouter } = require("./inventarioRouter");


const ApiRouter = (app) => {
    const router = Router();
    router.use("/inventario", inventoryRouter);

    app.use("/api", router);
};

module.exports = { ApiRouter };