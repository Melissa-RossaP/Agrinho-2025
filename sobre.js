function toggleMenu() {
  const menu = document.getElementById('menuAcessibilidade');
  menu.classList.toggle('ativo');
}


let tamanhoFonteAtual = 1;

function aumentarFonte() {
  if (tamanhoFonteAtual < 2) {
    tamanhoFonteAtual += 0.1;
    document.body.style.fontSize = tamanhoFonteAtual + 'em';
  }
}

function diminuirFonte() {
  if (tamanhoFonteAtual > 0.5) {
    tamanhoFonteAtual -= 0.1;
    document.body.style.fontSize = tamanhoFonteAtual + 'em';
  }
}

function contraste() {
  document.body.classList.toggle('contraste-ativo');
}

function lerTexto() {
  speechSynthesis.cancel();
  const texto = document.body.innerText;
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = 'pt-BR';
  utterance.rate = 1;
  speechSynthesis.speak(utterance);
}
