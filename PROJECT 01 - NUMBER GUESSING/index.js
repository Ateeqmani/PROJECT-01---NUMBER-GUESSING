#! /usr/bin/env node
import inquirer from "inquirer";
let score = 0;
let attempts = 0;
const maxAttempts = 10;
function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
}
async function main() {
    console.warn("--------------------Welcome--------------------");
    while (attempts < maxAttempts) {
        const autogeneratenumber = generateRandomNumber();
        const ans = await inquirer.prompt([
            {
                type: "number",
                name: "userguessing",
                message: "Write down your guess number between 1 to 10",
            },
        ]);
        const { userguessing } = ans;
        if (userguessing === autogeneratenumber) {
            console.log(`user_guess ${userguessing} Agn ${autogeneratenumber}`);
            score += 5;
            console.log("Your answer is correct. Congratulations! :)");
            console.log(`Your score is ${score}`);
        }
        else {
            console.log(`user_guess ${userguessing} Agn ${autogeneratenumber}`);
            console.warn("Oops, Your answer is not correct. Please try again.");
            attempts++;
            if (attempts === maxAttempts) {
                console.warn("You failed to give a correct answer.");
                console.log(`-----Your final score is ${score}-----`);
                console.warn("--------------------Thank you for playing! Goodbye.--------------------");
            }
        }
    }
}
main();
