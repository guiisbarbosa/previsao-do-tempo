const chaveDaApi = '985288913f29411eb1e00010232311'

const botaoDeBusca = document.querySelector('.btn-busca')

botaoDeBusca.addEventListener('click', async () => {
    const cidade = document.getElementById('input-busca').value

    if(!cidade) return

    const dados = await buscarDadosDaCidade(cidade)

    if(dados) preencherDadosNaTela(dados, cidade)
    
})

async function buscarDadosDaCidade(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`

    const resposta = await fetch(apiUrl);

    console.log(resposta.status);

    if(resposta.status !== 200) return;

    const dados = await resposta.json();

    console.log(dados);

    return dados
}    

function preencherDadosNaTela(dados) {
    const cidade = dados.location.name
    const temperatura = dados.current.temp_c
    const condicao = dados.current.condition.text
    const humidade = dados.current.humidity
    const vento = dados.current.wind_kph
    const icon = dados.current.condition.icon

    document.getElementById('cidade').textContent = cidade

    document.getElementById('temperatura').textContent = `${temperatura} ºC`

    document.getElementById('condicao').textContent = condicao

    document.getElementById('humidade').textContent = `${humidade}%`

    document.getElementById('velocidade-do-vento').textContent = `${vento} km/h`

    document.getElementById('icone-condicao').setAttribute('src', icon)
}