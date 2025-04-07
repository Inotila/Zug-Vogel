const express = require('express');
const { sendEnquiryEmail } = require('../services/emailService');

const router = express.Router();

router.post('/', async (req, res) => {
  const enquiryData = req.body;
  const result = await sendEnquiryEmail(enquiryData);

  if (result.success) {
    res.status(200).json({ message: 'Enquiry sent successfully.' });
  } else {
    res.status(500).json({ message: 'Failed to send enquiry.', error: result.error });
  }
});

module.exports = router;
