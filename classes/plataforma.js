export default class Plataforma extends Phaser.Physics.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, key);
        scene.add.existing(this);
        scene.Physics.add.existing(this);
        this.body.setImmovable(true);
        this.body.setCollideWorldBounds(true);
    }
}