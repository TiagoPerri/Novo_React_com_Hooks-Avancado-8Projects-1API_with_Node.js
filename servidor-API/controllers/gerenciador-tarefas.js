const { v4: uuidv4 } = require('uuid');

let tarefas = [
    { id: '1', nome: 'Aprender React', concluida:false },
    { id: '2', nome: 'Aprender CSS', concluida:true },
    { id: '3', nome: 'Aprender HTML', concluida:true },
    { id: '4', nome: 'Aprender Javascript', concluida:false }
];

function listarTarefaId(req, res){
    const id = req.params.id; // obter o id na url
    const tarefa = tarefas.filter(tarefa => tarefa.id === id); // filtrar tarefa por ID
    if (tarefa.length === 0){ // se nao encontrar tarefa
        res.status(404).json({erro: 'Tarefa não encontrada'}); // 404 significa não encontrado
    }
    res.json(tarefa[0]); // status 200 de sucesso é o status padrão
}

function listarTarefas(req, res){
    const pagina = req.query['pag'] || 1;
    const ordem = req.query['ordem']; // ASC ou DESC
    const filtroTarefa = req.query['filtro-tarefa'];
    const itensPorPagina = req.query['itens-por-pagina'] || 3;
    let tarefasRetornar = tarefas.slice(0);

    //filtro os dados
    if(filtroTarefa){
        tarefasRetornar = tarefasRetornar.filter(
            t => t.nome.toLowerCase().indexOf(filtroTarefa.toLowerCase()) === 0
        );
    }
    //ordenar os dados
    if (ordem === 'ASC') {
        tarefasRetornar.sort((t1, t2) => (t1.nome.toLowerCase() > t2.nome.toLowerCase()) ? 1 : -1);
    } else if (ordem === 'DESC') {
        tarefasRetornar.sort((t1, t2) => (t1.nome.toLowerCase() < t2.nome.toLowerCase()) ? 1 : -1);
    }
    //retornar os dados
    res.json({
        totalItens: tarefasRetornar.length,
        tarefas: tarefasRetornar.slice(0).splice((pagina - 1) * itensPorPagina, itensPorPagina),
        pagina: pagina
    });
}

function cadastrarTarefa(req, res) {
    if (!req.body['nome'] && !req.body['concluida']) {
      res.status(400).json({ erro: 'Requisição inválida.' });
    }
    const tarefa = {
      id: uuidv4(),
      nome: req.body['nome'],
      concluida: req.body['concluida']
    };
    tarefas.push(tarefa);
    res.json(tarefa);
  }

  function atualizarTarefa(req, res) {
    if (!req.body['nome'] && !req.body['concluida']) {
      res.status(400).json({ erro: 'Requisição inválida.' });
    }
    const id = req.params.id;
    let tarefaAtualizada = false;
    tarefas = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        tarefa.nome = req.body['nome'];
        tarefa.concluida = req.body['concluida'];
        tarefaAtualizada = true;
      }
      return tarefa;
    });
    if (!tarefaAtualizada) {
      res.status(404).json({ erro: 'Tarefa não encontrada.' });
    }
    res.json({
      id: id,
      nome: req.body['nome'],
      concluida: req.body['concluida']
    });
  }

  function removerTarefa(req, res) {
    const id = req.params.id;
    const numTarefas = tarefas.length;
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    if (numTarefas === tarefas.length) {
      res.status(404).json({ erro: 'Tarefa não encontrada.' });
    }
    res.json({ msg: 'Tarefa removida com sucesso!' });
  }

  function concluirTarefa(req, res) {
    const id = req.params.id;
    let tarefaConcluida = false;
    tarefas = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        tarefa.concluida = true;
        tarefaConcluida = true;
      }
      return tarefa;
    });
    if (!tarefaConcluida) {
      res.status(404).json({ erro: 'Tarefa não encontrada.' });
    }
    res.json({ msg: 'Tarefa concluída com sucesso!' });
  }

module.exports = {
    listarTarefaId,
    listarTarefas,
    cadastrarTarefa,
    atualizarTarefa,
    removerTarefa,
    concluirTarefa
}