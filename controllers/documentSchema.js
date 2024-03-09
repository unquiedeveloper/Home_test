import { Document } from "../models/documentSchema.js"
import { DocumentVersion } from "../models/documentVersionSchema.js"


export const create = async (req,res,next)=>{
    try {
        const { title, creatorId } = req.body;
        const document = await Document.create({ title, creatorId });
        res.status(201).json({ document });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }

}


export const createVersion = async (req,res,next)=>{
    try {
        const documentId = req.params.documentId;
        const { content, versionNumber } = req.body;
        const document = await Document.findById(documentId);
        if (!document) {
          return res.status(404).json({ error: 'Document not found' });
        }
        const version = await DocumentVersion.create({ documentId, content, versionNumber });
        res.status(201).json({ version });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

export const update = async(req,res)=>{
    try {
        const versionId = req.params.versionId;
        const { content } = req.body;
        const version = await DocumentVersion.findByIdAndUpdate(versionId, { content }, { new: true });
        if (!version) {
          return res.status(404).json({ error: 'Document version not found' });
        }
        res.json({ version });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

export const publish = async(req,res)=>{
    try {
        const documentId = req.params.documentId;
        const { versionId } = req.body;
        const version = await DocumentVersion.findById(versionId);
        if (!version) {
          return res.status(404).json({ error: 'Document version not found' });
        }
        await DocumentVersion.updateMany({ documentId }, { isPublished: false });
        await DocumentVersion.findByIdAndUpdate(versionId, { isPublished: true, publicationDate: new Date() });
        res.json({ message: 'Document published successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

export const Draft = async(req,res)=>{
    try {
        const documentId = req.params.documentId;
        const versions = await DocumentVersion.find({ documentId });
        res.json({ versions });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}