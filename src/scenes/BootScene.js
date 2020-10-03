import {Scene} from 'phaser';

class BootScene extends Scene {
  constructor() {
    super("scene-boot");
  }
  
  preload() {
    // Load any assets here from your assets directory
    this.load.tilemapTiledJSON('level1', 'assets/level1.json');
    this.load.tilemapTiledJSON('level2', 'assets/level2.json');
    this.load.tilemapTiledJSON('level3', 'assets/level3.json');
    this.load.tilemapTiledJSON('level4', 'assets/level4.json');
    this.load.tilemapTiledJSON('level5', 'assets/level5.json');
    this.load.tilemapTiledJSON('level6', 'assets/level6.json');
    this.load.tilemapTiledJSON('level7', 'assets/level7.json');
    this.load.tilemapTiledJSON('level8', 'assets/level8.json');
    this.load.tilemapTiledJSON('level9', 'assets/level9.json');

    this.load.image('bricks', 'assets/bricks.png');
    this.load.image('heart', 'assets/heart.png');
    this.load.spritesheet('bomb', 'assets/bomb.png', {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet('kaboom', 'assets/kaboom.png', {
      frameWidth: 64,
      frameWidth: 64
    });
    this.load.audio('boom', 'assets/kaboom.mp3');
    this.load.audio('ding', 'assets/ding.mp3');
  }

  create() {

    this.anims.create({
      key: 'bomb-idle',
      frames: this.anims.generateFrameNumbers('bomb', {
        start: 0,
        end: 3
      }),
      repeat: -1,
      frameRate: 14
    });

    this.anims.create({
      key: 'kaboom-boom',
      frames: this.anims.generateFrameNumbers('kaboom', {
        start: 0,
        end: 7
      }),
      repeat: 0,
      frameRate: 16
    });

    this.scene.start('level1');
  }
}

export default BootScene;