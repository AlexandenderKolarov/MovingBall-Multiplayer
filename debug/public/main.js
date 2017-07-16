define("core/Engine", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Alexander Kolarov on 16.7.2017 г..
     */
    var Engine = (function () {
        function Engine() {
            console.log("Engine created.");
            var pixiApp = new PIXI.Application(800, 450, { backgroundColor: 0x1099bb });
            document.body.appendChild(pixiApp.view);
            var ball = new PIXI.Graphics();
            ball.beginFill(0x0000ff);
            ball.drawCircle(0, 0, 50);
            ball.endFill();
            ball.position.set(300, 400);
            pixiApp.stage.addChild(ball);
            //io
            var socket = io('http://localhost');
            socket.emit("idRequest");
            socket.on('idResponse', function (data) {
                console.log("socket id from server socket object: " + data.id);
                console.log("socket id from client socket object:" + socket.id);
            });
        }
        return Engine;
    }());
    exports.default = Engine;
    exports.ENGINE_NAME = "MovingBallEngine";
});
define("App", ["require", "exports", "core/Engine"], function (require, exports, Engine_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Alexander Kolarov on 16.7.2017 г..
     */
    function startup() {
        console.log("startup " + Engine_1.ENGINE_NAME);
        var e = new Engine_1.default();
    }
    exports.startup = startup;
});
//# sourceMappingURL=main.js.map