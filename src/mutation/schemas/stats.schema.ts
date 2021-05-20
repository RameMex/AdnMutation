import { Schema } from "mongoose";

export const StatsSchema = new Schema({
    count_mutations: Number,
    count_no_mutations:Number,
    ratio:Number
});