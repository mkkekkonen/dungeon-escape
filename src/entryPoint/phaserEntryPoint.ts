import Phaser from 'phaser';

import { injectable, inject } from 'inversify';

import { IEntryPoint } from './entryPoint';

@injectable()
export class PhaserEntryPoint implements IEntryPoint {
  game: Phaser.Game;

  constructor(
    @inject('PhaserGame') game: Phaser.Game,
  ) {
    this.game = game;
  }

  run = () => {
  }
}
