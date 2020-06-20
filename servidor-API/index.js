const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const {
  listarTarefaId,
  listarTarefas,
  cadastrarTarefa,
  atualizarTarefa,
  removerTarefa,
  concluirTarefa
} = require('./controllers/gerenciador-tarefas.js');
const {
  finalizarCompra, obterCidadesPorEstado
} = require('./controllers/mini-ecommerce.js');
const upload = require('./controllers/upload.js');

const app = express();
const port = 3001;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload({ createParentPath: true }));

// listar todas as tarefas - get
app.get('/gerenciador-tarefas', listarTarefas);
// listar uma tarefa por id - get
app.get('/gerenciador-tarefas/:id', listarTarefaId);
// cadastrar uma tarefa - post
app.post('/gerenciador-tarefas', cadastrarTarefa);
// atualizar uma tarefa - put
app.put('/gerenciador-tarefas/:id', atualizarTarefa);
// remover uma tarefa - delete
app.delete('/gerenciador-tarefas/:id', removerTarefa);
// concluir uma tarefa - put
app.put('/gerenciador-tarefas/:id/concluir', concluirTarefa);

// mini-ecommerce
app.post('/mini-ecommerce/checkout/finalizar-compra', finalizarCompra);
app.get('/mini-ecommerce/estado/:siglaEstado/cidades', obterCidadesPorEstado);

app.post('/upload', upload);

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));