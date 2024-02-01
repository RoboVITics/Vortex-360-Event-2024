import { getFirestore, doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore'
import fireapp from '../database.js';
import AuthMiddleware from '../middleware/authMiddleware.js';
const db = getFirestore(fireapp);
class TeamService {    
    static createTeam = async (req, res, next) => {
        // Data required:
        const data = req.body;
        const teamName = data.teamName;
        const token = req.headers['token'];
        const email = AuthMiddleware.extractToken(token).user;
        try {
            // Check if part of team:
            const profileRef = doc(db, "profile", email);
            const profile = await getDoc(profileRef);
            const profileData = profile.data();

            if(!profileData.teamName){
                const numberCode = (Math.floor(Math.random() * 8999) + 1000);
                var teamCode = teamName.substring(0,4) + numberCode;
                //Check if team exists:
                const teamRef = doc(db, "teams", teamCode);
                const teamData = await getDoc(teamRef);
                if(teamData.data()){
                    // Create a new code:
                    teamCode = teamCode.substring(0,4) + (numberCode + 1);
                }
    
                const response = await setDoc(doc(db, "teams", teamCode), {
                    teamCode: teamCode,
                    teamName: data.teamName,
                    members: [{
                        email: email,
                        name: profileData.name
                    }],

                });
                
                const updatedProfile = { ...profile.data(), teamName: data.teamName, teamCode: teamCode, isTeamLeader: true };
                console.log(updatedProfile);
                await setDoc(doc(db, "profile", email), updatedProfile);
                console.log("teams/create: Created team!");
                res.status(200).json({ success: true, message: 'Created Team Successfully', data: response});
            
            }
            else{
                console.log("teams/create: User in team");
                res.status(200).json({ success: false, message: 'User already exists in a team'});
            }
        } catch (error) {
                console.error(error.message);
                res.status(500).json({ success: false, message: error.message });
        }
    }

    static joinTeam = async (req, res, next) => {
        const data = req.body;
        const teamCode = data.teamCode;
        const token = req.headers['token'];
        const email = AuthMiddleware.extractToken(token).user;

        try {
            // Check if part of team:
            const profileRef = doc(db, "profile", email);
            const profile = await getDoc(profileRef);
            const profileData = profile.data();

            if(!profileData.teamName){
                // Update in teams doc:
                const teamRef = doc(db, "teams", teamCode);
                const team = await getDoc(teamRef);
                var teamData = team.data();
                teamData.members.push({
                    email: email,
                    name: profileData.name
                });
                const response = await setDoc(doc(db, "teams", teamCode), teamData);
                
                const updatedProfile = { ...profile.data(), teamName: teamData.teamName, teamCode: teamCode, isTeamLeader: false };
                console.log(updatedProfile);
                await setDoc(doc(db, "profile", email), updatedProfile);
                
                res.status(200).json({ success: true, message: 'Joined Team Successfully', data: response});
            
            }
            else{
                console.log("teams/join: User in team");
                res.status(200).json({ success: false, message: 'User already exists in a team'});
            }
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ success: false, message: error.message });
        }
    };
    
    static quitTeam = async (req, res, next) => {
        const token = req.headers['token'];
        const email = AuthMiddleware.extractToken(token).user;
        try {
            const profileRef = doc(db, "profile", email);
            const profile = await getDoc(profileRef);
            var profileData = profile.data();
            const teamCode = profileData.teamCode;

            // Delete member from teams
            const teamRef = doc(db, "teams", teamCode);
            const teamSnap = await getDoc(teamRef);
            var teamData = teamSnap.data();
            console.log(teamData);
            if(profileData.isTeamLeader == true){
                if(teamData.members.length > 1){
                    console.log("teams/quit: Cannot leave the team!");
                    res.status(200).json({success: false, message: "Cannot leave the team!"});
                }
                else{
                    // Delete the team:
                    await deleteDoc(doc(db, "teams", teamCode));
                    // Remove from profile:
                    delete profileData.teamCode;
                    delete profileData.teamName;
                    delete profileData.isTeamLeader;
                    await setDoc(doc(db, "profile", email), profileData);
                    await deleteDoc(doc(db, "teams", teamCode));
                    console.log("teams/quit: Delete team!");
                    res.status(200).json({success: true, message: "Deleted team successfully"});
                }
            }else{
                // Leave the team
                delete profileData.teamCode;
                delete profileData.teamName;
                delete profileData.isTeamLeader;
                await setDoc(doc(db, "profile", email), profileData);

                //Delete from the team data:
                var index;
                for (let i = 1; i < teamData.members.length; i++) {
                    const value = teamData.members[i];
                    if(value.email == email){
                        index = i;
                    }
                }
                if (index > -1) teamData.members.splice(index, 1); 
                await setDoc(doc(db, "teams", teamCode), teamData);
                console.log("teams/quit: Left team!");
                res.status(200).json({success: true, message: "Left team successfully"});
            }
            
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ success: false, message: error.message });
        }
    };

    static getTeam = async (req, res, next) => {
        const token = req.headers['token'];
        const email = AuthMiddleware.extractToken(token).user;
        try {
            const profileRef = doc(db, "profile", email);
            const profile = await getDoc(profileRef);
            const profileData = profile.data();

            if(!profileData.teamCode){
                console.log("teams/read: No team!");
                res.status(200).json({success: false, message: "Not in any team!"});
            }else{
                const teamCode = profileData.teamCode;
                const docRef = doc(db, "teams", teamCode);
                const docSnap = await getDoc(docRef);
                const teamData = docSnap.data();
                res.status(200).json({ success: true, message: 'Recieved Team Data Successfully', data: teamData});
            }
        } catch (error) {
                console.error(error.message);
                res.status(500).json({ success: false, message: error.message });
        }
    };
}

export default TeamService;