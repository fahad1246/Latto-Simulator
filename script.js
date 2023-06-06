//Fahad Mohammed  js Comment
//Feb 12, 2021
//Project 3
//This LottoGame Class makes an object for the class, and it reffers the object that belongs to the class.

class LottoGame {

    constructor(numLottos, numBalls) {
        this.numLottos = numLottos;
        this.numBalls = numBalls;
        this.ball = [ ];
        for(let i = 0; i < numBalls; i++) {
            this.ball.push(0);
        }
    }

    drawBalls( ) {
        for(let i = 0; i < this.numBalls; i++) {
            let lotto = Math.floor(Math.random( ) * 
                this.numLottos) + 1;
            this.ball[i] = lotto; 
        }
    }

    
    getLottoBall(index) {
        return this.ball[index - 1];
    }

    toString( ) {
        var output = '';
        for(let i = 0; i < this.numBalls; i++) {
            output += this.ball[i] + ' ';
        }
        return output;
    }
}
//This functions runs the given function to randomly draw images of the ball.
function drawBalls( ) {
    var bg = new LottoGame (30, 5);
    bg.drawBalls( );
    for(let i = 1; i <= 5; i++) {
        let imgLocation = i.valueOf( );
        let imgNum = bg.getLottoBall(i);
        let image = document.getElementById(imgLocation);
        let pathName = "lottoballs/" + imgNum + ".gif";
        image.src = pathName;
    }
}
//this function performs the slider function
function init(){ 
    var Button = document.getElementById("btn");    
    Button.onclick = drawLotto; 
    var slider = document.getElementById("drawBall"); 
    var output = document.getElementById("numLottoBalls");
    output.innerHTML = slider.value; 
    slider.oninput = function() {
    output.innerHTML = this.value;   
 }
}
//this function allows the user to press the button to get the randomized pictures of the balls
function init( ) {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", drawBalls);

    for(let i = 1; i <= 5; i++) {
        let imageId = i.valueOf( );
        let image = document.getElementById(imageId);
        image.addEventListener("click", event => {
            var clickedImage = event.target;
            var imgNum = (Math.floor(Math.random( ) * +
                30) + 1).valueOf( );
            clickedImage.src = "lottoballs/" + imgNum + ".gif";
        });
    }
}
//loads the page for the user
window.addEventListener("load", init);