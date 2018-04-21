import Phaser from "phaser";

export default class RotatingSprite extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    // This registers rendering & preUpdate (if it exists)
    scene.add.existing(this);

    // This hooks into the scenes update directly
    scene.sys.events.on("update", this.update);
  }

  update = (time, delta) => {
    this.alpha = (Math.sin(time / 500) + 1) / 2;
  };

  preUpdate() {
    this.rotation += 0.15;
  }

  destroy() {
    this.scene.sys.events.off("update", this.update);
    super.destroy();
  }
}
