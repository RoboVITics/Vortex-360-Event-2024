class TeamService {
    static createTeam = async (req, res, next) => {
        res.status(200).json({content: [{ msg: 'Create Team'}]});
    }

    static updateTeam = async (req, res, next) => {
        res.status(200).json({content: [{ msg: 'Update Team'}]});
    }

    static getTeam = async (req, res, next) => {
        res.status(200).json({content: [{ msg: 'Get Team'}]});
    }
}

export default TeamService;
