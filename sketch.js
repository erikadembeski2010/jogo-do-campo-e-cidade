function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#61392A");
  } else {
    background("rgb(32,223,37)");
  }
}

function desenhaJogadores() {
  textSize(40);
  text("🚜", xJogador1, 50);
  text("🚗", xJogador2, 350);
}

function desenhaLinhaDeChegada() {
  rect(350, 0, 10, 400);
}

function verificaVencedor() {
  if (xJogador1 > 350) {
    text("Interior venceu!", 0, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("Jogador da cidade venceu!", 50, 200);
    noLoop();
  }
}

function keyReleased() {
  if (key == "a") {
    xJogador1 += random(20);
  }
  if (key == "s") {
    xJogador2 += random(20);
  }
}
