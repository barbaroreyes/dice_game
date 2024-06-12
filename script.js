// Function to roll two dice and return their values
const rollDice = () => {
    const dade1 = Math.floor(Math.random() * 6) + 1;
    const dade2 = Math.floor(Math.random() * 6) + 1;
    return [dade1, dade2];
};

// Game function that uses the rolled dice
const dade_game = () => {
    const [dade1, dade2] = rollDice();
    let result = dade1 + dade2;
    let response;

    switch (result) {
        case 3:
        case 7:
        case 11:
            response = "You win";
            break;

        default:
            response = (dade1 === dade2 || (result % 3 === 0 && result !== 3))
                ? "You have an extra turn, you have pairs or divisible by 3"
                : "You lose";
            break;
    }

    return {
        dice: [dade1, dade2],
        result: response
    };
};

// Function to update the interface with the game result
const updateGame = () => {
    const gameResult = dade_game();
    document.getElementById('diceResult').textContent = `Dice 1: ${gameResult.dice[0]}, Dice 2: ${gameResult.dice[1]}`;
    document.getElementById('gameResult').textContent = `Result: ${gameResult.result}`;
};

// Adding event listener to the button
document.getElementById('rollButton').addEventListener('click', updateGame);
