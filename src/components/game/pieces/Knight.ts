import { IPiece } from './types';
import Pieces from './Pieces';

class Knight implements IPiece {
    type: string;
    colour: string;
    image: string;
    position!: string;
    moves!: number;
    moveDirections!: Map<string, number>;

    constructor(type: string, colour: string, image: string) {
        this.type = type;
        this.colour = colour;
        this.image = image;

        this.initialise();
    }

    initialise() {
        this.moves = 0;
        const pieces = new Pieces();

        this.setMoveDirections(pieces.knightMoves());
    }

    incrementMoveCount() { this.moves += 1; }

    getType() { return this.type; }

    getColour() { return this.colour; }

    getImage() { return this.image; }

    getMoveDirections() { return this.moveDirections; }

    getPosition() { return this.position; }

    getMoveCount() { return this.moves; }

    setImage(image: string) { this.image = image; }

    setMoveDirections(directions: Map<string, number>) { this.moveDirections = directions; }

    setPosition(pos: string) { this.position = pos; }

}

export default Knight;
