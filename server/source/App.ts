import {Server} from "http";
import Socket = SocketIO.Socket;
import {Engine} from "./Core";
/**
 * Created by Alexander Kolarov on 16.7.2017 г..
 */
class App {
    private _server: Server= require('http').createServer(this.indexHTMLRequestHandler);
    private _io: SocketIO.Server = require('socket.io')(this._server);
    private _fs:any = require('fs');

    private _engine: Engine;

    constructor() {
        this._server.listen(80);

        this._io.on('connection', this.onSocketConnect.bind(this));

        this._engine = new Engine();
    }

    private onSocketConnect(socket: Socket): void {
        socket.on("idRequest", () => {
            console.log("idRequest from socket with id " + socket.id + ".");
            socket.emit("idResponse", {id: socket.id});
            console.log("idResponse sent");
        });
    }

    private indexHTMLRequestHandler(req: any, res: any) {
        this._fs.readFile(__dirname + '/index.html',
            function (err: any, data: any) {
                if (err) {
                    res.writeHead(500);
                    return res.end('Error loading index.html');
                }

                res.writeHead(200);
                res.end(data);
            });
    }
}

new App();