document.addEventListener('DOMContentLoaded', init);

let canvas, ctx, backgroundImg, runSprites, thoughtBubble, frames;

function init()
{
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    backgroundImg = new Image();
    backgroundImg.src = 'assets/images/desert-background.png';
    backgroundImg.onload = () => ctx.drawImage(backgroundImg, 0, 0);

    runSprites = new Image();
    runSprites.src = 'assets/images/run-spritesheet.png';

    thoughtBubble = new Image();
    thoughtBubble.src = 'assets/images/thought-bubble1.png';

    frames = runner.frames;
    startAnim();
}

function startAnim()
{
    let count = 0;

    setInterval(() =>
    {
        drawFrame(count);
        count >= frames.length - 1 ? count = 0 : count++;
    }, 50);
}

function clearCanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImg, 0, 0);
}

function drawFrame(frameNum)
{
    clearCanvas();

    let f = frames[frameNum];
    ctx.drawImage(
        runSprites,
        f.frame.x,
        f.frame.y,
        f.frame.w,
        f.frame.h,
        (canvas.width / 2) - 100,
        300,
        f.sourceSize.w,
        f.sourceSize.h
    );
    drawSpeech();
}

function drawSpeech()
{
    ctx.drawImage(thoughtBubble, 50, 50);
    
    // Text
    ctx.font = '18px Consolas';
    ctx.fillStyle = 'black'
    ctx.textAlign = 'center';
    ctx.fillText('How much longer', 210, 130);
    ctx.fillText('do I have to run?', 210, 170);
}