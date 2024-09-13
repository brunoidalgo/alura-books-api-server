const { getTodosFavoritos, insereFavorito, apagaFavorito } = require("../services/favorito");

function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos();
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};


function postLivroFavorito (req, res) {
    try {
        const id = req.params.id;
        insereFavorito(id);
        res.status(201).send("Livro inserido nos favoritos com sucesso!");
        
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};


function deleteLivroFavorito(req, res) {
    try {
        const id = req.params.id;

        if(id && Number(id)) {
            apagaFavorito(id);
            res.send("Livro apagado com sucesso");
        } else {
            res.status(422);
            res.send("Id inválido");
        }
    }
    catch {
        res.status(500);
        res.send(error.message)
    }
};


module.exports = {
    getFavoritos,
    postLivroFavorito,
    deleteLivroFavorito
}