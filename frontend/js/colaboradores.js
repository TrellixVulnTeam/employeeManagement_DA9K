function buscar() {
    let nomeBuscar = document.getElementById('nomeBuscar').value;
    let cpfBuscar = document.getElementById('cpfBuscar').value;
    console.log(nomeBuscar, cpfBuscar);
    limparTabela();
    fetch(`http://localhost:3000/buscar/${nomeBuscar}/${cpfBuscar}`)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            document.getElementById('display').innerHTML += `
                <tr>
                    <td class="cpf">${element.cpf}</td>
                    <td class="ag">${element.agencia}</td>
                    <td class="cc">${element.conta}</td>
                    <td class="nome">${element.nome} ${element.sobrenome}</td>
                    <td class="valor">R$ ${element.remuneracao},00</td>
                </tr>`
        })
    })
    .catch(err => console.log(err));    
}

function limparTabela() {
    document.getElementById('display').innerHTML = `
        <tr>
            <th class="cpf">CPF</th>
            <th class="ag">Agencia</th>
            <th class="cc">Conta</th>
            <th class="nome">Nome</th>
            <th class="valor">Valor</th>
        </tr>
    `
}
