class SubmitService {
    static createSubmission = async (req, res, next) => {
        // 1. Get the request data
        const data = req.body;
        // 2. Send data to firestore
        try {
            // 2. Send data to Firestore
            const db = admin.firestore();
            const collectionRef = db.collection('submissions');
            await collectionRef.add(data);
                res.status(200).json({ content: [{ msg: 'Created Submission' }] });
            } catch (error) {
                console.error('Error creating submission:', error);
                res.status(500).json({ error: 'Failed to create submission' });
            }
    }

    static updateSubmission = async (req, res, next) => {
        res.status(200).json({content: [{ msg: 'Update Submission'}]});
    }

    static getSubmission = async (req, res, next) => {
        try {
            const submissionId = req.params.submissionId;
            const db = admin.firestore();
            const submissionRef = db.collection('submissions').doc(submissionId);
            const submissionDoc = await submissionRef.get();
            
            if (!submissionDoc.exists) {
                res.status(404).json({ error: 'Submission not found' });
            } else {
                const submissionData = submissionDoc.data();
                res.status(200).json({ content: submissionData });
            }
        } catch (error) {
            console.error('Error getting submission:', error);
            res.status(500).json({ error: 'Failed to get submission' });
        }
    }
}

export default SubmitService;
