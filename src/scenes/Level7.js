import MazeMap from '../classes/MazeMap';

class Level7 extends MazeMap {
  constructor() {
    super({
      sceneName: 'level7',
      mapKey: 'level7',
      nextLevel: 'level8',
      bombSpeed: 160
    });
  }
}

export default Level7;