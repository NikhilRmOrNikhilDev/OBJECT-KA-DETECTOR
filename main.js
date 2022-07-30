img = "";
statu = "";
object = [];
function preload(){
    img = loadImage("human.jpg");
}
function setup(){
    canvas = createCanvas(500, 300)
    canvas.position();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    
}
function draw(){
    image(img, 0, 0, 500, 300);

    if(statu != ""){
        for( i=0; i<object.length; i++ ){
           
            fill("#009dff");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + "" + percent + "%", object[i].x + 15 + 100, object[i].y + 15)
            noFill();
            stroke("#009dff");
            rect(object[i].x + 70, object[i].y + 20, object[i].width + 100, object[i].height + 100);

        }
    }
}
function modelLoaded(){
    console.log("ModelLoaded!!!");
    statu = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        object = results;
    }
}