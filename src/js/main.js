import "../css/main.scss";
import Phaser from "phaser";
import { Loading, Test, GAME_STATE_NAMES } from "./scenes";

const gameDimensions = 750;
const containerId = "game-container";

const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: containerId,
  width: gameDimensions,
  height: gameDimensions,
  backgroundColor: "#0bf"
});

// Disable right click menu
document.getElementById(containerId).addEventListener("contextmenu", e => {
  e.preventDefault();
  return false;
});

// Create the space for globals on the game object
const globals = (game.globals = {});
globals.plugins = {};

game.scene.add(GAME_STATE_NAMES.LOADING, Loading);
game.scene.add(GAME_STATE_NAMES.TEST, Test);
game.scene.start(GAME_STATE_NAMES.LOADING);
