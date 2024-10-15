let userName = "Loraine";

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

const userQuestion = '"Will I win the lottery?"';

userName ? console.log(`${userName} asks the Magic 8 ball: ${userQuestion}`) : console.log(`You ask the Magic 8 ball: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

//Control Flow Using If/Else Statements

/* if (randomNumber === 0) {
  eightBall = "It is certain.";
  console.log(`Magic 8 Ball replies: "${eightBall}"`);
} else if (randomNumber === 1) {
  eightBall = "It is decidedly so.";
  console.log(`Magic 8 Ball replies: "${eightBall}"`);
} else if (randomNumber === 2) {
  eightBall = "Reply hazy try again.";
  console.log(`Magic 8 Ball replies: "${eightBall}"`);
} else if (randomNumber === 3) {
  eightBall = "Cannot predict now.";
  console.log(`Magic 8 Ball replies: "${eightBall}"`);
} else if (randomNumber === 4) {
  eightBall = "Do not count on it.";
  console.log(`Magic 8 Ball replies: "${eightBall}"`);
} else if (randomNumber === 5) {
  eightBall = "My sources say no.";
  console.log(`Magic 8 Ball replies: "${eightBall}"`);
} else if (randomNumber === 6) {
  eightBall = "Outlook not so good.";
  console.log(`Magic 8 Ball replies: "${eightBall}"`);
} else {
  eightBall = "Signs point to yes.";
  console.log(`Magic 8 Ball replies: "${eightBall}"`);
}
*/

//Control Flow Using Switch/Case Statements

switch (randomNumber) {
  case 0:
    eightBall = "It is certain.";
    console.log(`Magic 8 Ball replies: "${eightBall}"`);
    break;
  case 1:
    eightBall = "It is decidedly so.";
    console.log(`Magic 8 Ball replies: "${eightBall}"`);
    break;
  case 2:
    eightBall = "Reply hazy try again.";
    console.log(`Magic 8 Ball replies: "${eightBall}"`);
    break;
  case 3:
    eightBall = "Cannot predict now.";
    console.log(`Magic 8 Ball replies: "${eightBall}"`);
    break;
  case 4:
    eightBall = "Do not count on it.";
    console.log(`Magic 8 Ball replies: "${eightBall}"`);
    break;
  case 5:
    eightBall = "My sources say no.";
    console.log(`Magic 8 Ball replies: "${eightBall}"`);
    break;
  case 6:
    eightBall = "Outlook not so good.";
    console.log(`Magic 8 Ball replies: "${eightBall}"`);
    break;
  default:
    eightBall = "Signs point to yes.";
    console.log(`Magic 8 Ball replies: "${eightBall}"`);
    break;
}