import mongoose from "mongoose"

const documentVersionSchema = new mongoose.Schema({
  documentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Document', required: true },
  content: { type: String, required: true },
  versionNumber: { type: Number, required: true },
  isPublished: { type: Boolean, default: false },
  publicationDate: { type: Date },
});

 export const DocumentVersion = mongoose.model('DocumentVersion', documentVersionSchema);


