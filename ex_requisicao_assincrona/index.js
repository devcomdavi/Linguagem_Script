document.getElementById('cep').addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        getCEP();
      }
    });

async function getCEP() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');

    if(cep.length !== 8) {
        alert('CEP inválido. Digite 8 números.');
        return;
    };

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resposta.json();

        if (dados.erro) {
            alert('CEP não encontrado.');
            return;
        };

        document.getElementById('rua').value = dados.logradouro || '';
        document.getElementById('bairro').value = dados.bairro || '';
        document.getElementById('cidade').value = dados.localidade || '';
        document.getElementById('uf').value = dados.uf || '';

    } catch (erro) {
        alert('Erro ao buscar endereço.');
        console.error(erro);
    };
};