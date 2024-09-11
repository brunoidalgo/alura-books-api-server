const fs = require("fs");

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"));
};


function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));

    const livroFiltrado = livros.filter( livro => livro.id == id)[0];

    return livroFiltrado;
};


function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));

    const novaListaLivros = [...livros, livroNovo];

    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros));
};


function atualizaLivro(atualizacao, id) {
    let livros = JSON.parse(fs.readFileSync("livros.json"));

    const indiceLivro = livros.findIndex((livro) => livro.id == id)

    const listaAtualizadaLivros = {...livros[indiceLivro], ...atualizacao};

    livros[indiceLivro] = listaAtualizadaLivros;


    fs.writeFileSync("livros.json", JSON.stringify(livros));
}


function apagaLivro(id) {
    let livros = JSON.parse(fs.readFileSync("livros.json"));

    const listaAtualizadaLivros = livros.filter(livro => livro.id != id);


    fs.writeFileSync("livros.json", JSON.stringify(listaAtualizadaLivros, null, 2));
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    atualizaLivro,
    apagaLivro
};