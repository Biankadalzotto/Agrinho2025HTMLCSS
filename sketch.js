let mapa;

let xBanco = 206;
let yBanco = 249;

let xEscolaIne = 166;
let yEscolaIne = 531;

let xIgrejaCristoRei = 590;
let yIgrejaCristoRei = 256;

let xEstufaDeFumo = 588;
let yEstufaDeFumo = 555;

function preload() {
  mapa = loadImage("mapa.jpg"); 
}

function setup() {
  createCanvas(800, 600);
  textSize(14);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

function draw() {
  background(220);
  image(mapa, 0, 0, width, height);
  
  fill(0, 100, 255);
  text("X: " + mouseX + " Y: " + mouseY, 70, 20);

  fill("white");
  ellipse(xBanco, yBanco, 10, 10);
  ellipse(xEscolaIne, yEscolaIne, 10, 10);
  ellipse(xIgrejaCristoRei, yIgrejaCristoRei, 10, 10);
  ellipse(xEstufaDeFumo, yEstufaDeFumo, 10, 10);

  stroke(0);
  strokeWeight(2);
  line(xBanco, yBanco, xEstufaDeFumo, yEstufaDeFumo);
  line(xEscolaIne, yEscolaIne, xIgrejaCristoRei, yIgrejaCristoRei);
  line(xEscolaIne, yEscolaIne, xBanco, yBanco);
  noStroke();

  // Função para desenhar texto com quebra de linha dentro de uma caixa
  function drawTextBox(x, y, txt, boxWidth) {
    fill(255);
    rectMode(CENTER);
    // Quebrar texto em linhas que caibam na largura da caixa
    let words = txt.split(' ');
    let lines = [];
    let line = '';
    for (let i = 0; i < words.length; i++) {
      let testLine = line + words[i] + ' ';
      if (textWidth(testLine) > boxWidth) {
        lines.push(line);
        line = words[i] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line);

    let boxHeight = lines.length * 18 + 10;
    rect(x, y, boxWidth + 20, boxHeight);
    
    fill(0);
    textAlign(CENTER, TOP);
    for (let i = 0; i < lines.length; i++) {
      text(lines[i], x, y - boxHeight/2 + 5 + i * 18);
    }
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
  }

  // Banco ↔ Estufa de Fumo (direita e acima)
  let bx1 = (xBanco + xEstufaDeFumo) / 2 + 60;
  let by1 = (yBanco + yEstufaDeFumo) / 2 - 30;
  if (dist(mouseX, mouseY, (xBanco + xEstufaDeFumo) / 2, (yBanco + yEstufaDeFumo) / 2) < 20) {
    let msg1 = "O banco e a estufa de fumo se conectam no dia a dia do agricultor: enquanto um garante o crédito, o outro transforma trabalho em renda. Juntos, representam o esforço e a sobrevivência no campo.";
    drawTextBox(bx1, by1, msg1, 280);
  }

  // Escola Inê ↔ Igreja Cristo Rei (esquerda)
  let bx2 = (xEscolaIne + xIgrejaCristoRei) / 2 - 70;
  let by2 = (yEscolaIne + yIgrejaCristoRei) / 2;
  if (dist(mouseX, mouseY, (xEscolaIne + xIgrejaCristoRei) / 2, (yEscolaIne + yIgrejaCristoRei) / 2) < 20) {
    let msg2 = "A escola e a igreja caminham juntas na formação das pessoas, uma ensinando o conhecimento e a outra cultivando valores e fé. Ambas são espaços de aprendizado que ajudam a construir a base para uma vida mais plena e consciente.";
    drawTextBox(bx2, by2, msg2, 280);
  }

  // Escola Inê ↔ Banco (abaixo)
  let bx3 = (xEscolaIne + xBanco) / 2;
  let by3 = (yEscolaIne + yBanco) / 2 + 40;
  if (dist(mouseX, mouseY, (xEscolaIne + xBanco) / 2, (yEscolaIne + yBanco) / 2) < 20) {
    let msg3 = "A escola prepara o conhecimento e as habilidades, enquanto o banco oferece recursos para transformar esses aprendizados em oportunidades reais. Juntos, ajudam a construir um futuro mais estável e cheio de possibilidades.";
    drawTextBox(bx3, by3, msg3, 280);
  }
}
