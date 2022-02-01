import { gameLevels } from "./gameLevels.esm.js";
import { Block } from "./Block.esm.js";


export class GameState {
    constructor(level) {
        let _gameBoard = gameLevels[Number(level) - 1].board.map(({ x, y, kind }) => new Block(x, y, kind));
        this._isGamePaused = false;
        this._level = level;

        this.getGameBoard = () => _gameBoard;

    }
    get level() {
        return this._level;
    }
    set isGamePaused(newValue) {
        this._isGamePaused = newValue;
    }
    get isGamePaused() {
        return this._isGamePaused;
    }
}