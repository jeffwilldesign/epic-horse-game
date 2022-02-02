import { Component } from '@angular/core';
import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
  horse: Phaser.GameObjects.Image;

  constructor(config) {
    super(config);
  }

  preload() {
    this.load.image('horse', 'assets/images/sprites/horse-01.png');
  }

  create() {
    console.log('Phaser: create');

    this.horse = this.add.image(100, 300, 'horse');
  }

  update() {
  }
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor() {
    this.config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade'
      },
      parent: 'phaser-game',
      scene: GameScene
    };
  }

  ngOnInit(): void {
    this.phaserGame = new Phaser.Game(this.config);
  }
}
