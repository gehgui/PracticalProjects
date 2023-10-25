const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.list-task');

let minhaListaDeItens = [];

function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefas: input.value,
        concluida: false
    });
    input.value = '';

    mostraTarefas();
}

function mostraTarefas() {

    let novaLi = '';

    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + `
            <li class="task ${item.concluida && "done"}">
                <img src="img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
                <p>${item.tarefas}</p>
                <img src="img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
            </li>
        `
    });

    listaCompleta.innerHTML = novaLi;

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens));

}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1);
    mostraTarefas();
}

function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida;
    mostraTarefas();
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista');
    if (tarefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage);
    }
    mostraTarefas();
}

recarregarTarefas();
button.addEventListener('click', adicionarNovaTarefa);