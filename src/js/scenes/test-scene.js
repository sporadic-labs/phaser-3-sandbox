import Phaser from "phaser";
import GameObjectExtendingLifecycle from "../game-objects/go-extending-lifecycle";

export default class Scene extends Phaser.Scene {
  create() {
    this.rotatingGameObject = new GameObjectExtendingLifecycle(this, 100, 300, "assets", "ship");
  }

  update(time, delta) {
    if (time > 5000 && this.rotatingGameObject) {
      this.rotatingGameObject.destroy();
      this.rotatingGameObject = null;
    }
  }
}
