#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

let GuessedNumber;
const randomNumber: number = Math.round(Math.random() * 10);
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    "WELCOME TO NUMBER GUESSING GAME"
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue("HOW TO PLAY")} 
    Try to Guess the Number Between 1-10
    When your Guess is Wrong your one ${chalk.bgRed("Live Losts")}
  `);
}

const guseeNum = async () => {
  const guess = await inquirer.prompt({
    name: "Guess",
    type: "input",
    message: "Guess the Number: ",
  });
  GuessedNumber = guess.Guess;
};

await welcome();

for (let i = 4; i != 0; i--) {
  let j=0;
  console.log("Your chances are", i);
  while(j<i){
    console.log(chalk.redBright("♥"));
    j++
  }
  await guseeNum();
  if (GuessedNumber == randomNumber) {
    console.log("You Guessed Right");
    break;
  } else {
    console.log("Try again");
  }
}
if(GuessedNumber==randomNumber){
  console.log(chalk.green("Congrats you Win"))
}
else{
  console.log(chalk.red('YOU LOST!'))
  console.log(chalk.blue("The correct number was: ")+chalk.green(randomNumber))
}
