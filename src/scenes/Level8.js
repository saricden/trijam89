import MazeMap from '../classes/MazeMap';

class Level8 extends MazeMap {
  constructor() {
    super({
      sceneName: 'level8',
      mapKey: 'level8',
      nextLevel: 'level9',
      bombSpeed: 170
    });
  }
}

export default Level8;