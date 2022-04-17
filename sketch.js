var dog,sadDog,happyDog;
var feed,addfood
var foods
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("feed dog")
  feed.position(700,95)
feed.mousepressed(feeddog)
  addfood=createButton("add food")
  addfood.position(800,95)
addfood.mousedpressed(addfood)
foodstock=database.ref('food')
foodstock.on("value",readstock)
  foodObj=new Food()
}

function draw() {
  background(46,139,87);
  foodObj.display()
  drawSprites();
}

//function to read food Stock
 function readstock(data){
foods=data.val()
foodobj.updatefoodstock(foods)

 }

//function to update food stock and last fed time
function feeddog(){
  if(foodobj.getfoodstock()<=0){
    foodobj.updatefoodstock(foods)
  }
}

//function to add food in stock
