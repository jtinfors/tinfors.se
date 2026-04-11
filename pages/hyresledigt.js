import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Listings.module.css";

const listings = [
  {
    id: 1,
    state: "inactive",
    type: "lagenhet",
    address: "Hjortstorpsvägen 28",
    area: "Örebro",
    rooms: 1,
    sqm: 42,
    rent: 6081,
    floor: 1,
    moveIn: "2026-05-01",
    available: true,
    image:
      "https://homeq-media-live.s3.amazonaws.com/2880/apartment_images/99197527fd9e4e0190dc5575a789b127.jpeg",
    includes: ["Värme", "Vatten", "Tvättstuga", "Diskmaskin"],
    url: "https://www.homeq.se/lagenhet/237239-1rum-orebro-orebro-lan-hjortstorpsvagen-28",
  },
  {
    id: 2,
    state: "active",
    type: "lagenhet",
    address: "Hjortstorpsvägen 9",
    area: "Örebro",
    rooms: 1,
    sqm: 34,
    rent: 7160,
    floor: 4,
    moveIn: "2026-04-01",
    available: true,
    image:
      "https://homeq-media-live.s3.amazonaws.com/2880/apartment_images/83c00bdfa3e448aa80ea2edc45a5448f.jpeg",
    includes: [
      "Värme",
      "Vatten",
      "Tvättmaskin",
      "Torktumlare",
      "Diskmaskin",
      "Dusch",
    ],
    url: "https://www.homeq.se/lagenhet/235309-1rum-orebro-orebro-lan-hjortstorpsvagen-9",
  },
  {
    id: 3,
    state: "active",
    type: "lagenhet",
    address: "Hjortstorpsvägen 9",
    area: "Örebro",
    rooms: 2,
    sqm: 75,
    rent: 9902,
    floor: 1,
    moveIn: "2026-05-01",
    available: true,
    image:
      "https://homeq-media-live.s3.amazonaws.com/2880/apartment_images/29534359f65a41b2ad8c00ae4a5383e2.jpeg",
    includes: [
      "Värme",
      "Vatten",
      "Tvättstuga",
      "Diskmaskin",
      "Kokvrå",
      "Dusch",
    ],
    url: "https://www.homeq.se/lagenhet/243274-2rum-%C3%B6rebro-%C3%B6rebro-l%C3%A4n-hjortstorpsv%C3%A4gen-9",
  },
  {
    id: 4,
    state: "inactive",
    type: "lagenhet",
    address: "Hjortstorpsvägen 28",
    area: "Örebro",
    rooms: 1,
    sqm: 44,
    rent: 5796,
    floor: 2,
    moveIn: "2026-04-01",
    available: true,
    image:
      "https://homeq-media-live.s3.amazonaws.com/2880/apartment_images/32c4e3ecc340445784a23ce261f71275.jpeg",
    includes: ["Värme", "Vatten", "Tvättstuga", "Kokvrå", "Dusch"],
    url: "https://www.homeq.se/lagenhet/243340-1rum-%C3%B6rebro-%C3%B6rebro-l%C3%A4n-hjortstorpsv%C3%A4gen-28",
  },
].filter((l) => l.state === "active");

const categories = [
  { id: "alla", label: "Alla" },
  { id: "lagenhet", label: "Lägenheter" },
];

export default function HyresledigtPage() {
  const [active, setActive] = useState("alla");

  const filtered =
    active === "alla" ? listings : listings.filter((l) => l.type === active);

  return (
    <Layout title="Hyresledigt">
      <div className="page-header">
        <h1>Hyresledigt</h1>
        <p>Lediga lägenheter hos Tinfors Fastigheter</p>
      </div>

      <div className="section">
        <div className={styles.filterBar}>
          {categories.map((c) => (
            <button
              key={c.id}
              className={`${styles.filterBtn} ${
                active === c.id ? styles.active : ""
              }`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className={styles.emptyState}>
            <h3>Inga lediga objekt just nu</h3>
            <p>
              Fyll i en intresseanmälan så kontaktar vi dig när något blir
              ledigt.
            </p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((listing) => (
              <a href={listing.url} key={listing.id}>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <img src={listing.image} alt={listing.address} />
                  </div>
                  <div className={styles.cardBody}>
                    {listing.available && (
                      <span className={styles.cardBadge}>intresseanmälan</span>
                    )}
                    <h2 className={styles.cardTitle}>{listing.address}</h2>
                    <div className={styles.cardMeta}>
                      <span>{listing.rooms} rum</span>
                      <span>{listing.sqm} m²</span>
                      <span>Vån {listing.floor}</span>
                      <span>{listing.area}</span>
                    </div>
                    <div className={styles.cardIncludes}>
                      Ingår: {listing.includes.join(" · ")}
                    </div>
                    <div className={styles.cardRent}>
                      {listing.rent.toLocaleString("sv-SE")} kr/mån
                    </div>
                    <div className={styles.cardMoveIn}>
                      Tillträde:{" "}
                      {new Date(listing.moveIn).toLocaleDateString("sv-SE", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className={styles.ctaBanner}>
          <p>
            Hittade du inget som passade? Anmäl ditt intresse så hör vi av oss.
          </p>
          <a href="/intresseanmalan" className="btn-primary">
            Gör en intresseanmälan
          </a>
        </div>
      </div>
    </Layout>
  );
}
