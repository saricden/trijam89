import {Scene} from 'phaser';

class GameScene extends Scene {

  constructor() {
    super("scene-game");
  }

  create() {
    this.cameras.main.setBackgroundColor(0x00FFCC);

    this.map = this.add.tilemap('level1');
    this.tileset = this.map.addTilesetImage('bricks');
    this.layer = this.map.createDynamicLayer('maze', this.tileset);
    
    const spawnLayer = this.map.getObjectLayer('spawn');

    this.kaboom = this.add.sprite(0, 0, 'kaboom', 0);
    this.kaboom.on('animationcomplete', () => {
      this.kaboom.setVisible(false);
    });
    this.kaboom.setVisible(false);
    this.kaboom.setDepth(5);
    this.kaboom.setScale(2);

    this.isDragging = false;

    this.initX = 0;
    this.initY = 0;

    for (let i in spawnLayer.objects) {
      const point = spawnLayer.objects[i];

      if (point.name === 'bomb') {
        this.bomb = this.physics.add.sprite(point.x, point.y, 'bomb', 0);

        this.bomb.anims.play('bomb-idle', true);
        this.bomb.setDepth(4);
    
        this.cameras.main.setZoom(3);
        this.cameras.main.pan(point.x, point.y);

        this.initX = point.x;
        this.initY = point.y;

        this.bomb.setInteractive();
        this.bomb.on('pointerdown', () => {
          this.isDragging = true;
          this.cameras.main.startFollow(this.bomb);
        });

        this.physics.add.overlap(this.bomb, this.layer, this.gameOver, this.processOverlap, this);
      }
    }

    this.input.on('pointermove', (pointer) => {
      const {worldX, worldY} = pointer;

      if (this.isDragging && this.bomb) {
        this.physics.moveTo(this.bomb, worldX, worldY, 100);
      }
    });

    this.input.on('pointerup', this.gameOver, this);

  }

  processOverlap(bomb, tile) {
    return (tile.index > -1);
  }

  gameOver() {
    if (this.isDragging) {
      this.isDragging = false;
      this.kaboom.setPosition(this.bomb.x, this.bomb.y);
      this.kaboom.setVisible(true);
      this.kaboom.anims.play('kaboom-boom', true);
      this.bomb.body.reset(this.initX, this.initY);
      this.cameras.main.stopFollow();
      this.cameras.main.pan(this.initX, this.initY, 1000);
      this.sound.play('boom');
    }
  }

}
export default GameScene;