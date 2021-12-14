export default class InitialScreen {
  constructor(context, sprite, canvas, objects, screenManager) {
    this.canvas = canvas;
    this.objects = objects;
    this.screenManager = screenManager;
    this.spriteX = 134;
    this.spriteY = 0;
    this.width = 174;
    this.height = 152;
    this.x = this.canvas.width / 2 - 174 / 2;
    this.y = 50;
    this.context = context;
    this.sprite = sprite;
    this.speed = 0;
  }

  draw() {
    this.objects.background.draw();
    this.objects.ground.draw();
    this.objects.player.draw();

    this.context.drawImage(
      this.sprite,
      this.spriteX,
      this.spriteY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update() {
    this.objects.ground.update(this.objects);
  }

  input() {
    this.screenManager.activeScreen = this.screenManager.screens[1];
  }
}
