const express = require('express');
const router = express.Router();
const client = require('../config/contentful');

router.get('/entries', async (req, res) => {
    const { type } = req.query;  // Get query parameter ?type=accommodation or ?type=tours

    try {
        const entries = await client.getEntries({
            content_type: type // Filters by content type
        });

        const formattedEntries = entries.items.map(entry => ({
            id: entry.sys.id,
            ...entry.fields
        }));

        res.json(formattedEntries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch a single accommodation entry by ID
router.get('/accommodation/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const entry = await client.getEntry(id);
        const contentType = entry?.sys?.contentType?.sys?.id; // Ensure contentType exists

        if (!entry || contentType !== "accommodation") { // Confirm correct type
            return res.status(404).json({ error: "Accommodation not found" });
        }

        res.json({
            id: entry.sys.id,
            title: entry.fields.title,
            city: entry.fields.city || "Unknown",
            googleMapLocation: entry.fields.googleMapLocation || "",
            summaryDescription: entry.fields.summaryDescription || "",
            video: entry.fields.video?.fields?.file?.url || "",
            coverPhoto: entry.fields.coverPhoto?.fields?.file?.url || "",
            parkingType: entry.fields.parkingType || "N/A",
            accommodationHasPool: entry.fields.accommodationHasPool ? "Yes" : "No",
            freeWifi: entry.fields.freeWifi ? "Yes" : "No"
        });
    } catch (error) {
        res.status(500).json({ error: "Error fetching accommodation details", details: error.message });
    }
});


// Fetch a single tour entry by ID
router.get('/tours/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const entry = await client.getEntry(id);
        if (!entry || entry.sys.contentType.sys.id !== "tours") {
            return res.status(404).json({ error: "Tour not found" });
        }

        res.json({
            id: entry.sys.id,
            title: entry.fields.title,
            durationOfTrip: entry.fields.durationOfTrip || "N/A",
            startingPoint: entry.fields.startingPoint || "Unknown",
            mainDestination: entry.fields.mainDestination || "Unknown",
            endDestination: entry.fields.endDestination || "Unknown"
        });
    } catch (error) {
        res.status(500).json({ error: "Error fetching tour details", details: error.message });
    }
});

module.exports = router;
