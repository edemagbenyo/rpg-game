import Phaser from 'phaser';
import ScoreBoard from '../Objects/ScoreBoard';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 },
          debug: false,
        },
      },
    });
    this.starsCount = 29;
    this.ScoreBoard = new ScoreBoard(0, this.starsCount + 1);
  }

  preload() {
    // load images
    this.load.image('star', 'assets/graphics/star.png');
    this.load.spritesheet('player', 'assets/graphics/player/dude.png', {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  hitBomb() {
    this.physics.pause();

    this.player.setTint(0xff0000);

    this.player.anims.play('turn');

    this.gameOver = true;
  }

  collectStar(player, star) {
    star.disableBody(true, true);
    this.ScoreBoard.score += 1;
    // this.ScoreBoard.displayBoard()

    if (this.stars.countActive(false) % 5 === 0) {
      const x = player.x < 400
        ? Phaser.Math.Between(400, 800)
        : Phaser.Math.Between(0, 400);
      const bomb = this.bombs.create(x, 16, 'bomb');
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
    if (this.stars.countActive(true) === 0) {
      this.stars.children.size = 5;
      this.stars.children.iterate((child) => {
        child.enableBody(true, child.x, 0, true, true);
      });
    }
  }

  // createBomb(){
  //   var bomb = this.bombs.create(x, 16, "bomb");
  //     bomb.setBounce(1);
  //     bomb.setCollideWorldBounds(true);
  //     bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
  // }
  createStars(starsCount) {
    const yAxis = Phaser.Math.RND.between(100, 500);
    this.stars = this.physics.add.group({
      key: 'star',
      repeat: starsCount,
      setXY: { x: 12, y: yAxis, stepX: 50 },
    });

    this.stars.children.iterate((child) => {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });
    // this.stars = Object.assign({},this.stars,stars)
  }

  createPlatform() {
    this.platforms = this.physics.add.staticGroup();

    this.platforms.create(800, 1000, 'ground').setScale(5).refreshBody();

    this.platforms.create(300, 290, 'ground');
    this.platforms.create(300, 600, 'ground');
    this.platforms.create(200, 770, 'ground');
    this.platforms.create(600, 450, 'ground');
    this.platforms.create(750, 220, 'ground');
    this.platforms.create(900, 700, 'ground');
    this.platforms.create(1500, 500, 'ground');
    this.platforms.create(1200, 320, 'ground');
    this.platforms.create(1900, 320, 'ground');
  }

  create() {
    // Create score

    this.ScoreBoard.displayBoard();

    this.mainbg = this.add.image(400, 500, 'night');
    this.createPlatform();
    this.player = this.physics.add.sprite(400, 450, 'player');
    this.player.setBounce(0.2);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'player', frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.createStars(this.starsCount);

    // Set the limits of the world where we play
    this.physics.world.bounds.width = this.mainbg.width / 2 - 200;
    this.physics.world.bounds.height = this.mainbg.height / 2;
    this.player.setCollideWorldBounds(true);
    // // Assign the directional keyboards
    this.cursors = this.input.keyboard.createCursorKeys();
    this.bombs = this.physics.add.group();
    this.physics.add.collider(this.bombs, this.platforms);

    this.physics.add.collider(
      this.player,
      this.bombs,
      this.hitBomb,
      null,
      this,
    );

    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.stars, this.platforms);
    this.physics.add.overlap(
      this.player,
      this.stars,
      this.collectStar,
      null,
      this,
    );

    this.cameras.main.setBounds(
      0,
      0,
      this.mainbg.width / 2 - 200,
      this.mainbg.height / 2,
    );
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true;
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);

      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);

      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);

      this.player.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
    if (this.cursors.down.isDown && !this.player.body.touching.down) {
      this.player.setVelocityY(300);
    }
  }
}
