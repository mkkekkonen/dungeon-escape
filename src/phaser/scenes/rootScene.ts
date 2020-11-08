import Phaser from 'phaser';

import { inject, injectable, decorate } from 'inversify';

import { types } from '../../constants';

const image = require('../../assets/img/tileset_dungeon.png');

decorate(injectable(), Phaser.Scene);

@injectable()
export class RootScene extends Phaser.Scene {
  private logo?: Phaser.GameObjects.Image;

  constructor(
    @inject(types.PHASER_ROOT_SCENE_CONFIG) config: Phaser.Types.Scenes.SettingsConfig,
  ) {
    super(config);
  }

  preload() {
    this.load.image('tileset', image);
  }

  create() {
    this.logo = this.add.image(300, 300, 'tileset');
  }
}
