import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Fastigheterna.module.css";

const properties = [
  {
    slug: "sodra-lillastrand-24",
    name: "Södra Lillåstrand 24",
    location: "Örebro",
    image: "/Salillastrand24.jpg",
    units: 10,
    rooms: "1–4 rum",
    size: "23–108 m²",
  },
  {
    slug: "sodra-lillastrand-26",
    name: "Södra Lillåstrand 26",
    location: "Örebro",
    image: "/Salillastrand26.jpg",
    units: 6,
    rooms: "1–3 rum",
    size: "24–87 m²",
  },
  {
    slug: "hjortstorpsvagen-9",
    name: "Hjortstorpsvägen 9",
    location: "Örebro",
    image: "/Hjortstorpsvagen9.jpg",
    units: 16,
    rooms: "1–2 rum",
    size: "31–75 m²",
  },
  {
    slug: "hjortstorpsvagen-28",
    name: "Hjortstorpsvägen 28",
    location: "Örebro",
    image: "/Hjortstorpsvagen28.jpg",
    units: 12,
    rooms: "1–2 rum",
    size: "21–71 m²",
  },
];

export default function FastigheternaPage() {
  return (
    <Layout title="Fastigheterna">
      <div className="page-header">
        <h1>Fastigheterna</h1>
        <p>
          Våra fastigheter ligger i norra Örebro med närhet till centrum och
          natursköna omgivningar. Klicka på en fastighet för mer information.
        </p>
      </div>

      <div className="section">
        <div className={styles.grid}>
          {properties.map((prop) => (
            <Link
              key={prop.slug}
              href={`/fastigheterna/${prop.slug}`}
              className={styles.card}
            >
              <div className={styles.cardImage}>
                <img src={prop.image} alt={prop.name} />
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{prop.name}</h2>
                <p className={styles.cardLocation}>{prop.location}</p>
                <div className={styles.cardMeta}>
                  <span>{prop.units} lägenheter</span>
                  <span>{prop.rooms}</span>
                  <span>{prop.size}</span>
                </div>
                <span className={styles.cardArrow}>Visa fastighet →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
