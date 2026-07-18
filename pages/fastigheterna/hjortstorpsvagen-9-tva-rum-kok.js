import Image from "next/image";
import Link from "next/link";
import HomeqLink from "../../components/HomeqLink";
import Layout from "../../components/Layout";
import styles from "../../styles/Fastighet.module.css";

const HOMEQ_URL =
  "https://www.homeq.se/lagenhet/268621-2rum-orebro-orebro-lan-hjortstorpsvagen-9";

const galleryImages = [
  {
    src: "/hjortstorpsvagen_9/0afa0331f7514ba09380b40d82b4b5e0.jpeg",
    alt: "Vardagsrum med ekparkett",
  },
  {
    src: "/hjortstorpsvagen_9/96a29d383e96444ba39c8ddcea671cf9.jpeg",
    alt: "Kök med diskmaskin och micro",
  },
  {
    src: "/hjortstorpsvagen_9/7cbfcefbf9a34520a5b1e8076fb02c5f.jpeg",
    alt: "Kaklat badrum med duschhörna",
  },
  {
    src: "/hjortstorpsvagen_9/121acd4b7aa6429b9e43c74894bbc4cf.jpeg",
    alt: "Sovrum med platsbyggd garderob",
  },
  {
    src: "/hjortstorpsvagen_9/3354ebc72fa84904a2f4b590a44ed7a6.jpeg",
    alt: "Hall med förvaring",
  },
  {
    src: "/hjortstorpsvagen_9/f6dcfb1e1e3d4f56added5b08234bc45.jpeg",
    alt: "Sovrum mot lugn innergård",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Apartment",
  name: "Hjortstorpsvägen 9 – 2 rum och kök",
  description:
    "Stor fin 2:a på norr i Örebro med promenadavstånd till USÖ, campus USÖ, city och resecentrum. 75 kvm. Hyra 9 902 kr/mån.",
  floorSize: {
    "@type": "QuantitativeValue",
    value: 75,
    unitCode: "MTK",
  },
  image:
    "https://tinfors.se/hjortstorpsvagen_9/2c16c8d9f6974aab9a7a3140df3077b9.jpeg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hjortstorpsvägen 9",
    addressLocality: "Örebro",
    addressCountry: "SE",
  },
  url: "https://tinfors.se/fastigheterna/hjortstorpsvagen-9-tva-rum-kok",
};

export default function HjortstorpsvagenNioTvaRumKok() {
  return (
    <Layout
      title="Hjortstorpsvägen 9 – 2 rum och kök, 75 m²"
      description="Stor fin 2:a på norr i Örebro med promenadavstånd till USÖ, campus USÖ, city och resecentrum. 75 kvm. Hyra 9 902 kr/mån."
      image="https://tinfors.se/hjortstorpsvagen_9/2c16c8d9f6974aab9a7a3140df3077b9.jpeg"
      jsonLd={jsonLd}
    >
      <div className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/hjortstorpsvagen_9/2c16c8d9f6974aab9a7a3140df3077b9.jpeg"
          alt="Hjortstorpsvägen 9 – exteriör"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>
            Hjortstorpsvägen 9 – 2 rum och kök
          </h1>
          <p className={styles.heroLocation}>
            Promenadavstånd till USÖ, campus och city
          </p>
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
        <span>Hjortstorpsvägen 9 – 2 rum och kök</span>
      </div>

      <div className={styles.content}>
        <div className={styles.description}>
          <h2>Stor fin 2:a på norr i Örebro</h2>
          <p>
            Stor fin 2:a på norr i Örebro med promenadavstånd till USÖ, campus
            USÖ, city och resecentrum. 75 kvm. Hyra 9 902 kr/mån.
          </p>
          <p>P-plats finns att hyra på gården.</p>
          <p>
            Fräsch lägenhet för dig som vill bo bekvämt, nära allt och i ett bra
            område. Nära till butiker, caféer och grönområden med fina
            joggingrundor och vintertid skridskoåkning på naturis i
            Rynningeviken.
          </p>
          <p>
            Lägenheten finns 1/2 trappa upp. Till lägenheten hör förråd i
            källaren. Cykelrum finns på gården och tvättstuga i källaren.
          </p>
          <p>
            Köket är välutrustat med diskmaskin och micro, skåpinredningen är
            vinklad, följer trapphusväggens rundning. Kaklat badrum med
            duschhörna. Stort vardagsrummet mot gatan. Möblerbart hallrum.
          </p>
          <p>
            Sovrummet ligger mot en lugn innergård och har en stor platsbyggd
            garderob med skjutdörrar.
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
            <span className={styles.bofaktaValue}>9 902 kr/mån</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Storlek</span>
            <span className={styles.bofaktaValue}>75 m²</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Rum</span>
            <span className={styles.bofaktaValue}>2 rok</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Våning</span>
            <span className={styles.bofaktaValue}>1/2 tr</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Område</span>
            <span className={styles.bofaktaValue}>Örebro, norr</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Förråd</span>
            <span className={styles.bofaktaValue}>Ingår, i källaren</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Tvättstuga</span>
            <span className={styles.bofaktaValue}>Gemensam, i källaren</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Cykelrum</span>
            <span className={styles.bofaktaValue}>Finns på gården</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Parkering</span>
            <span className={styles.bofaktaValue}>
              Finns att hyra på gården
            </span>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2048.5!2d15.2180!3d59.2985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c14000b6e3e7d%3A0x0!2zSGpvcnRzdG9ycHN2w6RnZW4gOSwgw5ZyZWJybw!5e0!3m2!1ssv!2sse"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Karta – Hjortstorpsvägen 9"
          />
        </div>
      </div>

      <div className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <p>
            Boka en visning idag! Fyll i formuläret för intressanmälan så
            kontaktar vi dig!
          </p>
          <HomeqLink href={HOMEQ_URL} className="btn-primary">
            Intresseanmälan via HomeQ
          </HomeqLink>
        </div>
      </div>
    </Layout>
  );
}
