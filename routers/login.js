const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.obtenerUsuario); // Cambiar a POST para autenticación

module.exports = router;
