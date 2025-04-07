const nodemailer = require('nodemailer');

const sendEnquiryEmail = async (enquiryData) => {
  const { name, email, arrivalDate, departureDate, accommodationTitle,NumberOfAdults, NumberOfChildren } = enquiryData;

  const emailBody = `
From: ${name} <${email}>
Accommodation: ${accommodationTitle}
Number of People: ${NumberOfAdults} adults & ${NumberOfChildren} children
Arrival: ${arrivalDate}
Departure: ${departureDate}
`;

  try {
    // Create a transporter using the default SMTP transport (Gmail in this case)
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,  // This should be your Gmail app password
      },
    });

    // Send email
    let info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'inoati1991@gmail.com',
      subject: `Accommodation Enquiry for:${accommodationTitle}`,
      text: emailBody,
    });

    console.log('Message sent: %s', info.messageId);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

module.exports = { sendEnquiryEmail };
