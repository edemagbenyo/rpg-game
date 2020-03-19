import 'phaser';

import BootScene from './scenes/boot-scene';

const gameConfig = {
  width: 680,
  height: 400,
  scene: [BootScene]
};

new Phaser.Game(gameConfig);