'use strict';

import PopUp from './popup.js';
// import Field from './field.js';
// import * as sound from './sound.js';
import Game from './game.js';

const GAME_DURATION_SEC = 20;
const CARROT_COUNT = 10;
const BUG_COUNT = 1;

const gameFinishBanner = new PopUp();
const game = new Game(GAME_DURATION_SEC, CARROT_COUNT, BUG_COUNT);

game.setGameStopListener((reason) => {
  console.log(reason);
  let message;
  switch (reason) {
    case 'cancel':
      message = 'REPLAY❓';
      break;
    case 'win':
      message = 'YOU WON 🎉'
      break;
    case 'lose':
      message = 'YOU LOST 💩'
      break;
    default:
      throw new Error('not valid reason');

  };

  gameFinishBanner.showWithText(message);

});

gameFinishBanner.setClickListener(() => {
  game.start();
});
















