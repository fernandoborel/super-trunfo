var carta1 = {
  nome: "Goku",
  imagem:
    "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/04/Dragon-Ball.jpg",
  atributos: {
    ataque: 10,
    defesa: 9,
    magia: 10
  }
};

var carta2 = {
  nome: "Vegeta",
  imagem: "https://upload.wikimedia.org/wikipedia/pt/a/ac/Vegeta.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 9
  }
};

var carta3 = {
  nome: "Majin Boo Magro",
  imagem: "https://i.imgur.com/xI9tVGWl.png",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 7
  }
};

var carta4 = {
  nome: "Majin Boo Gordo",
  imagem:
    "https://kanto.legiaodosherois.com.br/w1200-h628-cfill/wp-content/uploads/2017/04/legiao_nCbtP1rm76OQkWEFGH3NJIcT8BRjVgvf5hqxU0DoKA.jpg.jpeg",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 7
  }
};

var carta5 = {
  nome: "Gohan",
  imagem:
    "https://conteudo.imguol.com.br/c/entretenimento/9c/2017/07/14/gohan-1500057808905_v2_1x1.jpg",
  atributos: {
    ataque: 8,
    defesa: 7,
    magia: 8
  }
};

var carta6 = {
  nome: "Jiren",
  imagem:
    "https://static.wikia.nocookie.net/dragonball/images/3/33/Jiren1.png/revision/latest?cb=20170723224647",
  atributos: {
    ataque: 10,
    defesa: 10,
    magia: 10
  }
};

var carta7 = {
  nome: "Bills",
  imagem:
    "https://ovicio.com.br/wp-content/uploads/2021/02/20210206-bills-dragon-ball.jpg",
  atributos: {
    ataque: 10,
    defesa: 10,
    magia: 10
  }
};

var carta8 = {
  nome: "Goku Black",
  imagem:
    "https://sm.ign.com/ign_br/screenshot/default/goku-black-dragon-ball-super_2742.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 9
  }
};

var carta9 = {
  nome: "Freeza",
  imagem:
    "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2021/01/legiao_XBG01F9VmoRv.jpg.jpeg",
  atributos: {
    ataque: 8,
    defesa: 8,
    magia: 7
  }
};

var carta10 = {
  nome: "Cell",
  imagem: "https://atualinerd.com.br/wp-content/uploads/2021/05/Cell-capa.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 7
  }
};

var cartaMaquina;
var cartaJogador;
var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10
];
// 0          1           2

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 11);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 11);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 11);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  console.log("chamou");
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
