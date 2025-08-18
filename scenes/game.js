export default class BreakBrickScene extends Phaser.Scene {
  constructor() {
    super("game");
  }

  init() {

  }

  preload() {
    this.load.image("pelota", "public/assets/pelota de break bricks.png")
    this.load.image("plataforma", "public/assets/plataforma de break bricks.png")
    this.load.image("rectangulo", "public/assets/rectangulo rompible(bb).png")
    this.load.image("fondo", "public/assets/fondo de portada.jpg")
  }

  create() {
    this.add.image(400, 300, "fondo");
    this.add.image(400, 300, "pelota");
    this.add.image(400, 500, "plataforma");
    this.add.image(400, 200, "rectangulo");
  }

  update() {
  
  }
}
