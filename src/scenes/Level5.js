import MazeMap from '../classes/MazeMap';

class Level5 extends MazeMap {
  constructor() {
    super({
      sceneName: 'level5',
      mapKey: 'level5',
      nextLevel: 'level6',
      bombSpeed: 140
    });
  }
}

export default Level5;