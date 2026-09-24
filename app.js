const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificarChute() {
    const chute = parseInt(document.getElementById('chute').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(chute)) {
        resultado.textContent = 'Por favor, digite um número!';
        resultado.style.color = '#ff6b6b';
        return;
    }

    if (chute === numeroSecreto) {
        resultado.textContent = '🎉 Você acertou!';
        resultado.style.color = '#51cf66';
    } else if (chute > numeroSecreto) {
        resultado.textContent = 'O número secreto é menor!';
        resultado.style.color = '#ffc078';
    } else {
        resultado.textContent = 'O número secreto é maior!';
        resultado.style.color = '#ffc078';
    }
}