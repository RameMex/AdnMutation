import { Document } from "mongoose";

interface Stats extends Document {
    readonly count_mutations: number;
    readonly count_no_mutations: number;
    readonly ratio:Number;
}

export default Stats