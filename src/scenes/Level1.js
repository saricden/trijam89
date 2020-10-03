import MazeMap from '../classes/MazeMap';

class Level1 extends MazeMap {
  constructor() {
    super({
      sceneName: 'level1',
      mapKey: 'level1',
      nextLevel: 'level2',
      bombSpeed: 100,
      bgColor: 0x00FFCC
    });
  }
}

export default Level1;