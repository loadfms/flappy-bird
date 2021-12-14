export default class Background {
  constructor(context, sprite, canvas) {
    this.canvas = canvas;
    this.spriteX = 390;
    this.spriteY = 0;
    this.width = 275;
    this.height = 204;
    this.x = 0;
    this.y = canvas.height - 204;
    this.context = context;
    this.sprite = sprite;
  }

  draw() {
    this.context.fillStyle = "#70c5ce";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

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
}
