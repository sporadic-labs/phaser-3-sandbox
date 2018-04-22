export default class RotatingSprite {
  constructor(scene, x, y, texture, frame) {
    this.sprite = scene.add.sprite(x, y, texture, frame);

    scene.sys.events.on("preupdate", this.preUpdate);
    scene.sys.events.on("update", this.update);
    scene.sys.events.on("postupdate", this.postUpdate);
  }

  postUpdate = (time, delta) => {};

  update = (time, delta) => {
    this.sprite.alpha = (Math.sin(time / 500) + 1) / 2;
  };

  preUpdate = (time, delta) => {
    this.sprite.rotation += 0.15;
  };

  destroy() {
    const sprite = this.sprite;
    sprite.scene.sys.events.off("update", this.update);
    sprite.scene.sys.events.off("preupdate", this.preUpdate);
    sprite.scene.sys.events.off("update", this.update);
    sprite.scene.sys.events.off("postupdate", this.postUpdate);
    sprite.destroy();
  }
}
