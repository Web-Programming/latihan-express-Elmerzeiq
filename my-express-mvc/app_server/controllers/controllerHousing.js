const Housing = require('../models/Housing');

// Get all housing
const index = async (req, res) => {
    try {
        const housing = await Housing.find();
        res.status(200).json(housing);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch housing', details: error.message });
    }
};
module.exports = { index };