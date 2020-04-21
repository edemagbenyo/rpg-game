import Phraser from 'phaser';
import config from '../Config/config';

export default class extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.creditsText = this.add.text(0, 0, 'Credits', {
      fontSize: '32px',
      fill: '#fff',
    });
    this.madeByText = this.add.text(0, 0, 'Created By: Edem Agbenyo(El Chapo)', {
      fontSize: '26px',
      fill: '#fff',
    });

    this.organizationText = this.add.text(0, 0, 'Microverse Corp.', {
      fontSize: '24px',
      fill: '#FFF',
    });
    this.zone = this.add.zone(
      config.width / 2,
      config.height / 2,
      config.width,
      config.height,
    );

    Phaser.Display.Align.In.Center(this.creditsText, this.zone);

    Phaser.Display.Align.In.Center(this.madeByText, this.zone);

    Phaser.Display.Align.In.Center(this.organizationText, this.zone);

    this.madeByText.setY(1000);
    this.organizationText.setY(1100);

    // Add animation to remove the credit text and display the made byt text
    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete() {
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: function () {
        this.destroy;
        this.scene.start('Title');
      }.bind(this),
    });

    this.organizationByTween = this.tweens.add({
      targets: this.organizationText,
      y: -100,
      ease: 'Power1',
      duration: 7000,
      delay: 1000,
      onComplete: function () {
        this.organizationByTween.destroy;
        this.scene.start('Title');
      }.bind(this),
    });
  }
}
