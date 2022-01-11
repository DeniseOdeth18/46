var bg,bgImg;
var player, shooterImg, shooter_shooting;

//variable zombie e imagenes




function preload(){

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  
  //imagenes zombie y vidas
 

  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //agregando la imagen de fondo 
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creando el sprite del jugador 
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


   //creando sprites para representar la vida sobrante
  
   

    //creando un grupo para los zombis
    
}

function draw() {
  background(0); 

  //moviendo al jugador arriba y abajo: volviendolo compatible con juegos mobiles a traves de entrada tactil
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//liberar las balas y cambiar la imagen del tirador a posición de disparo cuando la barra espaciadora es presionada 
if(keyWentDown("space")){
  
  player.addImage(shooter_shooting)
  
 
}

//el jugador regresa a la imagen de la posicion original una vez que dejamos de presionar la barra espaciadora
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}


//destruir al zombi cuando el jugador lo toca


//llamar a la funcion para generar zombis


drawSprites();
}



//creando la función para generar zombis
function enemy(){


}
