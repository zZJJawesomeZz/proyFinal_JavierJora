import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { levels } from './src/levels.js';
import { validateCommand } from './src/validator.js';

const rl = readline.createInterface({ input, output });

async function typeWriter(text, speed = 30) {
    for (const char of text) {
        process.stdout.write(char);
        await new Promise(r => setTimeout(r, speed));
    }
    process.stdout.write('\n');
}

async function clearScreen() {
    console.clear();
}

async function main() {
    await clearScreen();
    console.log("=================================");
    console.log("    TERMINAL QUEST: THE BEGINNING    ");
    console.log("=================================\n");

    await typeWriter("Bienvenido al simulador de entrenamiento...");
    await new Promise(r => setTimeout(r, 5000));

    for (const level of levels) {
        await clearScreen();
        console.log(`\n--- NIVEL ${level.id}: ${level.title.toUpperCase()} ---`);
        console.log(`[Categoría: ${level.category}]`);
        console.log("\nINSTRUCCIÓN:");
        await typeWriter(level.lesson, 15);

        console.log("\n---------------------------------");
        console.log(`DESAFÍO: ${level.challenge}`);
        console.log("---------------------------------\n");

        let solved = false;
        while (!solved) {
            const answer = await rl.question('root@terminal-quest:~$ ');

            if (validateCommand(answer, level)) {
                console.log("\n¡CORRECTO! Sistema sincronizado.\n");
                await new Promise(r => setTimeout(r, 1500));
                solved = true;
            } else {
                console.log(`\nError de sintaxis. Pista: ${level.errorTip}\n`);
            }
        }
    }

    await clearScreen();
    console.log("¡FELICIDADES! Has completado el entrenamiento básico.");
    console.log("Ya estás listo para romper la producción real ;)");
    rl.close();
}

main();
