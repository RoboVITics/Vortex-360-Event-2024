class ProfileService {
    static createProfile = async (req, res, next) => {
        res.status(200).json({content: [{ msg: 'Create Profile'}]});
    }

    static updateProfile = async (req, res, next) => {
        res.status(200).json({content: [{ msg: 'Update Profile'}]});
    }

    static getProfile = async (req, res, next) => {
        res.status(200).json({content: [{ msg: 'Get Profile'}]});
    }
}

export default ProfileService;
