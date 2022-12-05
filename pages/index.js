import { useState } from "react";
import styles from "../styles/Home.module.css";

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
  number_rooms: 0,
  move_in_date: "",
  number_family_members: 1,
  number_kids: 0,
  number_rooms: 1,
  other: "",
};

function HomePage() {
  const [loadingState, setLoadingState] = useState("start");

  const [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingState("loading");
    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      setLoadingState("done");
      setTimeout(() => {
        setData(initialState);
        setLoadingState("start");
      }, 6000);
    });
  };

  const handleChange = (key) => (event) => {
    setData((prev) => {
      return { ...prev, [key]: event.target.value };
    });
  };

  return (
    <div className={styles.container}>
      <h1>Tinfors Fastigheter</h1>
      <p>
        Vi har fina lägenheter i olika storlekar och i bra lägen i den norra
        delen av Örebro. Här bor du i ett trivsamt område med promenadavstånd
        till stadens centrum, till resecentrum och till rekreationsområdet mot
        Hjälmarens strand. I naturreservatet Rynningeviken finns vintertid en
        möjlighet till skridskoåkning på naturis och sommartid till ett dopp i
        Alnängsbadet.
      </p>
      <p>
        Är du intresserad av att hyra lägenhet hos Tinfors Fastigheter? Fyll då
        i intresseanmälan nedan.
      </p>
      <form action="/" method="post" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Intresseanmälan</legend>
          <div className={styles.formGroup}>
            <label htmlFor="firstname">Förnamn:</label>
            <input
              required
              id="firstname"
              type="text"
              placeholder="Förnamn"
              value={data.firstname}
              className={styles.formInput}
              onChange={handleChange("firstname")}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="lastname">Efternamn:</label>
            <input
              required
              id="lastname"
              type="text"
              placeholder="Efternamn"
              value={data.lastname}
              className={styles.formInput}
              onChange={handleChange("lastname")}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="streetaddress">Gatuaddress:</label>
            <input
              required
              id="streetaddress"
              type="text"
              placeholder="Gatuaddress"
              value={data.streetaddress}
              className={styles.formInput}
              onChange={handleChange("streetaddress")}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="zipcode">Postnummer:</label>
            <input
              required
              id="zipcode"
              type="text"
              placeholder="Postnummer"
              value={data.zipcode}
              className={styles.formInput}
              onChange={handleChange("zipcode")}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="city">Ort:</label>
            <input
              required
              id="city"
              type="text"
              placeholder="city"
              value={data.city}
              className={styles.formInput}
              onChange={handleChange("city")}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phonenumber">Telefonnummer:</label>
            <input
              required
              id="phonenumber"
              type="text"
              placeholder="phonenumber"
              value={data.phonenumber}
              className={styles.formInput}
              onChange={handleChange("phonenumber")}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">e-post:</label>
            <input
              required
              id="email"
              type="text"
              placeholder="email"
              value={data.email}
              className={styles.formInput}
              onChange={handleChange("email")}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="age">Ålder:</label>
            <input
              required
              id="age"
              type="text"
              placeholder="age"
              value={data.age}
              className={styles.formInput}
              onChange={handleChange("age")}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="salary">Årsinkomst:</label>
            <input
              required
              id="salary"
              type="text"
              placeholder="salary"
              value={data.salary}
              className={styles.formInput}
              onChange={handleChange("salary")}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="number_family_members">
              Antal Sökande personer:
            </label>
            <select
              id="number_family_members"
              name="number_family_members"
              value={data.number_family_members}
              onChange={handleChange("number_family_members")}
              className={styles.formInput}
            >
              {familyCounter.map((n) => (
                <option key={`id_fam${n.num}`} value={n.num}>
                  {n.textual}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="number_kids">..varav barn:</label>
            <select
              id="number_kids"
              name="number_kids"
              value={data.number_kids}
              onChange={handleChange("number_kids")}
              className={styles.formInput}
            >
              {kidsCounter.map((n) => (
                <option key={`id_fam${n.num}`} value={n.num}>
                  {n.textual}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="number_rooms">Önskat antal rum:</label>
            <select
              id="number_rooms"
              name="number_rooms"
              value={data.number_rooms}
              onChange={handleChange("number_rooms")}
              className={styles.formInput}
            >
              {roomCounter.map((n) => (
                <option key={`id_fam${n.num}`} value={n.num}>
                  {n.textual}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="other">
              Berätta gärna lite om dej själv och vad du har för önskemål på din
              framtida bostad. Sysselsättning, eventuella husdjur. Intresse för
              balkong eller p-plats är även intressant information:
            </label>
            <textarea
              id="other"
              type="text"
              placeholder="Önskemål"
              value={data.other}
              className={styles.formInput}
              onChange={handleChange("other")}
              rows="3"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="move_in_date">Önskat inflyttningsdatum:</label>
            <input
              id="move_in_date"
              type="month"
              value={data.move_in_date}
              className={styles.formInput}
              onChange={handleChange("move_in_date")}
            />
          </div>

          <div className="form-group">
            {loadingState === "start" && (
              <button type="submit" className="btn btn-primary">
                <span>Skicka</span>
              </button>
            )}
            {loadingState === "loading" && (
              <button type="submit" className="btn btn-primary">
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">{` Skickar...`}</span>
              </button>
            )}
            {loadingState === "done" && (
              <>
                <button type="submit" className="btn btn-primary">
                  <span>Skickat!</span>
                </button>
                <span className={styles.thanks}>
                  Tusen tack för din ansökan! Vi hör av oss inom kort! 🙂
                </span>
              </>
            )}
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default HomePage;
