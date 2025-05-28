import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const {
      name, age, gender, phone,
      date, department, doctor, reason
    } = await req.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user:"rknh52@gmail.com",
        pass:"tebvyifrjjwupssk",
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: `"OP Booking" <${process.env.EMAIL_USER}>`,
      to: "rknh52@gmail.com",
      subject: `New OP Appointment from ${name}`,
      html: `
        <h2>OP Appointment Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Doctor:</strong> ${doctor}</p>
        <p><strong>Reason:</strong> ${reason}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: 'Appointment sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Failed to send appointment',
      error: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
