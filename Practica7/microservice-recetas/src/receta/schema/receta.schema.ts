import * as mongoose from 'mongoose';

export const RecetaSchema = new mongoose.Schema(
  {
    paciente: { type: String, required: true },
    medicamento: { type: String, required: true },
    instrucciones: { type: String, required: true },

  },
  { timestamps: true },
);

RecetaSchema.index({ medicamneto: 1 }, { unique: true });
RecetaSchema.index({ paciente: 1 }, { unique: true });