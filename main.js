document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome-contato').value;
    const telefone = document.getElementById('telefone-contato').value;

    adicionaLinha(nome, telefone);

    document.getElementById('nome-contato').value = '';
    document.getElementById('telefone-contato').value = '';
});

function adicionaLinha(nome, telefone) {
    const tabela = document.querySelector('tbody');
    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
    `;

    tabela.appendChild(novaLinha);
}