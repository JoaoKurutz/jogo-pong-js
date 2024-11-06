let xRq=5
let yRq=150
let cRq=10
let aRq=100
// B=bolinha
let xB=300
let yB=200
let di= 25
let r=di/2
let colide=false
// velocidade B, velo=velocidade
let veloxB=5
let veloyB=5
let colidiu=false

let xrqop = 585
let yrqop= 150
let veloop


let meuspontos=0
let ponop =0

function setup() {
  createCanvas(600, 450);
}

function draw() {
  background("purple");
  mostrabola()
  marcapon()
  movebola()
  veribola()
  showraque()
  moveRq()
  vericolisao()
  colirqbiblio()
  showraqueop()
  moveop()
  colirqbiblioop()
  incpla()
}

  function mostrabola(){
  circle(xB, yB, di);}
  function movebola(){
  xB+=veloxB
  yB+=veloyB}
  
  function veribola(){
  if (xB+r> width || xB-r<0){
        veloxB*=-1
  }
    if (yB+r> height || yB-r<0){
        veloyB*=-1}

  }
  function showraque(){
    rect(xRq, yRq, cRq, aRq)
  }
  function showraqueop(){
    rect(xrqop, yrqop, cRq, aRq)
  }
  
  function moveRq(){
    if (keyIsDown(UP_ARROW)){
      yRq-=10
    }
    if (keyIsDown(DOWN_ARROW)){
      yRq+=10
  }
  }

  
  function vericolisao(){
    if (xB-r<xRq+cRq && yB-r < yRq + aRq && yB + r>yRq){
      veloxB*=-1
    }
      
  }
   function colirqbiblio(){
    colidiu= collideRectCircle(xRq, yRq, cRq, aRq, xB, yB, r);
      if(colidiu){
        veloxB*=-1
    }
    }

   function colirqbiblioop(){
    colidiu= collideRectCircle(xrqop, yrqop, cRq, aRq, xB, yB, r);
      if(colidiu==true){
        veloxB*=-1
    }
    }
 function moveop(){
   veloop=yB-yrqop-cRq/2-30
   yrqop+=veloop
 }
function incpla(){
  fill("red")
  textSize(24)
  text ("Eu "+ meuspontos,150,26)
  text("Adversário "+ponop,330,26)
}
function marcapon(){
    if(xB>590){
      meuspontos+=1
      
    }
  if(xB<10){
    ponop+=1
  }
}
    