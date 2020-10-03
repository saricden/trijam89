import MazeMap from '../classes/MazeMap';

class Level4 extends MazeMap {
  constructor() {
    super({
      sceneName: 'level4',
      mapKey: 'level4',
      nextLevel: 'level5',
      bombSpeed: 130
    });
  }
}

export default Level4;