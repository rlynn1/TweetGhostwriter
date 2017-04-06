function writeTweet()
{
  var randIndex;
  var sentence;
  var intros = ["You know those people who", "Today I really want to",
                "Have you ever tried to", "Sometimes I wonder if my descendants will"];
  var body = ["party all day and then go home and cry", "eat an entire pizza in one sitting",
              "only play laser tag against little kids to ensure victory",
              "do my math homework", "learn how to bake"];
  var end = ["all for my glory.", "in an attempt to find meaning in life."];
  randIndex = randomUpTo(intros.length-1);
  sentence = intros[randIndex] + " ";
  randIndex = randomUpTo(body.length-1);
  sentence += body[randIndex] + " ";
  randIndex = randomUpTo(end.length-1);
  sentence += end[randIndex];
  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
