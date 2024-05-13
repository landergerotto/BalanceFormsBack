const { Status } = require("../models/test_value");

class Test_ValueController {
    static async getTestStatus(req, res) {
        try {
            const test_value = await Status.find();
            return res.status(200).send({ test_value });
        } catch (error) {
            return res.status(404).send({ error: 'Test Value not found!' });
        }
    }

    static async create(req, res) {
        const { test_value } = req.body;
        
        const status = new Status({
            test_value
        })

        try {
            await status.save();
    
            res.status(200).send({ message: 'Status created successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ message: 'Something failed while creating status' });
        }
    }

    static async postTestStatus(req, res) {
        const { test_value } = req.body;
    
        try {
            let status = await Status.findOne();
    
            if (!status) {
                return res.status(404).send({ message: 'Status not found' });
            }
    
            status.test_value = test_value;
    
            await status.save();
    
            res.status(200).send({ message: 'Status updated successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ message: 'Something failed while updating status' });
        }
    }
    
    static async clearTimer(req, res) {
        try {
            await Status.deleteMany({});
            return res.status(200).send({ message: 'All players deleted successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ message: 'Something went wrong while clearing players' });
        }
    }
}

module.exports = Test_ValueController;
