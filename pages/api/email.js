import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

const formatMessage = (body) => {
  return `
Namn: ${body.firstname} ${body.lastname}\n
Gatuaddress: ${body.streetaddress}\n
Postnummer: ${body.zipcode}\n
Stad: ${body.city}\n
Telefonnummer: ${body.phonenumber}\n
E-post: ${body.email}\n
Ålder: ${body.age}\n
Lön: ${body.salary}\n
Antal sökande: ${body.number_family_members} varav ${body.number_kids} är barn\n
Önskat antal rum: ${body.number_rooms}\n
Önskat inflyttningsdatum: ${body.move_in_date}\n
\n
Övrig information: ${body.other}
`;
};

async function email(req, res) {
  try {
    const verificationRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET}&response=${req.body.token}`,
      }
    );
    const token = await verificationRes.json();

    if (token.score > 0.8) {
      const { data } = await resend.emails.send({
        from: "info@tinfors.se",
        to: process.env.TARGET_EMAIL,
        replyTo: process.env.TARGET_EMAIL,
        subject: `Intresseanmälan från ${req.body.firstname} ${req.body.lastname}`,
        text: formatMessage(req.body),
      });
      console.log("Return data => ", data);
    } else {
      return res.status(500).json({ error: "Spam filter" });
    }
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
      return res.status(500).json({ error: error.response.body });
    }
  }
  return res.status(200).json({ error: "" });
}

export default email;
