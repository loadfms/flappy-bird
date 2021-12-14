export default class Pipe {
  constructor(context, sprite, canvas) {
    this.canvas = canvas;
    this.groundSpriteX = 0;
    this.groundSpriteY = 169;
    this.skySpriteX = 52;
    this.skySpriteY = 169;
    this.width = 52;
    this.height = 400;
    this.x = 220;
    this.y = 0;
    this.context = context;
    this.sprite = sprite;
    this.scrollSpeed = 1;
    this.scollRepeat = this.width / 2;
    this.gap = 80;
    this.frameCount = 0;
    this.pairs = [];
  }

  draw() {
    this.pairs.forEach((item) => {
      this.context.drawImage(
        this.sprite,
        this.groundSpriteX,
        this.groundSpriteY,
        this.width,
        this.height,
        item.x,
        item.y + this.height + this.gap,
        this.width,
        this.height
      );

      this.context.drawImage(
        this.sprite,
        this.skySpriteX,
        this.skySpriteY,
        this.width,
        this.height,
        item.x,
        item.y,
        this.width,
        this.height
      );

      item.skyPipeY = item.y + this.height;
      item.groundPipeY = item.y + this.height + this.gap;
    });
  }

  update(objects, screen) {
    if (!objects.player.alive) {
      return;
    }

    this.frameCount++;

    if (this.frameCount % 100 === 0) {
      this.pairs.push({ x: this.canvas.width, y: -200 * (Math.random() + 1) });
    }

    this.pairs.forEach((item) => {
      item.x -= 2;

      if (item.x + this.width <= 0) {
        this.pairs.shift();
      }
    });

    this.x -= 1;
  }
}
