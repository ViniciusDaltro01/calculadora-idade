document.getElementById('calcularBtn').addEventListener('click', calcularIdade);
document.getElementById('anoNascimento').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    calcularIdade();
  }
});

function calcularIdade() {
  const input = document.getElementById('anoNascimento');
  const resultado = document.getElementById('resultado');
  const anoAtual = new Date().getFullYear();
  const ano = parseInt(input.value);

  resultado.classList.remove('erro', 'sucesso');

  if (!ano || ano < 1900 || ano > anoAtual) {
    resultado.textContent = " Por favor, insira um ano válido entre 1900 e " + anoAtual + ".";
    resultado.classList.add('erro');
    return;
  }

  const idade = anoAtual - ano;
  resultado.textContent = ` Você tem ${idade} anos.`;
  resultado.classList.add('sucesso');
}
