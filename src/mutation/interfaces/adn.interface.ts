import { Document } from "mongoose";

interface Adn extends Document {
    readonly dna: string;
}

export default Adn