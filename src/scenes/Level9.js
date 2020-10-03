import MazeMap from '../classes/MazeMap';

class Level9 extends MazeMap {
  constructor() {
    super({
      sceneName: 'level9',
      mapKey: 'level9',
      nextLevel: 'scene-win',
      bombSpeed: 180
    });
  }
}

export default Level9;