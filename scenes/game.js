/*import Plataforma from "../classes/plataforma";*/
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
    
    this.rectangulos = this.physics.add.image(400, 100, "rectangulo");
    this.rectangulos.setImmovable(true);

    /*this.plataforma = new Plataforma(this, 400, 550, "plataforma", this.controles);*/

    this.plataforma = this.physics.add.image(400, 550, "plataforma");
    this.plataforma.setCollideWorldBounds(true);
    this.plataforma.setImmovable(true);

    this.pelota = this.physics.add.image(400, 500, "pelota").setCollideWorldBounds(true);
    this.pelota.setBounce(1);
    this.pelota.setVelocityY(-150);

    this.controles = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.pelota, this.plataforma);

    this.physics.add.collider(this.pelota, this.rectangulos, () => {
      this.rectangulos.destroy();
    });
  }

  update() {
    /*this.plataforma.update()*/
    if (this.controles.left.isDown) {
      this.plataforma.setVelocityX(-300);
    } else if (this.controles.right.isDown) {
      this.plataforma.setVelocityX(300);
    } else {
      this.plataforma.setVelocityX(0);
    }
  
  }
}
