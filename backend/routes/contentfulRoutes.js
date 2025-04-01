const express = require('express');
const router = express.Router();
const client = require('../config/contentful');

router.get('/entries', async (req, res) => {
    try {
        const entries = await client.getEntries();
        res.json(entries.items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
