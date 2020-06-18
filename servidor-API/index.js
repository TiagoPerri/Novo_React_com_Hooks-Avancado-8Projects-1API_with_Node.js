const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { listarTarefaId, listarTarefas, cadastrarTarefa, atualizarTarefa, removerTarefa, concluirTarefa
} = require('./controllers/gerenciador-tarefas.js');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// get, post, put, delete, patch (requisições http)
// GET retorna dados, tarefas por id
// cadastro, inderir uma tarefa, usa o POST, de inserção
// modificar uma tarefa, usa o PUT. associado a alteração de dados
//DELETE é ligado a remoção, excluir uma tarefa

function naoImplementado(req, res){
    res.status(501).json({erro: 'Não implementado'});
}

//listar as tarefas - get
app.get('/gerenciador-tarefas', listarTarefas);
//listar uma tarefa por id - get
app.get('/gerenciador-tarefas/:id', listarTarefaId);
//cadastrar uma tarefa - post
app.post('/gerenciador-tarefas', cadastrarTarefa);
//atualizar uma tarefa - put
app.put('/gerenciador-tarefas/:id', atualizarTarefa);
//remover uma tarefa - delete
app.delete('/gerenciador-tarefas/:id', removerTarefa);
//concluir uma tarefa - put/patch
app.put('/gerenciador-tarefas/:id/concluir', concluirTarefa);

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));