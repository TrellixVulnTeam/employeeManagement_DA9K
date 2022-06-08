function load() {
    fetch('http://localhost:3000/pegar')
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
    .catch(err => console.log(err))
}