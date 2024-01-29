import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import fireapp from '../database.js';
import AuthMiddleware from '../middleware/authMiddleware.js';
const db = getFirestore(fireapp);
import { getStorage, ref, uploadBytes,  getDownloadURL } from "firebase/storage";

const storage = getStorage();

class SubmitService {
    static createSubmission = async (req, res, next) => {
        // Fetch the file from request:
        const file = req.file;
        console.log(req.file);
        try {
            // Upload the file to storage
            const storageRef = ref(storage, file.originalname);
            const snapshot = await uploadBytes(storageRef, file.buffer);

            // Get the download URL of the uploaded file
            const downloadURL = await getDownloadURL(snapshot.ref);

            // Return the file reference in the response
            res.status(200).json({ fileReference: downloadURL, content: [{ msg: 'Created Submission' }] });
        } catch (error) {
            console.error('Error creating submission:', error);
            res.status(500).json({ error: 'Failed to create submission' });
        }
    }

    static updateSubmission = async (req, res, next) => {
        const data = req.body;
        try {
            res.status(200).json({content: [{ msg: 'Update Submission'}]});
        } catch (error) {
            console.error('Error creating submission:', error);
            res.status(500).json({ error: 'Failed to create submission' });
        }
    }

    static getSubmission = async (req, res, next) => {
        try {
            // Get submission code
            res.status(200).json({content: [{ msg: 'Fetch Submission'}]});
        } catch (error) {
            console.error('Error getting submission:', error);
            res.status(500).json({ error: 'Failed to get submission' });
        }
    }
}

export default SubmitService;
