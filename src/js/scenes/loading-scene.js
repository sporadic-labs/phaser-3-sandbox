/**
 * LoadingScene - this is the loading screen
 */

import Phaser from "phaser";
import { SCENE_NAME } from "./index.js";

export default class LoadingScene extends Phaser.Scene {
  preload() {
    const globals = this.registry.parent.globals;

    // Images
    // const atlasPath = `resources/atlases`;
    // this.load.atlas("assets", `${atlasPath}/assets.png`, `${atlasPath}/assets.json`);
    this.load.image("ship", "resources/images/ship.png");

    // Stand-in for a loading bar
    this.loadingText = this.add.text(750 / 2, 750 / 2, "0%", {
      font: "200px Arial",
      fill: "#fff",
      align: "center"
    });
    this.loadingText.setOrigin(0.5);
  }

  loadRender() {
    this.loadingText.setText(this.load.progress + "%");
  }

  create() {
    // Since load progress might not reach 100 in the load loop, manually do it
    this.loadingText.setText("100%");
  }

  update() {
    this.scene.start(SCENE_NAME.TEST);
  }
}
