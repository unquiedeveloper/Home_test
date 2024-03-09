import { Document } from "../models/documentSchema.js"
import { DocumentVersion } from "../models/documentVersionSchema.js"


export const publishVersion = async(req,res)=>{
    try {
        const publishedVersions = await DocumentVersion.find({ isPublished: true });
        res.json({ publishedVersions });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}


export const recentPublishVersion = async(req,res)=>{
    try {
        const documentId = req.params.documentId;
        const latestPublishedVersion = await DocumentVersion.findOne({ documentId, isPublished: true })
          .sort({ publicationDate: -1 });
        if (!latestPublishedVersion) {
          return res.status(404).json({ error: 'No published version found for the document' });
        }
        res.json({ latestPublishedVersion });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}