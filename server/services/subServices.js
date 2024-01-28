class SubmitService {
    static createSubmission = async (req, res, next) => {
        res.status(200).json({content: [{ msg: 'Create Submission'}]});
    }

    static updateSubmission = async (req, res, next) => {
        res.status(200).json({content: [{ msg: 'Update Submission'}]});
    }

    static getSubmission = async (req, res, next) => {
        res.status(200).json({content: [{ msg: 'Get Submission'}]});
    }
}

export default SubmitService;
