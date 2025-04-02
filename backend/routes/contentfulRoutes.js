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

// Fetch a single accommodation entry by slug (title)
router.get('/accommodation/:slug', async (req, res) => {
    try {
        const { slug } = req.params;
        console.log(`Requested slug: ${slug}`);

        // Fetch all accommodations from Contentful
        const entries = await client.getEntries({ content_type: 'accommodation' });

        // Normalize and filter the data
        const normalizedSlug = slug.toLowerCase();
        const accommodation = entries.items.find(item => 
            item.fields.title.toLowerCase().replace(/\s+/g, '-') === normalizedSlug
        );

        if (!accommodation) {
            return res.status(404).json({ message: 'Accommodation not found' });
        }

        res.json({
            id: accommodation.sys.id,
            title: accommodation.fields.title,
            freeWifi: accommodation.fields.freeWifi || false,
            city: accommodation.fields.city || '',
            summaryDescription: accommodation.fields.summaryDescription || '',
            googleMapLocation: accommodation.fields.googleMapLocation || '',
            description: accommodation.fields.description || '',
            coverPhoto: accommodation.fields.coverPhoto?.fields.file.url || '',
            accommodationHasPool: accommodation.fields.accommodationHasPool || false,
            parkingType: accommodation.fields.parkingType || ''
        });
    } catch (error) {
        console.error('Error fetching accommodation:', error);
        res.status(500).json({ message: 'Internal Server Error' });
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
