import { Entity } from "./entity";

export class Ball extends Entity{
    constructor(scene: Phaser.Scene, x: number, y: number, moveTo?: Phaser.Math.Vector2){
        super(scene, x, y);
        this.tint = Math.random() * 0xffffff;
        this.setScale(0.05);
        this.setCircle(80);
        this.setOffset(50,50);
        if(moveTo){
            console.log(moveTo)
            console.log(x, y)
            scene.physics.moveTo(this, moveTo.x, moveTo.y, 5, 200);
        }
    }
}