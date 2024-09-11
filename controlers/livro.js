const { getTodosLivros, getLivroPorId, insereLivro, atualizaLivro, apagaLivro } = require("../services/livro");

function getLivros(req, res) {
    try {
        const livros = getTodosLivros();
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

function getLivro(req, res) {
    try {
        const id = req.params.id;
        const livro = getLivroPorId(id);
        if(!livro) {
            res.send("Livro não existe")
        } else {
            res.status(422);
            res.send("Id inválido")
        }
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};


function postLivro (req, res) {
    try {
        const livroNovo = req.body;
        const livros = getTodosLivros();
        const livroExistente = livros.find(livro => livro.id === livroNovo.id);
        if (!livroExistente) {
            if(req.body.nome) {
                insereLivro(livroNovo);
                res.status(201).send(livroNovo);
            } else {
                res.status(422).send("Campo nome é obrigatório!");
            }
            
        } else {
            res.status(409).send("Livro já existente");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};


function patchLivro(req, res) {
    try {
        const id = req.params.id;
        

        if(id && Number(id)) {
            const body = req.body;
            atualizaLivro(body, id);
            res.send("Item modificado com sucesso");
        } else {
            res.status(422);
            res.send("Id inválido")
        }
    }
    catch {
        res.status(500);
        res.send(error.message)
    }
};


function deleteLivro(req, res) {
    try {
        const id = req.params.id;

        if(id && Number(id)) {
            apagaLivro(id);
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
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
};