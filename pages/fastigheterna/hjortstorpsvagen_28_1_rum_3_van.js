import Image from "next/image";
import Link from "next/link";
import HomeqLink from "../../components/HomeqLink";
import Layout from "../../components/Layout";
import styles from "../../styles/Fastighet.module.css";

const HOMEQ_URL =
  "https://www.homeq.se/lagenhet/268737-1rum-orebro-orebro-lan-hjortstorpsvagen-28";

const galleryImages = [
  { src: "/hjortstorpsvagen_28_1/7b0932889cb4421b99ae56a094ce9326.jpeg", alt: "Rymligt vardagsrum/sovrum" },
  { src: "/hjortstorpsvagen_28_1/4c6c20d493224ee1bf0cee3c975f4575.jpeg", alt: "Rum med fönster och element" },
  { src: "/hjortstorpsvagen_28_1/24fd25fb61684cf389b8117933583740.jpeg", alt: "Hall med klädhängare" },
  { src: "/hjortstorpsvagen_28_1/02069800f2e74fdeb0a26628b780a448.jpeg", alt: "Hall mot ytterdörr" },
  { src: "/hjortstorpsvagen_28_1/895a3349f01049ad9d8ed536dba019ea.jpeg", alt: "Kök med gott om skåp" },
  { src: "/hjortstorpsvagen_28_1/6df36cb7a0164acea83ca7ef4a812339.jpeg", alt: "Fönster med utsikt" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Apartment",
  name: "Hjortstorpsvägen 28 – Stor och ljus 1:a",
  description:
    "Stor och ljus 1:a – 44 kvm nära Örebro centrum. Rymligt vardagsrum/sovrum, praktiskt kök och fräscht badrum.",
  floorSize: {
    "@type": "QuantitativeValue",
    value: 44,
    unitCode: "MTK",
  },
  image: "https://tinfors.se/hjortstorpsvagen_28_1/205e1a68f9a941f7a9d83253d71057b7.jpeg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hjortstorpsvägen 28",
    addressLocality: "Örebro",
    addressCountry: "SE",
  },
  url: "https://tinfors.se/fastigheterna/hjortstorpsvagen_28_1_rum_3_van",
};

export default function Hjortstorpsvagen28EttRumTreVan() {
  return (
    <Layout
      title="Hjortstorpsvägen 28 – Stor och ljus 1:a, 44 m²"
      description="Stor och ljus 1:a – 44 kvm nära Örebro centrum. Rymligt vardagsrum/sovrum, praktiskt kök och fräscht badrum."
      image="https://tinfors.se/hjortstorpsvagen_28_1/205e1a68f9a941f7a9d83253d71057b7.jpeg"
      jsonLd={jsonLd}
    >
      <div className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/hjortstorpsvagen_28_1/205e1a68f9a941f7a9d83253d71057b7.jpeg"
          alt="Hjortstorpsvägen 28 – kök"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Hjortstorpsvägen 28 – Stor och ljus 1:a</h1>
          <p className={styles.heroLocation}>44 kvm nära Örebro centrum</p>
          <div className={styles.heroCta}>
            <HomeqLink href={HOMEQ_URL} className="btn-primary">
              Intresseanmälan via HomeQ
            </HomeqLink>
          </div>
        </div>
      </div>

      <div className={styles.breadcrumb}>
        <Link href="/fastigheterna">Fastigheterna</Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span>Hjortstorpsvägen 28 – Stor och ljus 1:a</span>
      </div>

      <div className={styles.content}>
        <div className={styles.description}>
          <h2>Stor och ljus 1:a – 44 kvm nära Örebro centrum</h2>
          <p>
            Letar du efter en enrummare med gott om utrymme? Denna
            välplanerade bostad på hela 44 kvm ger dig känslan av att bo
            större, samtidigt som du har ett attraktivt läge strax utanför
            stadskärnan.
          </p>
          <p>Bostaden erbjuder:</p>
          <ul>
            <li>
              Rymligt vardagsrum/sovrum med plats för både säng, soffa och
              arbetsplats
            </li>
            <li>Praktiskt kök med bra arbetsytor och plats för matbord</li>
            <li>Fräscht badrum i bra storlek</li>
            <li>Gott om förvaringsplats som gör vardagen smidigare</li>
          </ul>
          <p>
            Här bor du i ett lugnt och trivsamt område med kort promenad
            eller cykeltur in till city. Butiker, restauranger och
            kommunikationer finns nära, och du har även parker och
            grönområden inom räckhåll.
          </p>
          <p>
            Ett utmärkt boende för dig som vill ha en rymlig 1:a med både
            stadens utbud och lugnet runt hörnet.
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
            <span className={styles.bofaktaValue}>5 798 kr/mån</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Storlek</span>
            <span className={styles.bofaktaValue}>44 m²</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Rum</span>
            <span className={styles.bofaktaValue}>1 rok</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Våning</span>
            <span className={styles.bofaktaValue}>3 tr</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Område</span>
            <span className={styles.bofaktaValue}>Örebro, norr</span>
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
          <HomeqLink href={HOMEQ_URL} className="btn-primary">
            Intresseanmälan via HomeQ
          </HomeqLink>
        </div>
      </div>
    </Layout>
  );
}
