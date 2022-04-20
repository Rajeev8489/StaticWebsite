const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.fullName}\r\n
    Email: ${body.email}\r\n
    Phone Number: ${body.phoneNumber}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: `rajeevg1596@gmail.com`,
    from: `simplurisindia@gmail.com`,
    subject: body.subject,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };

  await mail.send(data);

  res.status(200).json({ status: 'OK' });
};