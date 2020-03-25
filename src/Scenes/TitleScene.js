import "phaser";
export default class extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  create() {
    // Game
    this.gameButton = this.add.sprite(100, 200, "blueButton1").setInteractive();
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

    this.input.on("pointerover", function(event, gameObjects) {
      gameObjects[0].setTexture("blueButton2");
    });

    this.input.on("pointerout", function(event, gameObjects) {
      gameObjects[0].setTexture("blueButton1");
    });
  }
}
