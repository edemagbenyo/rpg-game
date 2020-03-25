export default class BootScene extends Phaser.Scene {
  constructor(){
    super(Boot)
  }
  preload() {
    this.load.image('cokecan', 'assets/cokecan.png');
  }
  create() {
    this.scene.start('WorldScene');

    this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
  }
}