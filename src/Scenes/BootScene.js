export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    // In the boot scene we preload welcome image, which is the logo.
    this.load.image('logo', 'assets/graphics/logo.png');
  }

  create() {
    // Then we proceed to start the Preloader scene
    this.scene.start('Preloader');
  }
}