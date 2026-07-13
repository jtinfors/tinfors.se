import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/Fastighet.module.css";

const HOMEQ_URL =
  "https://www.homeq.se/lagenhet/264418-1rum-orebro-orebro-lan-hjortstorpsvagen-28";

const galleryImages = [
  { src: "/hjortstorpsvagen_28_44kvm/ebc780b19e0a401cbccb9ed7153a2c0e.jpeg", alt: "Ljust vardagsrum med parkettgolv" },
  { src: "/hjortstorpsvagen_28_44kvm/f9bc6be4c2814323843f146c322e79e5.jpeg", alt: "Kök med diskmaskin och kylskåp" },
  { src: "/hjortstorpsvagen_28_44kvm/8c696897f2ec4ec395a98d58a4dfdc13.jpeg", alt: "Nyrenoverat badrum med dusch" },
  { src: "/hjortstorpsvagen_28_44kvm/99197527fd9e4e0190dc5575a789b127.jpeg", alt: "Hall" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Apartment",
  name: "Hjortstorpsvägen 28 – Fin etta på norr",
  description:
    "Fin etta på norr i Örebro, 42 kvm, 6 081 kr/mån. Förstahandskontrakt. Promenadavstånd till USÖ, campus USÖ, city och resecentrum.",
  floorSize: {
    "@type": "QuantitativeValue",
    value: 42,
    unitCode: "MTK",
  },
  image: "https://tinfors.se/hjortstorpsvagen_28_44kvm/01752c39a2554ac3b9a1c4db347ee7dc.jpeg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hjortstorpsvägen 28",
    addressLocality: "Örebro",
    addressCountry: "SE",
  },
  url: "https://tinfors.se/fastigheterna/1rum-orebro-orebro-lan-hjortstorpsvagen-28",
};

export default function HjortstorpsvagenTvattioattaFinEtta() {
  return (
    <Layout
      title="Hjortstorpsvägen 28 – Fin etta på norr, 42 m²"
      description="Fin etta på norr i Örebro, 42 kvm, 6 081 kr/mån. Förstahandskontrakt. Promenadavstånd till USÖ, campus USÖ, city och resecentrum."
      image="https://tinfors.se/hjortstorpsvagen_28_44kvm/01752c39a2554ac3b9a1c4db347ee7dc.jpeg"
      jsonLd={jsonLd}
    >
      <div className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/hjortstorpsvagen_28_44kvm/01752c39a2554ac3b9a1c4db347ee7dc.jpeg"
          alt="Hjortstorpsvägen 28 – kök"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Hjortstorpsvägen 28 – Fin etta på norr</h1>
          <p className={styles.heroLocation}>42 kvm · Promenadavstånd till USÖ och city</p>
          <div className={styles.heroCta}>
            <Link href={HOMEQ_URL} className="btn-primary">
              Intresseanmälan via HomeQ
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.breadcrumb}>
        <Link href="/fastigheterna">Fastigheterna</Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span>Hjortstorpsvägen 28 – Fin etta på norr</span>
      </div>

      <div className={styles.content}>
        <div className={styles.description}>
          <h2>Fin etta på norr i Örebro</h2>
          <p>
            Fin etta på norr i Örebro, 42 kvm, 6 081 kr/mån.
            Förstahandskontrakt. Hjortstorpsvägen 28. Promenadavstånd till
            USÖ, campus USÖ, city och resecentrum.
          </p>
          <p>
            Hela lägenheten är i bra skick och har diskmaskin i köket.
            Badrummet är nyrenoverat.
          </p>
          <p>
            Fräsch liten lägenhet; perfekt för dig som vill bo bekvämt, nära
            allt och i ett bra område. Nära till butiker, caféer och
            grönområden med fina joggingrundor och vintertid skridskoåkning
            på naturis i Rynningeviken.
          </p>
        </div>

        <div className={styles.bofakta}>
          <h3 className={styles.bofaktaTitle}>Bofakta</h3>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Lediga lägenheter</span>
            <span className={styles.bofaktaValue}>1</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Hyra</span>
            <span className={styles.bofaktaValue}>6 081 kr/mån</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Storlek</span>
            <span className={styles.bofaktaValue}>42 m²</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Rum</span>
            <span className={styles.bofaktaValue}>1 rok</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Våning</span>
            <span className={styles.bofaktaValue}>1 tr</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Område</span>
            <span className={styles.bofaktaValue}>Örebro, norr</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Kontrakt</span>
            <span className={styles.bofaktaValue}>Förstahand</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Diskmaskin</span>
            <span className={styles.bofaktaValue}>I köket</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Badrum</span>
            <span className={styles.bofaktaValue}>Nyrenoverat</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Tvättstuga</span>
            <span className={styles.bofaktaValue}>Gemensam</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Förråd</span>
            <span className={styles.bofaktaValue}>Ingår</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Parkering</span>
            <span className={styles.bofaktaValue}>Tillgängligt i området</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Inflyttning</span>
            <span className={styles.bofaktaValue}>Enligt överenskommelse</span>
          </div>
        </div>
      </div>

      <div className={styles.gallery}>
        <div className={styles.galleryGrid}>
          {galleryImages.map((img) => (
            <div key={img.src} className={styles.galleryImage}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.mapSection}>
        <h2 className={styles.mapTitle}>Hitta hit</h2>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2048.5!2d15.2195!3d59.2990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c14000b6e3e7d%3A0x0!2zSGpvcnRzdG9ycHN2w6RnZW4gMjgsIMOWcmVicm8!5e0!3m2!1ssv!2sse"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Karta – Hjortstorpsvägen 28"
          />
        </div>
      </div>

      <div className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <p>Är du intresserad av lägenheten?</p>
          <Link href={HOMEQ_URL} className="btn-primary">
            Intresseanmälan via HomeQ
          </Link>
        </div>
      </div>
    </Layout>
  );
}
