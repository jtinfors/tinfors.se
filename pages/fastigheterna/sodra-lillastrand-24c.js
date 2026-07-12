import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/Fastighet.module.css";
import page from "../../styles/SodraLillastrand24C.module.css";

const galleryImages = [
  { src: "/garageapartments/IMG_3047.webp", alt: "Södra Lillåstrand 24C – exteriör" },
  { src: "/garageapartments/IMG_3086.webp", alt: "Pentry med mikrovågsugn och diskbänk" },
  { src: "/garageapartments/IMG_3065.webp", alt: "Badrum med handfat och toalett" },
  { src: "/garageapartments/IMG_3061.webp", alt: "Badrum med dusch och tvättmaskin" },
  { src: "/garageapartments/garageapartment1.png", alt: "AI-genererad bild av möblerat alternativ", caption: "AI-genererad exempelbild – visar hur lägenheten kan se ut möblerad" },
  { src: "/garageapartments/garageapartment2.png", alt: "AI-genererad bild av möblerat alternativ", caption: "AI-genererad exempelbild – visar hur lägenheten kan se ut möblerad" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Apartment",
  name: "Södra Lillåstrand 24C – Studio",
  description:
    "Nyproducerad studio om 23 m² på Södra Lillåstrand 24C i Örebro, endast 3 minuter med cykel till Universitetssjukhuset. Uthyres från 5 900 kr/mån.",
  floorSize: {
    "@type": "QuantitativeValue",
    value: 23,
    unitCode: "MTK",
  },
  image: "https://tinfors.se/garageapartments/garageapartment1.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Södra Lillåstrand 24C",
    addressLocality: "Örebro",
    addressCountry: "SE",
  },
  url: "https://tinfors.se/fastigheterna/sodra-lillastrand-24c",
};

export default function SodraLillastrand24C() {
  return (
    <Layout
      title="Södra Lillåstrand 24C – Studio nära USÖ"
      description="Nyproducerad studio om 23 m² på Södra Lillåstrand 24C i Örebro, endast 3 minuter med cykel till Universitetssjukhuset. Uthyres från 5 900 kr/mån."
      image="https://tinfors.se/garageapartments/garageapartment1.png"
      jsonLd={jsonLd}
    >
      <div className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/garageapartments/garageapartment1.png"
          alt="Södra Lillåstrand 24C – exteriör"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <span className={page.newBadge}>Nyproduktion</span>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Södra Lillåstrand 24C</h1>
          <p className={styles.heroLocation}>3 min från Universitetssjukhuset Örebro</p>
        </div>
      </div>

      <div className={styles.breadcrumb}>
        <Link href="/fastigheterna">Fastigheterna</Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span>Södra Lillåstrand 24C</span>
      </div>

      <div className={styles.content}>
        <div className={styles.description}>
          <h2>Nyproducerad studio i lugnt läge</h2>
          <p>
            En välplanerad och effektiv bostad om 23 m² med pentry utrustat med
            mikrovågsugn och häll, ett fullt badrum med dusch samt egen
            tvättmaskin och torktumlare. Lägenheten erbjuder smarta
            förvaringsmöjligheter och ligger i ett lugnt område med god
            tillgång till centrum, mataffär och bussförbindelser.
            Parkeringsplats finns att hyra separat.
          </p>
          <p>
            Perfekt för dig som jobbar på USÖ – endast{" "}
            <strong>3 minuter med cykel</strong> eller 10 minuters promenad
            till Universitetssjukhuset Örebro. Även ett utmärkt val för dig
            som studerar vid Örebro universitet, med enkla bussförbindelser
            och kort resväg till campus.
          </p>
          <p>
            Uthyres omöblerad för <strong>5 900 kr/månad</strong> eller
            basmöblerad (säng, soffa och skrivbord ingår) för{" "}
            <strong>6 900 kr/månad</strong>. Inflyttning enligt överenskommelse.
          </p>
        </div>

        <div className={styles.bofakta}>
          <h3 className={styles.bofaktaTitle}>Bofakta</h3>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Lediga lägenheter</span>
            <span className={styles.bofaktaValue}>1</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Hyra omöblerad</span>
            <span className={styles.bofaktaValue}>5 900 kr/mån</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Hyra basmöblerad</span>
            <span className={styles.bofaktaValue}>6 900 kr/mån</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Storlek</span>
            <span className={styles.bofaktaValue}>23 m²</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Typ</span>
            <span className={styles.bofaktaValue}>Studio</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Område</span>
            <span className={styles.bofaktaValue}>Örebro, norr</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Tvättmaskin</span>
            <span className={styles.bofaktaValue}>I lägenheten</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Torktumlare</span>
            <span className={styles.bofaktaValue}>I lägenheten</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Parkering</span>
            <span className={styles.bofaktaValue}>Finns att hyra</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Inflyttning</span>
            <span className={styles.bofaktaValue}>Enligt överenskommelse</span>
          </div>
        </div>
      </div>

      <div className={page.pricingSection}>
        <h2 className={page.pricingTitle}>Välj hyresalternativ</h2>
        <div className={page.pricingGrid}>
          <div className={page.pricingCard}>
            <p className={page.pricingCardLabel}>Omöblerad</p>
            <p className={page.pricingCardPrice}>5 900 kr</p>
            <p className={page.pricingCardUnit}>per månad</p>
            <ul className={page.pricingCardFeatures}>
              <li>Pentry med mikrovågsugn och häll</li>
              <li>Badrum med dusch</li>
              <li>Tvättmaskin och torktumlare</li>
              <li>Förvaringsmöjligheter</li>
              <li>Parkeringsplats finns att hyra separat</li>
            </ul>
          </div>
          <div className={`${page.pricingCard} ${page.featured}`}>
            <p className={page.pricingCardLabel}>Basmöblerad</p>
            <p className={page.pricingCardPrice}>6 900 kr</p>
            <p className={page.pricingCardUnit}>per månad</p>
            <ul className={page.pricingCardFeatures}>
              <li>Säng, soffa och skrivbord ingår</li>
              <li>Pentry med mikrovågsugn och häll</li>
              <li>Badrum med dusch</li>
              <li>Tvättmaskin och torktumlare</li>
              <li>Parkeringsplats finns att hyra separat</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.gallery}>
        <div className={styles.galleryGrid}>
          {galleryImages.map((img) => (
            <div key={img.src} className={`${styles.galleryImage} ${img.caption ? page.galleryImageWithCaption : ""}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              {img.caption && <p className={page.galleryCaption}>{img.caption}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className={page.floorplanSection}>
        <h2 className={page.floorplanTitle}>Planskiss</h2>
        <div className={page.floorplanWrapper}>
          <Image
            src="/Planskiss_garage_C.png"
            alt="Planskiss – Södra Lillåstrand 24C"
            width={1536}
            height={1024}
          />
        </div>
      </div>

      <div className={styles.mapSection}>
        <h2 className={styles.mapTitle}>Hitta hit</h2>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2048.5!2d15.2134!3d59.2956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c14000b6e3e7d%3A0x0!2zU8O2ZHJhIExpbGzDpXN0cmFuZCAyNEMsIMOWcmVicm8!5e0!3m2!1ssv!2sse"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Karta – Södra Lillåstrand 24C"
          />
        </div>
      </div>

      <div className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <p>Intresserad av denna lägenhet?</p>
          <Link
            href={{
              pathname: "/intresseanmalan",
              query: { fastighet: "Södra Lillåstrand 24C" },
            }}
            className="btn-primary"
          >
            Gör en intresseanmälan
          </Link>
        </div>
      </div>
    </Layout>
  );
}
