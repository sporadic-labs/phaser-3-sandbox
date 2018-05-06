import Phaser from "phaser";
import RotatingSprite from "../game-objects/rotating-sprite";
import RotatingSpriteAsComponent from "../game-objects/rotating-sprite-as-component";
import GameObjectExtendingLifecycle from "../game-objects/go-extending-lifecycle";

export default class Scene extends Phaser.Scene {
  create() {
    this.sprite = new RotatingSprite(this, 100, 100, "ship");
    this.sprite.setScale(2);

    this.spriteContainer = new RotatingSpriteAsComponent(this, 300, 100, "assets", "ship");
    this.spriteContainer.sprite.setScale(2);

    this.rotatingGameObject = new GameObjectExtendingLifecycle(this, 100, 300, "assets", "ship");
  }

  update(time, delta) {
    if (time > 5000) {
      if (this.sprite) {
        this.sprite.destroy();
        this.sprite = null;
      }
      if (this.spriteContainer) {
        this.spriteContainer.destroy();
        this.spriteContainer = null;
      }
      if (this.rotatingGameObject) {
        this.rotatingGameObject.destroy();
        this.rotatingGameObject = null;
      }
    }
  }
}
