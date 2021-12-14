import mainSprite from "./../public/assets/sprites.png";
import FlappyBird from "./bird";
import Ground from "./ground";
import Background from "./background";
import Pipe from "./pipe";
import ScreenManager from "./screens/manager";

const sprites = new Image();
sprites.src = mainSprite;

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const player = new FlappyBird(context, sprites);
const ground = new Ground(context, sprites, canvas);
const background = new Background(context, sprites, canvas);
const pipe = new Pipe(context, sprites, canvas);

const objects = {
  player: player,
  ground: ground,
  background: background,
  pipe: pipe,
};

const screenManager = new ScreenManager(context, sprites, canvas, objects);

function loop() {
  screenManager.draw();

  requestAnimationFrame(loop);
}

window.addEventListener("keypress", () => {
  screenManager.input();
});
loop();
