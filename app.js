const express = require("express");
const cors = require('cors');
const app = express();
const port = 8000;
const rotaLivro = require("./routes/livro");
const rotaFavorito = require("./routes/favorito");


// Inserido para que a API aceite arquivos JSON em requisições de POST
app.use(express.json());
app.use(cors({origin:"*"}));
app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavorito);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});
