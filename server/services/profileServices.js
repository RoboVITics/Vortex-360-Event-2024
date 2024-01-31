import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import fireapp from '../database.js';
import AuthMiddleware from '../middleware/authMiddleware.js';
const db = getFirestore(fireapp);
class ProfileService {
    static createProfile = async (req, res, next) => {
        const data = req.body;
        const token = req.headers['token'];
        const email = AuthMiddleware.extractToken(token).user;
        try {
            console.log("profile/create: Create profile");
            const response = await setDoc(doc(db, "profile", email), data);
            res.status(200).json({ success: true, message: 'Created Profile Successfully', data: response});
        } catch (error) {
                console.error(error.message);
                res.status(400).json({ success: false, message: error.message });
        }
    }

    static updateProfile = async (req, res, next) => {
        const data = req.body;
        const token = req.headers['token'];
        const email = AuthMiddleware.extractToken(token).user;
        try {
            console.log("profile/update: Update profile");
            const docRef = doc(db, "profile", email);
            const response = await setDoc(docRef, data);
            res.status(200).json({ success: true, message: 'Updated Profile Successfully', data: response});
        } catch (error) {
            console.error(error.message);
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static getProfile = async (req, res, next) => {
        const token = req.headers['token'];
        const email = AuthMiddleware.extractToken(token).user;
        try {
            console.log("profile/read: Read profile");
            const docRef = doc(db, "profile", email);
            const docSnap = await getDoc(docRef);
            const profileData = docSnap.data();
            res.status(200).json({ success: true, message: 'Received profile successfully', data: profileData});
        } catch (error) {
            console.error(error.message);
            res.status(400).json({ success: false, message: error.message });
        }
    }
}

export default ProfileService;
