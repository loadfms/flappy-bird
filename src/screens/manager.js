import GameScreen from "./game";
import InitialScreen from "./initial";

export default class ScreenManager {
  constructor(context, sprite, canvas, objects) {
    this.context = context;
    this.sprite = sprite;
    this.canvas = canvas;
    this.objects = objects;

    this.screens = [
      new InitialScreen(context, sprite, canvas, objects, this),
      new GameScreen(context, sprite, canvas, objects, this),
    ];

    this.activeScreen = this.screens[0];
  }

  draw() {
    this.activeScreen.update();
    this.activeScreen.draw();
  }

  input() {
    if (this.activeScreen.input) {
      this.activeScreen.input();
    }
  }
}
