import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

const formatMessage = (body) => `
Namn: ${body.firstname} ${body.lastname}
Adress: ${body.address}
Lägenhetsnummer: ${body.apartment_number}
Telefonnummer: ${body.phonenumber}
E-post: ${body.email}

Typ av fel: ${body.issue_type}

Beskrivning:
${body.description}
`

async function felanmalan(req, res) {
  try {
    const verificationRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET}&response=${req.body.token}`,
    })
    const token = await verificationRes.json()

    if (token.score > 0.8) {
      await resend.emails.send({
        from: 'info@tinfors.se',
        to: process.env.TARGET_EMAIL,
        replyTo: process.env.TARGET_EMAIL,
        subject: `Felanmälan från ${req.body.firstname} ${req.body.lastname} – ${req.body.issue_type}`,
        text: formatMessage(req.body),
      })
    } else {
      return res.status(500).json({ error: 'Spam filter' })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Server error' })
  }
  return res.status(200).json({ error: '' })
}

export default felanmalan
