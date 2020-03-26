import 'phaser';
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super({physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    }});

    // this.player = null;
  }
 
  preload () {
    // load images
    // this.load.image('logo', 'assets/cokecan.png');
  }
 
  create () {
    this.add.image(400, 500, 'night');

    this.platforms = this.physics.add.staticGroup();
    
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

      this.platforms.create(600, 400, 'ground');
      this.platforms.create(50, 250, 'ground');
      this.platforms.create(750, 220, 'ground');

      this.player = this.physics.add.image(100, 450, 'player');

      this.player.setBounce(0.2);
      this.player.setCollideWorldBounds(true);

      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'turn',
        frames: [{ key: 'player', frame: 4 }],
        frameRate: 20
      });

      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
      });

       //Assign the directional keyboards
       this.cursors = this.input.keyboard.createCursorKeys();

      this.physics.add.collider(this.player, this.platforms);
      // this.physics.add.collider(stars, platforms);
      // this.physics.add.collider(stars, player);
      // this.physics.add.overlap(this.player, stars, collectStar, null, this);
  }

  update(){
    
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);

      this.player.anims.play('left', true);
    }
    else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);

      this.player.anims.play('right', true);
    }
    else {
      this.player.setVelocityX(0);

      this.player.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
    if(this.cursors.down.isDown && !this.player.body.touching.down){
      this.player.setVelocityY(300)
    }
  }
};