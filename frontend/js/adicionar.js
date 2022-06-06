function adicionar() {
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let cpf = document.getElementById('cpf').value;
    let nascimento = document.getElementById('date').value;
    let agencia = document.getElementById('agencia').value;
    let conta = document.getElementById('conta').value;
    let remuneracao = document.getElementById('remuneracao').value;
    fetch('http://localhost:3000/cadastrar', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
           nome: nome,
           sobrenome:  sobrenome,
           cpf: cpf,
           data_de_nascimento: nascimento,
           agencia: agencia,
           conta: conta,
           remuneracao: remuneracao
        })
    }).then(res => {
        return res.json();
    })
    document.getElementById('nome').value = "";
    document.getElementById('sobrenome').value  = "";
    document.getElementById('cpf').value  = "";
    document.getElementById('date').value  = "";
    document.getElementById('agencia').value  = "";
    document.getElementById('conta').value  = "";
    document.getElementById('remuneracao').value  = "";
}