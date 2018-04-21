import Phaser from "phaser";
import RotatingSprite from "../game-objects/rotating-sprite";

export default class Scene extends Phaser.Scene {
  create() {
    this.sprite = new RotatingSprite(this, 100, 100, "ship");
    this.sprite.setScale(2);
  }

  update(time, delta) {
    if (time > 5000 && this.sprite) {
      this.sprite.destroy();
      this.sprite = null;
    }
  }
}
