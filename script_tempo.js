// chama o envento com id="weathearForm quando chamar o formulario
document.getElementById('weatherForm').addEventListener('submit', function(event) {

// previni de recarregar toda pagina quando chamar o formulario
    event.preventDefault();

// obtem o valor do campo estado e retira espaços do inicio e fim caso seja degitado
    const state = document.getElementById('state').value.trim();

// obtem o resultado do campo cidade e retira os espaços no inicio e fim caso seja digitado
    const city = document.getElementById('city').value.trim();

//chave de api para acessar a api
    const apiKey = '54c7d23a27e211337659279cc10c5577'; // Substitua pela sua chave de API
//endereçoo da api openweathermaps para obter os ddados de temperatura
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${apiKey}&units=metric`;
// faz a requisição para a url da api
    fetch(apiUrl)
        .then(response => {


// verifica  se a resposta da api foi bem sucedida
            if (!response.ok) {

// caso retorne algum erro da uma mensagem de erro
                throw new Error('Erro na busca. Digite novamente.');
            }

// converte a resposta da api para json
            return response.json();
        })
        .then(data => {


// busca os dados da api com base na busca
            const weatherDescription = data.weather[0].description;

// busca os dados na api com base na busca do usuario
            const temperature = data.main.temp;


// cria mensagem de texto formatada
            const weatherInfo = `O tempo em ${city}, ${state} é ${weatherDescription}. Temperatura atual: ${temperature}°C.`;
//atualiza  o conteudo do elemento com idweatherInfo  com a mensagem do tempo
            document.getElementById('weatherInfo').textContent = weatherInfo;
        })
        .catch(error => {

// caso tenha algum erro  no processamento mostra um erro no console
            console.error('Erro ao obter dados do tempo:', error);

// atualiza o elemento com a mensagem de rro
            document.getElementById('weatherInfo').textContent = error.message;
        });
});

// adiciona  ao evento ao campo input caso o usuario altere a informação 
document.getElementById('state').addEventListener('input', function() {


// busca o dado no campo estado e elimina espaços no inicio e fim
    const stateInput = document.getElementById('state').value.trim();


// busca o dado do campo cidade e elimina os espaços do inicio e do fim
    const cityInput = document.getElementById('city').value.trim();

// obtem o botão de subimissão  id=submitbtn
    const submitBtn = document.getElementById('submitBtn');


// habilita ambos botões apenas se os campos estado e cidade estiverem preenchidos
    submitBtn.disabled = !(stateInput && cityInput);
});
// adiciona ao evento caso o id=city seja alterado
document.getElementById('city').addEventListener('input', function() {

// obtem o valor do campo estado e retira os espaços do inicio e fim
    const stateInput = document.getElementById('state').value.trim();

// obtem o valor do campo cidade e retira o espaços do inicio e fim
    const cityInput = document.getElementById('city').value.trim();

// obtem o botão de sumissão com id=submitbtn
    const submitBtn = document.getElementById('submitBtn');


// habilita o botão de submissao apenas se ambos campos estiverem preenchidos
    submitBtn.disabled = !(stateInput && cityInput);
});
