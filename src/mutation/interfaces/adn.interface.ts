import { Document } from "mongoose";

interface Adn extends Document {
    readonly adn: string;
}

export default Adn