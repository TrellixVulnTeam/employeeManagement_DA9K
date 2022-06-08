function refresh() {
    let custoMensal = 0;
    let colaboradores = 0;
    fetch('http://localhost:3000/pegar')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            custoMensal += Number(element.remuneracao);
            colaboradores ++;
        })       
        document.getElementById('mensal').textContent = `R$ ${custoMensal}`;
        document.getElementById('colaboradores').textContent = `${colaboradores}`;
    })
    .catch(err => console.log(err))
}