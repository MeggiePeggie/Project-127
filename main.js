riptide = "";
shut_up_and_dance = "";

function preload()
{
    riptide = loadSound("Vance Joy - Riptide.mp3");
    shut_up_and_dance = loadSound("Walk The Moon - Shut Up and Dance");
}

function setup()
{
    canvas = createCanvas(150, 150);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 150, 150);
}

