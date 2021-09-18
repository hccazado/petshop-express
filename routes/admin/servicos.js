const express = require("express");
const servicosController = require("../../controllers/servicosController");
const router = express.Router();
const controller = require("../../controllers/servicosController");

router.get("/", servicosController.listarAdmin);
router.get("/cadastrar", servicosController.cadastrar);
router.post("/cadastrar", servicosController.cadastrarServico);
router.get("/editar/:id", servicosController.editar);
router.post("/editar/:id", servicosController.editarServico);
router.post("/excluir/:id", servicosController.excluirServico);

module.exports = router;