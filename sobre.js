
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


window.addEventListener ('load', () => {
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