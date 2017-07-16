import Engine, {ENGINE_NAME} from "./core/Engine";
/**
 * Created by Alexander Kolarov on 16.7.2017 г..
 */

function startup() {
    console.log("startup " + ENGINE_NAME);
    let e = new Engine();
}

export {startup}