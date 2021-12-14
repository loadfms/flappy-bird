import { constants } from "./constants";

export default class FlappyBird {
  constructor(context, sprite) {
    this.spriteX = 0;
    this.spriteY = 0;
    this.width = 33;
    this.height = 24;
    this.x = 10;
    this.y = 50;
    this.context = context;
    this.sprite = sprite;
    this.speed = 0;
    this.jumpForce = 4.6;
    this.frames = [
      { spriteX: 0, spriteY: 0 },
      { spriteX: 0, spriteY: 26 },
      { spriteX: 0, spriteY: 52 },
      { spriteX: 0, spriteY: 26 },
    ];
    this.currentFrame = 0;
    this.frameRate = 10;
    this.frameCount = 0;
    this.alive = true;
  }

  animate() {
    if (this.frameCount % this.frameRate === 0 && this.alive) {
      const increase = this.currentFrame + 1;
      const maxFrames = this.frames.length;
      this.currentFrame = increase % maxFrames;
    }
  }

  draw() {
    this.frameCount++;
    this.animate();
    this.context.drawImage(
      this.sprite,
      this.frames[this.currentFrame].spriteX,
      this.frames[this.currentFrame].spriteY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  reset() {}

  update(objects, screen) {
    if (this.y + this.height >= objects.ground.y) {
      this.alive = false;
      setTimeout(() => {
        screen.callback("death");
      }, constants.deathDelay);
      return;
    }

    objects.pipe.pairs.forEach((item) => {
      if (objects.player.x + objects.player.width / 2 >= item.x) {
        if (objects.player.y < item.skyPipeY) {
          objects.player.alive = false;
          setTimeout(() => {
            screen.callback("death");
          }, constants.deathDelay);
        }

        if (objects.player.y + objects.player.height > item.groundPipeY) {
          objects.player.alive = false;
          setTimeout(() => {
            screen.callback("death");
          }, constants.deathDelay);
        }
      }
    });

    if (this.alive) {
      this.speed += constants.gravity;
      this.y += this.speed;
    }
  }

  input() {
    this.speed = -this.jumpForce;
  }
}
