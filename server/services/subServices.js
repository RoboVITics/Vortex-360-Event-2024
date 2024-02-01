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
            res.status(200).json({success: true, message: 'Submitted Successfully', data: updatedData});

        }
        catch (error) {
            console.error('Error creating submission:', error);
            res.status(500).json({ success: false, message: error.message });
        }
        
    }

    static updateSubmission = async (req, res, next) => {
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
            res.status(200).json({success: true, message: 'Submitted Successfully', data: updatedData});
        }
        catch (error) {
            console.error('Error creating submission:', error);
            res.status(500).json({ success: false, message: error.message });
        }
     
    }

    static getSubmission = async (req, res, next) => {
        // Fetch the file from request;
        const token = req.headers['token'];
        const email = AuthMiddleware.extractToken(token).user;
        try {
            console.log("submissions/read: Read submissions");
            const docRef = doc(db, "profile", email);
            const docSnap = await getDoc(docRef);
            const profileData = docSnap.data();
            res.status(200).json({ success: true, message: 'Received submission successfully', data: profileData});
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ success: false, message: error.message });
        }
     
    }
}

export default SubmitService;
