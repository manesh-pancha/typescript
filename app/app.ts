import {Player} from './player';
import {Game} from './game';
import * as Helpers from './utility';

let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
  const player: Player = new Player();
  player.name = Helpers.getValue('playername');

  const problemCount: number = Number(Helpers.getValue('problemCount'));
  const factor: number = Number(Helpers.getValue('factor'));

  newGame = new Game(player, problemCount, factor);
  newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
  newGame.calculateScore();
});

// using a tripple slash allows me to reference other files that are needed for the compiling 
// var : string type annotation as doesnt return data the void data annotation at the end has been added

// adding a default input to the variable makes the the var optional and allows you to call with a new data string without errors


// ? makes the function optional