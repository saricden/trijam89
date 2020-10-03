import {Scene} from 'phaser';

class WinScene extends Scene {

  constructor() {
    super("scene-win");
  }

  create() {
    this.cameras.main.setBackgroundColor(0x00FFCC);
    
    this.heart = this.add.sprite(32, -40, 'heart', 0);
    this.bomb = this.add.sprite(0, 0, 'bomb', 0);
    this.bomb.play('bomb-idle', true);

    this.cameras.main.pan(0, 0, 0);
    this.cameras.main.setZoom(0);
    this.cameras.main.zoomTo(3, 3000);

    this.title = this.add.text(0, -80, "Way to Go!", {
      fontSize: 18,
      color: '#000'
    });
    this.title.setOrigin(0.5);

    this.subtitle = this.add.text(-28, -40, "You\nremoved\nit :)", {
      fontSize: 14,
      color: '#000'
    });
    this.subtitle.setOrigin(0.5);

    this.playAgainTxt = this.add.text(0, 40, 'Tap or click\nto play again.', {
      fontSize: 14,
      color: '#000',
      align: 'center'
    });
    this.playAgainTxt.setOrigin(0.5);

    this.input.on('pointerup', () => {
      this.scene.start('level1');
    });
  }
}

export default WinScene;