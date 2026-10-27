
class CargaController {
    constructor(cargaService) {
        this.cargaService = cargaService;
    }

    showCarga = (req, res) => {
        try {
            const carga = this.cargaService.getCarga();
            res.status(200).json(carga);
        } catch (error) {
            res.status(400).json({ mensaje: error.message });
        }
    };

    addCarga = (req, res) => {
        try {
            const { equipoId, cantidad } = req.body;

            const carga = this.cargaService.agregar(
                equipoId, cantidad
            );

            res.status(200).json(carga);
        } catch (error) {
            res.status(400).json({ mensaje: error.message });
        }
    };

    updateCarga = (req, res) => {
        try {
            const { id } = req.params;
            const { cantidad } = req.body;

            const carga = this.cargaService.actualizarUnidades(
                id, cantidad
            );

            res.status(200).json(carga);
        } catch (error) {
            res.status(400).json({ mensaje: error.message });
        }
    };

    deleteCarga = (req, res) => {
        try {
            const { id } = req.params;

            const carga = this.cargaService.eliminar(id);

            res.status(200).json(carga);
        } catch (error) {
            res.status(400).json({ mensaje: error.message });
        }
    };
}

module.exports = { CargaController };
