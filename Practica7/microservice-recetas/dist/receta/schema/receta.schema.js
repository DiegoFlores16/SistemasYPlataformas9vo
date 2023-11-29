"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecetaSchema = void 0;
const mongoose = require("mongoose");
exports.RecetaSchema = new mongoose.Schema({
    paciente: { type: String, required: true },
    medicamento: { type: String, required: true },
    instrucciones: { type: String, required: true },
}, { timestamps: true });
exports.RecetaSchema.index({ medicamneto: 1 }, { unique: true });
exports.RecetaSchema.index({ paciente: 1 }, { unique: true });
//# sourceMappingURL=receta.schema.js.map