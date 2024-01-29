import { getFirestore, doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore'
import fireapp from '../database.js';
import AuthMiddleware from '../middleware/authMiddleware.js';
import ProfileService from './profileServices.js';
const db = getFirestore(fireapp);
class TeamService {    
    static createTeam = async (req, res, next) => {
        const data = req.body;
        const teamCode = data.teamName.substring(0,3) + (Math.floor(Math.random() * 899) + 100);
        console.log(teamCode);
        const email = AuthMiddleware.extractToken(req.cookies.jwt).user;
        try {
            const response = await setDoc(doc(db, "teams", teamCode), {
                teamCode: teamCode,
                teamName: data.teamName,
                members: [email],
            });
            const docRef = doc(db, "profile", email);
            const profile = getDoc(docRef);
            const updatedProfile = { ...profile.data, teamName: data.teamName, teamCode: teamCode, isTeamLeader: true };
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
            const docRef = doc(db, "teams", teamCode);
            const docSnap = await getDoc(docRef);
            const teamData = docSnap.data();
            const teamName = teamData.teamName;
            teamData.members.push(email);
            const response = await setDoc(doc(db, "teams", teamName), teamData);
 
            const profileRef = doc(db, "profile", email);
            const profile = getDoc(profileRef);
            const updatedProfile = { ...profile.data(), teamName: teamName, teamCode: teamCode, isTeamLeader: false };
            await setDoc(doc(db, "profile", email), updatedProfile);
            res.status(200).json({ success: true, message: 'Join Team Successfully', data: response});
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ success: false, message: error.message });
        }
    };
    
    static quitTeam = async (req, res, next) => {
        const email = AuthMiddleware.extractToken(req.cookies.jwt).user;
        try {
            const profileRef = doc(db, "profile", email);
            const profile = await getDoc(profileRef);
            const profileData = profile.data();

            const teamCode = profileData.teamCode;
    
            const docRef = doc(db, "teams", teamCode);
            const docSnap = await getDoc(docRef);
            const teamData = docSnap.data();
            console.log(teamData)
            if(profileData.isTeamLeader == true){
                if(teamData.members.length > 1){
                    res.status(400).json({success: false, message: "Cannot leave the team!"});
                }
                else{
                    profileData.teamCode = "";
                    profileData.teamName = "";
                    profileData.isTeamLeader = false;
                    await deleteDoc(doc(db, "teams", teamCode));
                    res.status(200).json({success: true, message: "Deleted team successfully"});
                }
            }else{
                profileData.teamCode = "";
                profileData.teamName = "";
                res.status(200).json({success: true, message: "Left team successfully"});
            }
            
        } catch (error) {
            console.error(error.message);
            res.status(400).json({ success: false, message: error.message });
        }
    };


    static getTeam = async (req, res, next) => {
        const email = AuthMiddleware.extractToken(req.cookies.jwt).user;
        try {
            const profileRef = doc(db, "profile", email);
            const profile = await getDoc(profileRef);
            const profileData = profile.data();
            const teamCode = profileData.teamCode;

            const docRef = doc(db, "teams", teamCode);
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