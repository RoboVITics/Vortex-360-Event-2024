import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import fireapp from '../database.js';
import AuthMiddleware from '../middleware/authMiddleware.js';
const db = getFirestore(fireapp);
import { getStorage, ref, uploadBytes,  getDownloadURL } from "firebase/storage";
const storage = getStorage(fireapp);

class SubmitService {
    static getUploadUrl = async (file) => {
        try {
            const storageRef = ref(storage, `files/${file.originalname}`);
            const metadata = {
                contentType: req.file.mimetype,
            };
            const snapshot = await uploadBytes(storageRef, file.buffer, metadata);
            // Get the download URL of the uploaded file
            const downloadURL = await getDownloadURL(snapshot.ref);
            // Return the file reference in the response
            return downloadURL;
        } catch (error) {
            console.error('Error creating reference url:', error);
            return undefined;
        }

    }
    static createSubmission = async (req, res, next) => {
        // Fetch the file from request;
        const body = req.body;
        const file = req.file;
        console.log("submissions/create: Create submission");
        try{
            const fireStoreRef = SubmitService.getUploadUrl(file);
            // Update it in teams:
            const teamRef = doc(db, "teams", teamCode);
            const team = await getDoc(teamRef);
            var teamData = team.data();
            const updatedData = { ...teamData,...body };
            console.log(updatedData);
            await setDoc(doc(db, "teams", teamCode), updatedData);
            res.status(200).send({fileReference: fireStoreRef});

        }
        catch (error) {
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
