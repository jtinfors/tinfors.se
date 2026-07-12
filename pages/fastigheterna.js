import Image from "next/image";
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
    studios: {
      count: 1,
      size: "23 m²",
      slug: "sodra-lillastrand-24c",
      badge: "Nyproduktion",
    },
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
    <Layout
      title="Fastigheterna"
      description="Se alla fastigheter i Tinfors Fastigheters bestånd i norra Örebro: Södra Lillåstrand och Hjortstorpsvägen, med lägenheter i varierande storlekar."
    >
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
                <Image
                  src={prop.image}
                  alt={prop.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{prop.name}</h2>
                <p className={styles.cardLocation}>{prop.location}</p>
                <div className={styles.cardMeta}>
                  <span>{prop.units} lägenheter</span>
                  <span>{prop.rooms}</span>
                  <span>{prop.size}</span>
                </div>
                {prop.studios && (
                  <div className={styles.cardStudio}>
                    <span>{prop.studios.count} studio</span>
                    <span>{prop.studios.size}</span>
                    {prop.studios.badge && (
                      <span className={styles.cardBadge}>{prop.studios.badge}</span>
                    )}
                  </div>
                )}
                <span className={styles.cardArrow}>Visa fastighet →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
