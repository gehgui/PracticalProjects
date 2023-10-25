const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.list-task');

let minhaListaDeItens = [];

function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value);

    mostraTarefas();
}

function mostraTarefas() {

    let novaLi = '';

    minhaListaDeItens.forEach((tarefas) => {
        novaLi = novaLi + `
            <li class="task">
                <img src="img/checked.png" alt="check-na-tarefa">
                <p>${tarefas}</p>
                <img src="img/trash.png" alt="tarefa-para-o-lixo">
            </li>
        `
    });

    listaCompleta.innerHTML = novaLi;

}

button.addEventListener('click', adicionarNovaTarefa);