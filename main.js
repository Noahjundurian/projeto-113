function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(400, 100);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {

    Image(video, 230, 150, 220, 200);

    //BOLHINHA VEMELHA 
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circule(50, 50, 80);

    circule(50, 430, 80);
    circule(590, 50, 80);
    circule(590, 430, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20)

    rect(90, 420, 460, 20)
    rect(40, 90, 20, 300)
    rect(580, 90, 20, 300)
}
function take_snapshot() { save('noah.png'); }