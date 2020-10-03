import MazeMap from '../classes/MazeMap';

class Level3 extends MazeMap {
  constructor() {
    super({
      sceneName: 'level3',
      mapKey: 'level3',
      nextLevel: 'level4',
      bombSpeed: 120
    });
  }
}

export default Level3;