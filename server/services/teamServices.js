import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import fireapp from '../database.js';
import AuthMiddleware from '../middleware/authMiddleware.js';
import ProfileService from './profileServices.js';
const db = getFirestore(fireapp);
class TeamService {
    static generateTeamCode = (tname) => {
        return this.toString(data.team).substring(0,3) + this.toString(Math.floor(Math.random() * 899) + 100);
    }
    
    static createTeam = async (req, res, next) => {
        const data = req.body;
        const teamCode = TeamService.generateTeamCode(data.teamName);
        const email = AuthMiddleware.extractToken(req.cookies.jwt).user;
        try {
            // Create doc ref in teams collection
            const response = await setDoc(doc(db, "teams", teamCode), {
                teamName: data.teamName,
                members: [email],
            });

            // Update in Profile as well
            const docRef = doc(db, "profile", email);
            const profile = getDoc(docRef);
            const updatedProfile = { ...profile.data(), teamName: data.teamName, teamCode: teamCode, isTeamLeader: true };
            await setDoc(doc(db, "profile", email), updatedProfile);
            
            res.status(200).json({ success: true, message: 'Created Team Successfully', data: response});
        } catch (error) {
                console.error(error.message);
                res.status(400).json({ success: false, message: error.message });
        }
    }

    static joinTeam = async (req, res, next) => {
        const data = req.body;
        const teamCode = data.team;
        const email = AuthMiddleware.extractToken(req.cookies.jwt).user;

        try {
            // Update in teams
            const docRef = doc(db, "teams", teamCode);
            const docSnap = await getDoc(docRef);
            const teamData = docSnap.data();
            const teamName = teamData.teamName;
            teamData.members.push(email);
            const response = await setDoc(doc(db, "teams", teamName), teamData);

            // Update in Profile 
            const profileRef = doc(db, "profile", email);
            const profile = getDoc(profileRef);
            const updatedProfile = { ...profile.data(), teamName: teamName, teamCode: teamCode, isTeamLeader: false };
            await setDoc(doc(db, "profile", email), updatedProfile);
            res.status(200).json({ success: true, message: 'Join Team Successfully', data: response});
        } catch (error) {
                console.error(error.message);
                res.status(400).json({ success: false, message: error.message });
        }
    };
    
    static quitTeam = async (req, res, next) => {
        res.status(200).json({content: [{ msg: 'Update Team'}]});
    };

    static deleteTeam = async (req, res, next) => {
        res.status(200).json({content: [{ msg: 'Delete Team'}]});
    };

    static getTeam = async (req, res, next) => {
        const email = AuthMiddleware.extractToken(req.cookies.jwt).user;
        try {
            const docRef = doc(db, "teams", teamName);
            const docSnap = await getDoc(docRef);
            const teamData = docSnap.data();
            res.status(200).json({ success: true, message: 'Recieved Team Data Successfully', data: teamData});
        } catch (error) {
                console.error(error.message);
                res.status(400).json({ success: false, message: error.message });
        }
    };
}

export default TeamService;
