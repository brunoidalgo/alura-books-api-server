const express = require("express");
const app = express();
// Inserido para que a API aceite arquivos JSON em requisições de POST
app.use(express.json());
const port = 8000;
const rotaLivro = require("./routes/livro");

app.use('/livros', rotaLivro);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});
