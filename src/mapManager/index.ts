import { Map, Generator } from 'mk-dungeon-map-generator-2';

import config from '../assets/json/config.json';

export class MapManager {
  maps: Map[] = [];

  currentMap = 0;

  static initialize = () => {
    const mapManager = new MapManager();

    const maps = [];

    for (let i = 0; i < config.levels; i += 1) {
      maps.push(Generator.generateRandomMap({
        mapWidth: config.mapWidth,
        mapHeight: config.mapHeight,
        minRooms: config.minRooms,
        maxRooms: config.maxRooms,
      }));
    }

    mapManager.maps = maps;

    return mapManager;
  }
}
