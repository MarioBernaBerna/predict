'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Prediccion = new Schema({
    fecha: {type:Date, required:true},
    latencia: Number,
    timestamp: String,
    prediccion: {type:Object, required:true},
    features: {type:Array, required:true},
    data_id : String    
});

module.exports = mongoose.model('Prediccion', Prediccion);