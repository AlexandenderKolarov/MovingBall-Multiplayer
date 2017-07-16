"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Core_1 = require("./Core");
/**
 * Created by Alexander Kolarov on 16.7.2017 г..
 */
var App = (function () {
    function App() {
        this._server = require('http').createServer(this.indexHTMLRequestHandler);
        this._io = require('socket.io')(this._server);
        this._fs = require('fs');
        this._server.listen(80);
        this._io.on('connection', this.onSocketConnect.bind(this));
        this._engine = new Core_1.Engine();
    }
    App.prototype.onSocketConnect = function (socket) {
        socket.on("idRequest", function () {
            console.log("idRequest from socket with id " + socket.id + ".");
            socket.emit("idResponse", { id: socket.id });
            console.log("idResponse sent");
        });
    };
    App.prototype.indexHTMLRequestHandler = function (req, res) {
        this._fs.readFile(__dirname + '/index.html', function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }
            res.writeHead(200);
            res.end(data);
        });
    };
    return App;
}());
new App();
//# sourceMappingURL=App.js.map