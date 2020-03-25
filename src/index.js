import 'phaser';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import TitleScene from './Scenes/TitleScene';
import CreditsScene from './Scenes/CreditsScene';
import PreloaderScene from './Scenes/PreloaderScene';
import BootScene from './Scenes/BootScene';
import OptionsScene from './Scenes/OptionsScene';
 import Model from "./Model";
class Game extends Phaser.Game {
  constructor () {
    super(config);
    const model = new Model();
    // By adding the model instance to a property on our Phaser Game Object, 
    // we are now able to access that model in our Scenes by calling this.sys.game.globals.model.
    this.globals = {model, bgMusic:null}
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
  
}
 
window.game = new Game();