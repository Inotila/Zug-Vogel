const express = require('express');
const router = express.Router();
const client = require('../config/contentful');

router.get('/entries', async (req, res) => {
    const { type } = req.query;  // Get query parameter ?type=accommodation or ?type=tours

    try {
        const entries = await client.getEntries({
            content_type: type // Filters by content type
        });
        // console.log('Entries:', entries.items); 
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
            amenities: accommodation.fields.amenities || '',
            coverPhoto: accommodation.fields.coverPhoto?.fields.file.url || '',
            photos: accommodation.fields.photos || [],
            accommodationHasPool: accommodation.fields.accommodationHasPool || false,
            parkingType: accommodation.fields.parkingType || ''
        });
    } catch (error) {
        console.error('Error fetching accommodation:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


router.get('/tour/:slug', async (req, res) => {
    try{
    const { slug } = req.params;
    const normalizedSlug = slug.toLowerCase();

    const entries = await client.getEntries({ content_type: 'tours' });

    const tour = entries.items.find(item => 
        item.fields.title.toLowerCase().replace(/\s+/g, '-') === normalizedSlug
    );

    if (!tour) {
        return res.status(404).json({ message: 'Tour not found' });
    }
    
    res.json({
            id: tour.sys.id,
            title: tour.fields.title,
            durationOfTrip: tour.fields.durationOfTrip || 'N/A',
            startingPoint: tour.fields.startingPoint || 'Unknown',
            mainDestination: tour.fields.mainDestination || 'Unknown',
            endDestination: tour.fields.endDestination || 'Unknown',
            description: tour.fields.description,
            summaryText: tour.fields.summaryDescription,
            coverPhoto: tour.fields.tourCoverPhoto?.fields.file.url  || 'Unknown',
            photos: tour.fields.tourPhotos || []
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tour', error: error.message });
    }
});


module.exports = router;
