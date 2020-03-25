import "phaser";
import config from "./../Config/config";

export default class extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  create() {
    // SetInteractive: By making a sprite interactive, Phaser will fire different events when
    // the player interacts with that object. Some of these events include when a player mouses
    // over an object or when they click on it.
    this.gameButton = this.add.sprite(100, 200, "blueButton1").setInteractive(); //This makes the button interactive.
    this.centerButton(this.gameButton, 1);

    //We use add.text to create text.
    this.gameText = this.add.text(0, 0, "Play", {
      fontSize: "32px",
      fill: "#fff"
    });
    this.centerButtonText(this.gameText, this.gameButton);

    this.gameButton.on(
      "pointerdown",
      function(pointer) {
        this.scene.start("Game");
      }.bind(this)
    );

    // Options
    this.optionsButton = this.add
      .sprite(300, 200, "blueButton1")
      .setInteractive();
    this.centerButton(this.optionsButton);

    this.optionsText = this.add.text(0, 0, "Options", {
      fontSize: "32px",
      fill: "#fff"
    });
    this.centerButtonText(this.optionsText, this.optionsButton);

    this.optionsButton.on(
      "pointerdown",
      function(pointer) {
        this.scene.start("Options");
      }.bind(this)
    );

    // Credits
    this.creditsButton = this.add
      .sprite(300, 200, "blueButton1")
      .setInteractive();
    this.centerButton(this.creditsButton, -1);

    this.creditsText = this.add.text(0, 0, "Credits", {
      fontSize: "32px",
      fill: "#fff"
    });
    this.centerButtonText(this.creditsText, this.creditsButton);

    this.creditsButton.on(
      "pointerdown",
      function(pointer) {
        this.scene.start("Credits");
      }.bind(this)
    );

    this.input.on("pointerover", function(event, gameObjects) {
      gameObjects[0].setTexture("blueButton2");
    });

    this.input.on("pointerout", function(event, gameObjects) {
      gameObjects[0].setTexture("blueButton1");
    });

    //Check if the music is set and play
    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add("bgMusic", { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(
        config.width / 2,
        config.height / 2 - offset * 100,
        config.width,
        config.height
      )
    );
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(gameText, gameButton);
  }
}
