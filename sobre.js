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
// só para dizer oq q é oq
let lendo = false;
let utterance = null;
let canceladoPeloUsuario = false;

function lerTexto() {
  const botao = document.getElementById("botaoLeitura");

  // Se já tiver lendo ele vai cancelar
  if (lendo) {
    canceladoPeloUsuario = true; // avisar que foi o usuário que cancelou
    speechSynthesis.cancel();
    lendo = false;
    botao.innerText = "Ler";
    return;
  }

  // Verifica se o SpeechSynthesis ta funfando
  if (!window.speechSynthesis) {
    alert("A leitura de texto não é suportada neste navegador.");
    return;
  }

  // Evita que leia tudo junto mais de uma vez sabe
  speechSynthesis.cancel();

  // Cria o bixo que fala
  const texto = document.body.innerText;
  utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = 'pt-BR';
  utterance.rate = 1;

  // ta lendo
  lendo = true;
  canceladoPeloUsuario = false;
  botao.innerText = "Parar";

  // Termina bem de boas
  utterance.onend = () => {
    lendo = false;
    botao.innerText = "Ler";
  };

  // Em caso aconteça algum erro
  utterance.onerror = () => {
    lendo = false;
    botao.innerText = "Ler";
    if (!canceladoPeloUsuario) {
      alert("Erro ao tentar ler o texto.");
    }
  };

  // O bixo começa a ler
  try {
    speechSynthesis.speak(utterance);
  } catch (e) {
    lendo = false;
    botao.innerText = "Ler";
    alert("Este navegador não permite leitura de texto automaticamente.");
  }
}




document.addEventListener('DOMContentLoaded', () => {
  const btnTopo = document.getElementById('btnTopo');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      btnTopo.style.display = 'block';
    } else {
      btnTopo.style.display = 'none';
    }
  });

  btnTopo.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


window.addEventListener('load', () => {
  const track = document.querySelector('.Fotos');
  const imgs = track.querySelectorAll('img');
  const totalImgs = imgs.length;

  
  track.innerHTML += track.innerHTML;

  let position = 0;
  let speed;

  function setSpeed() {
    if (window.innerWidth <= 768) {
      speed = 1;  
    } else {
      speed = 1.5;  // 
    }
  }

  setSpeed();

  function animate() {
    position -= speed;

  
    if (position <= -track.scrollWidth / 2) {
      position = 0;
    }

    track.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    setSpeed();
  });
});
