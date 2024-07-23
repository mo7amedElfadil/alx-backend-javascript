#!/usr/bin/node
/**
 * @function stdinPrompt - Prompts the user for input from stdin
 * @returns {undefined}
 */

function stdinPrompt() {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data}`);
  });
  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
}

stdinPrompt();
