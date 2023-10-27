const form = document.getElementById('form-atividade');
const nomeContato = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
});

function adcionaLinha() {
    const inputNomeContatos = document.getElementById('contato-name');
    const inputNumero = document.getElementById('contato-number');

    if (nomeContato.includes(inputNomeContatos.value)) {
        alert(`O Contato: ${inputNomeContatos.value} já foi inserido!`);
    } else {
        nomeContato.push(inputNomeContatos.value);
        numero.push(inputNumero.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContatos.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContatos.value = '';
    inputNumero.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('table tbody');
    corpoTabela.innerHTML = linhas;
}
