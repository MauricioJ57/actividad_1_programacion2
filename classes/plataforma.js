export default class Plataforma extends Phaser.Physics.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, key);
        scene.add.existing(this);
        scene.Physics.add.existing(this);
        this.body.setImmovable(true);
        this.body.setCollideWorldBounds(true);
    }

    moverX(velocidad) {
        this.x += velocidad;
    }

    update() {
    if (this.controles.left.isDown) {
      this.plataforma.moverX(-300);
    } else if (this.controles.right.isDown) {
      this.plataforma.moverX(300);
    } else {
      this.plataforma.moverX(0);
    }
    }
}