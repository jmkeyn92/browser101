'use strict';

import PopUp from './popup.js';
// import Field from './field.js';
// import * as sound from './sound.js';
import Game from './game.js';

const CARROT_COUNT = 20;
const BUG_COUNT = 30;
const GAME_DURATION_SEC = 15;



const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
  game.start();
});

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

















