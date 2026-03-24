import { useState } from "react";
import Layout from "../components/Layout";
import formStyles from "../styles/Form.module.css";

const familyCounter = [
  { num: 1, textual: "En" },
  { num: 2, textual: "Två" },
  { num: 3, textual: "Tre" },
  { num: 4, textual: "Fyra" },
  { num: 5, textual: "Fem" },
];

const kidsCounter = [
  { num: 0, textual: "Inga" },
  { num: 1, textual: "Ett" },
  { num: 2, textual: "Två" },
  { num: 3, textual: "Tre" },
  { num: 4, textual: "Fyra" },
];

const roomCounter = [
  { num: 1, textual: "Ett" },
  { num: 2, textual: "Två" },
  { num: 3, textual: "Tre" },
  { num: 4, textual: "Fyra" },
  { num: 5, textual: "Fem" },
];

const initialState = {
  firstname: "",
  lastname: "",
  streetaddress: "",
  zipcode: "",
  city: "",
  phonenumber: "",
  email: "",
  age: "",
  salary: "",
  number_rooms: 1,
  move_in_date: "",
  number_family_members: 1,
  number_kids: 0,
  other: "",
};

export default function IntresseanmalanPage() {
  const [loadingState, setLoadingState] = useState("start");
  const [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingState("loading");
    grecaptcha.ready(function () {
      grecaptcha
        .execute(process.env.NEXT_PUBLIC_reCAPTCHA_site_key, {
          action: "submit",
        })
        .then(function (token) {
          fetch("/api/email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, ...data }),
          }).then(() => {
            setLoadingState("done");
            setTimeout(() => {
              setData(initialState);
              setLoadingState("start");
            }, 8000);
          });
        });
    });
  };

  const handleChange = (key) => (e) =>
    setData((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <Layout title="Intresseanmälan">
      <div className="page-header">
        <h1>Intresseanmälan</h1>
        <p>
          Fyll i formuläret nedan så kontaktar vi dig när en lämplig lägenhet
          blir ledig.
        </p>
      </div>

      <div className="section">
        <div className={formStyles.formWrap}>
          <form onSubmit={handleSubmit}>
            <div className={formStyles.formGrid}>
              <div className="form-group">
                <label htmlFor="firstname">Förnamn</label>
                <input
                  required
                  id="firstname"
                  type="text"
                  className="form-control"
                  value={data.firstname}
                  onChange={handleChange("firstname")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastname">Efternamn</label>
                <input
                  required
                  id="lastname"
                  type="text"
                  className="form-control"
                  value={data.lastname}
                  onChange={handleChange("lastname")}
                />
              </div>

              <div className={`form-group ${formStyles.fullWidth}`}>
                <label htmlFor="streetaddress">Gatuadress</label>
                <input
                  required
                  id="streetaddress"
                  type="text"
                  className="form-control"
                  value={data.streetaddress}
                  onChange={handleChange("streetaddress")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="zipcode">Postnummer</label>
                <input
                  required
                  id="zipcode"
                  type="text"
                  className="form-control"
                  value={data.zipcode}
                  onChange={handleChange("zipcode")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">Ort</label>
                <input
                  required
                  id="city"
                  type="text"
                  className="form-control"
                  value={data.city}
                  onChange={handleChange("city")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-postadress</label>
                <input
                  required
                  id="email"
                  type="email"
                  className="form-control"
                  value={data.email}
                  onChange={handleChange("email")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phonenumber">Telefonnummer</label>
                <input
                  required
                  id="phonenumber"
                  type="tel"
                  className="form-control"
                  value={data.phonenumber}
                  onChange={handleChange("phonenumber")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">Ålder</label>
                <input
                  required
                  id="age"
                  type="number"
                  min="18"
                  className="form-control"
                  value={data.age}
                  onChange={handleChange("age")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="salary">Årsinkomst (kr)</label>
                <input
                  required
                  id="salary"
                  type="number"
                  className="form-control"
                  value={data.salary}
                  onChange={handleChange("salary")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="number_family_members">
                  Antal sökande personer
                </label>
                <select
                  id="number_family_members"
                  className="form-control"
                  value={data.number_family_members}
                  onChange={handleChange("number_family_members")}
                >
                  {familyCounter.map((n) => (
                    <option key={n.num} value={n.num}>
                      {n.textual}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="number_kids">… varav barn</label>
                <select
                  id="number_kids"
                  className="form-control"
                  value={data.number_kids}
                  onChange={handleChange("number_kids")}
                >
                  {kidsCounter.map((n) => (
                    <option key={n.num} value={n.num}>
                      {n.textual}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="number_rooms">Önskat antal rum</label>
                <select
                  id="number_rooms"
                  className="form-control"
                  value={data.number_rooms}
                  onChange={handleChange("number_rooms")}
                >
                  {roomCounter.map((n) => (
                    <option key={n.num} value={n.num}>
                      {n.textual}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="move_in_date">Önskat inflyttningsdatum</label>
                <input
                  id="move_in_date"
                  type="month"
                  className="form-control"
                  value={data.move_in_date}
                  onChange={handleChange("move_in_date")}
                />
              </div>

              <div className={`form-group ${formStyles.fullWidth}`}>
                <label htmlFor="other">
                  Berätta gärna om dig själv och dina önskemål — sysselsättning,
                  husdjur, önskemål om balkong eller parkeringsplats
                </label>
                <textarea
                  id="other"
                  className="form-control"
                  rows={4}
                  value={data.other}
                  onChange={handleChange("other")}
                />
              </div>
            </div>

            <div className={formStyles.submitRow}>
              <button
                type="submit"
                className="btn-primary"
                disabled={loadingState === "loading"}
              >
                {loadingState === "loading"
                  ? "Skickar…"
                  : loadingState === "done"
                  ? "Skickat!"
                  : "Skicka ansökan"}
              </button>
              {loadingState === "done" && (
                <span className={formStyles.successMsg}>
                  Tack för din ansökan! Vi hör av oss inom kort.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
