import mongoose from "mongoose"

const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  creatorId: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
  lastUpdatedDate: { type: Date },
  lastUpdateAuthorId: { type: String },
});

export const Document = mongoose.model('Document', documentSchema);


