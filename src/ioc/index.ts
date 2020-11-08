import Phaser from 'phaser';

import { Container, interfaces } from 'inversify';
import 'reflect-metadata';

import { MapManager } from '../mapManager';
import { State } from '../state';
import { IEntryPoint, PhaserEntryPoint } from '../entryPoint';
import { types } from '../constants';

import { RootScene } from '../phaser/scenes';

export const initContainer = () => {
  const container = new Container();

  container.bind<Phaser.Types.Core.GameConfig>(types.PHASER_GAME_CONFIG)
    .toConstantValue({
      type: Phaser.AUTO,
      width: 600,
      height: 600,
      parent: 'phaser-example',
    });
  container.bind<Phaser.Types.Scenes.SettingsConfig>(types.PHASER_ROOT_SCENE_CONFIG)
    .toConstantValue({
      active: true,
      key: 'root',
    });
  container.bind<Phaser.Scene>(types.ROOT_SCENE)
    .to(RootScene);

  container.bind<MapManager>(types.MAP_MANAGER)
    .toConstantValue(MapManager.initialize());

  container.bind<State>(types.STATE)
    .toConstantValue(new State());

  container.bind<Phaser.Game>(types.PHASER_GAME)
    .toDynamicValue((context: interfaces.Context) => {
      const rootScene = context.container.get<Phaser.Scene>(types.ROOT_SCENE);
      const config = context.container.get<Phaser.Types.Core.GameConfig>(types.PHASER_GAME_CONFIG);

      return new Phaser.Game({
        ...config,
        scene: [
          rootScene,
        ],
      });
    });

  container.bind<IEntryPoint>(types.ENTRY_POINT)
    .to(PhaserEntryPoint);

  return container;
};
