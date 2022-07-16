'use strict';

import * as sound from './sound.js';
import Field from './field.js';

export default class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carrotCount = carrotCount;
    this.butCount = bugCount;
  
    this.gameBtn = document.querySelector('.game__button');
    this.timerIndicator = document.querySelector('.game__timer');
    this.gameScore = document.querySelector('.game__score');

    this.gameBtn.addEventListener('click', () => {
      if (started) {
        this.stop();
      } else {
        this.start();
      }
    });

    this.gameField = new Field(carrotCount, bugCount);
    this.gameField.setClickListener(this.onItemClick);


    this.started = false;
    this.score = 0;
    this.timer = undefined;

  }

  start() {
    this.started = true;
    this.initGame();
    this.showStopButton();
    this.showTimerAndScore();
    this.startGameTimer();
    sound.playBackground();
  }
  
  stop() {
    this.started = false;
    this.stopGameTimer();
    this.hideGameButton();
    this.gameFinishBanner.showWithText('REPLAY❓');
    sound.playAlert();
    sound.stopBackground();
  }


  onItemClick = (item) => {
    if (!this.started) {
      return;
    }
    if (item === 'carrot') {
      this.score++;
      this.updateScoreBoard();
      if (score === CARROT_COUNT) {
        this.finishGame(true);
      }
    } else if (item === 'bug') {
      this.finishGame(false);
    }
  }

};