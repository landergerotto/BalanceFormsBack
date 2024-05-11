const { Values } = require("../models/values");

class ValuesController {
    static async getValues(req, res) {
        try {
            const values = await Values.find();
            return res.status(200).send({ values });
        } catch (error) {
            return res.status(404).send({ error: 'Values not found!' });
        }
    }

    static async postValues(req, res) {
        const { test1, test2 } = req.body;

        if (!test1 || !test2)
            return res.status(400).send({ message: 'Fields cannot be empty' });

        const values = new Values({
            test1,
            test2
        });

        try {
            await values.save();
            res.status(201).send({ message: 'Values registered successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ message: 'Something failed while creating values' });
        }
    }

    static async clearValues(req, res) {
        try {
            await Values.deleteMany({});
            return res.status(200).send({ message: 'All values deleted successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ message: 'Something went wrong while clearing values' });
        }
    }
}

module.exports = ValuesController;
