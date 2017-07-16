/**
 * Created by Alexander Kolarov on 16.7.2017 г..
 */
export default class Engine{
    constructor(){
        console.log("Engine created.");
        const pixiApp:PIXI.Application = new PIXI.Application(800, 450, {backgroundColor : 0x1099bb});
        document.body.appendChild(pixiApp.view);

        const ball:PIXI.Graphics = new PIXI.Graphics();
        ball.beginFill(0x0000ff);
        ball.drawCircle(0,0,50);
        ball.endFill();

        ball.position.set(300,400);
        pixiApp.stage.addChild(ball);
        //io
        const socket = io('http://localhost');
        socket.emit("idRequest");
        socket.on('idResponse', (data) => {
            console.log("socket id from server socket object: " + data.id);
            console.log("socket id from client socket object:" + socket.id);
        });
    }
}

export const ENGINE_NAME:string = "MovingBallEngine";