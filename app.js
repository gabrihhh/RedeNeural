
function setup() {
    createCanvas(400, 400);

    var nn = new RedeNeural(1,3,1);
    var arr = [1,2];
    nn.feedfoward(arr)
  }
  
  function draw() {
    background(0);
  }