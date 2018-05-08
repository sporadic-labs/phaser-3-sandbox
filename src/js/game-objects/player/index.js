import LifecycleObject from "../lifecycle-object";

export default class Player extends LifecycleObject {
  constructor(scene, x, y) {
    super(scene);

    this.sprite = scene.add.sprite(x, y, "assets", "kenney-ship.png");
  }

  destroy() {
    this.sprite.destroy();
    super.destroy();
  }
}
