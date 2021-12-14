import FlappyBird from "../bird";

export default class GameScreen {
  constructor(context, sprite, canvas, objects, screenManager) {
    this.canvas = canvas;
    this.objects = objects;
    this.context = context;
    this.sprite = sprite;
    this.screenManager = screenManager;
  }

  draw() {
    this.objects.background.draw();
    this.objects.pipe.draw();
    this.objects.ground.draw();
    this.objects.player.draw();
  }

  update() {
    this.objects.player.update(this.objects, this);
    this.objects.ground.update(this.objects);
    this.objects.pipe.update(this.objects, this);
  }

  input() {
    this.objects.player.input();
  }

  callback(slug) {
    switch (slug) {
      case "death":
        this.objects.player = new FlappyBird(this.context, this.sprite);
        this.objects.pipe.pairs = [];
        this.screenManager.activeScreen = this.screenManager.screens[0];
        break;
      default:
    }
  }
}
