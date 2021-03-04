const readLine=require("readline-sync");

const questions=[{
  question:"What is my favorite food ? ",
  answer:"Pizza"
},
{
  question:"What is my favorite animal ? ",
  answer:"Dog"
},
{
  question:"Who is my favorite FRIENDS's character ? ",
  answer:"Joey"
}]

var score=0;

function playGame(question,answer){
  const userAnswer=readLine.question(question);
  if(userAnswer.toLowerCase()===answer.toLowerCase()){
    console.log("Yeah! That's Correct!!" +"\n");
    score+=1;
  }
  else{
    console.log("Oops! That's incorrect" +"\n");
  }
}
for(let i=0;i<questions.length;i++){
  playGame(questions[i].question,questions[i].answer);
}
console.log("Your Score is: "+score);