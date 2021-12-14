export default class Ground {
  constructor(context, sprite, canvas) {
    this.canvas = canvas;
    this.spriteX = 0;
    this.spriteY = 610;
    this.width = 224;
    this.height = 112;
    this.x = 0;
    this.y = this.canvas.height - 112;
    this.context = context;
    this.sprite = sprite;
    this.scrollSpeed = 1;
    this.scollRepeat = this.width / 2;
  }

  draw() {
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
    this.context.drawImage(
      this.sprite,
      this.spriteX,
      this.spriteY,
      this.width,
      this.height,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }

  update(objects) {
    if (!objects.player.alive) {
      return;
    }
    let scrolling = this.x - this.scrollSpeed;
    this.x = scrolling % this.scollRepeat;
  }
}
