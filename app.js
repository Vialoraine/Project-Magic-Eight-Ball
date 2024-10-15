let userName = "Loraine";

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

const userQuestion = '"Will I win the lottery?"';

userName ? console.log(`${userName} asks the Magic 8 ball: ${userQuestion}`) : console.log(`You ask the Magic 8 ball: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);