const { Router } = require("express");
const { getFavoritos, postLivroFavorito, deleteLivroFavorito } = require("../controlers/favorito");

const router = Router();

router.get('/', getFavoritos)

router.post('/:id', postLivroFavorito)

router.delete('/:id', deleteLivroFavorito)

module.exports = router;