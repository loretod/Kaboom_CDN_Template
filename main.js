// initialize context
kaboom({
	background: [ 119, 136, 153 ],
});

scene("game", ({score}) => {  
  const reversed_letters = ["b","d","p","q"];

  loadSound("score", "sounds/score.mp3");
  loadSound("burp", "sounds/burp.mp3");
  loadSound("applause", "sounds/applause.wav");

  var letter = reversed_letters[Math.floor(Math.random() * reversed_letters.length)];

  var current_letter = add([
    text(letter ,{
      size: 300,
    }),
      width(width()/2),
      pos(width()/2, height()/6),
      color(255,255,0),
  ]);

const score_label = add([
  text("score: 0"),
  pos(width()/1.5,height()/1.1),
  { value: 0, size:5 },
])

function generate_letter(){
  letter = reversed_letters[Math.floor(Math.random() * reversed_letters.length)];
  current_letter.text = letter;
};

function update_score(){
  score++;
  score_label.text = "Score: " + score;
  play("score");
};

onKeyPress("up", () => {
  if (letter == "p"){
    update_score();
    generate_letter();
    } else {
      //debug.log("nope! try another");
      generate_letter();
      burp();
    }
});

onKeyPress("down", () => {
  if (letter == "q"){
    update_score()
    generate_letter();
    } else {
      //debug.log("nope! try another");
      generate_letter();
      burp();
    }
});

onKeyPress("right", () => {
  if (letter == "b"){
    update_score();
    generate_letter();
    } else {
      //debug.log("nope! try another");
      generate_letter();
      burp();
    }
});

onKeyPress("left", () => {
  if (letter == "d"){
    update_score();
    generate_letter();
    } else {
      //debug.log("nope! try another");
      generate_letter();
      burp();
    }
});

wait(30, () => {
    go("done", {score: score, });
});

});

scene("done", ({score}) => {
  add([
		text(`All done! Your final score is ${score}!`, {
			width: width(),
		}),
		pos(12, height()/2),
	])
  play("applause");
  onKeyPress(start);
});

function start(){
  go("game",{
    score:0,
  })
}

start();