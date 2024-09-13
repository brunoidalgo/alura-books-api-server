const fs = require("fs");

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"));
};


function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));

    const livroInserido = livros.find(livro => livro.id == id)
    const novaListaFavoritos = [...favoritos, livroInserido];

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaFavoritos));
};


function apagaFavorito(id) {
    let livros = JSON.parse(fs.readFileSync("favoritos.json"));

    const listaAtualizadaLivros = livros.filter(livro => livro.id != id);


    fs.writeFileSync("favoritos.json", JSON.stringify(listaAtualizadaLivros, null, 2));
};



module.exports = {
    getTodosFavoritos,
    insereFavorito,
    apagaFavorito
}