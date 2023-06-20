//botoes
const closeModalButton = document.querySelector("#close-modal");
const naoGostei = document.querySelectorAll("#naoGostei")

//fade e modal
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

//texto do modal
const modalTexto = document.querySelector("#modal-texto");

//texto da quantidade de curtidas
const valor = document.querySelector('#valor')

let clickNaoGostei = 0;

//contador de likes
let contador = 0;

//botoes abrir modal de cada filme
const botaoChihiro = document.querySelector("#botaoChihiro");
const botaoChefao = document.querySelector("#botaoChefao");
const botaoJones = document.querySelector("#botaoJones");
const botaoGoldenEye = document.querySelector("#botaoGoldenEye");
const botaoET = document.querySelector("#botaoET");
const botaoGuerra = document.querySelector("#botaoGuerra");

//variaveis de verificacao se o filme ja recebeu like
let chihiro = 0;
let chefao = 0;
let jones = 0;
let goldenEye = 0;
let et = 0;
let guerra = 0;

//atualiza o valor de likes em tela
const atualizarValor = () => {
  valor.innerHTML = contador;
};

//mudanca do estado do modal de escondido para visivel e o inverso, passado o conteudo do texto a ser exibido
const toggleModal = (text, filmeCurtido) => {
  [modal, fade].forEach(element => {
    element.classList.toggle('hide');
    if (clickNaoGostei == 1) {
      modalTexto.textContent = text;
      document.body.style.setProperty('--color-texto', 'red');
      clickNaoGostei = 0;  
    }
    if (filmeCurtido == 1) {
      document.body.style.setProperty('--color-texto', 'blue');
      modalTexto.textContent = text;
    }
  });
};

//valida se o filme ja recebeu um like
const gosteiOuNaoGostei = (botaoClicado) => {
  switch (botaoClicado) {
    case 0:
      contador += 1;
      atualizarValor();
      break;
    case 1:
      toggleModal('Sei que este filme é muito bom, mas so uma curtida basta.', botaoClicado);
      break;
    default:
      break;
  };
};

//evento de abrir o modal de cada filme
botaoChihiro.addEventListener('click', () => {
  gosteiOuNaoGostei(chihiro);
  chihiro = 1;
});

botaoChefao.addEventListener('click', () => {
  gosteiOuNaoGostei(chefao);
  chefao = 1;
});

botaoJones.addEventListener('click', () => {
  gosteiOuNaoGostei(jones);
  jones = 1;
});

botaoGoldenEye.addEventListener('click', () => {
  gosteiOuNaoGostei(goldenEye);
  goldenEye = 1;
});

botaoET.addEventListener('click', () => {
  gosteiOuNaoGostei(et)
  et = 1;
});

botaoGuerra.addEventListener('click', () => {
  gosteiOuNaoGostei(guerra)
  guerra = 1;
});
//---------------------------------------

//evento de fechar o modal
[closeModalButton, fade].forEach(element => {
  element.addEventListener('click', () => toggleModal());
});

//evento do botao nao gostei
naoGostei.forEach(element => {
  element.addEventListener('click', () => {
    clickNaoGostei = 1;
    toggleModal('PROIBIDO NÃO GOSTAR DESTE FILME!!');
  });
});


