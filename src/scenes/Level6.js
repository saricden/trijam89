import MazeMap from '../classes/MazeMap';

class Level6 extends MazeMap {
  constructor() {
    super({
      sceneName: 'level6',
      mapKey: 'level6',
      nextLevel: 'level7',
      bombSpeed: 150
    });
  }
}

export default Level6;