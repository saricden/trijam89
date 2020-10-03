import MazeMap from '../classes/MazeMap';

class Level2 extends MazeMap {
  constructor() {
    super({
      sceneName: 'level2',
      mapKey: 'level2',
      nextLevel: 'level3',
      bombSpeed: 110
    });
  }
}

export default Level2;