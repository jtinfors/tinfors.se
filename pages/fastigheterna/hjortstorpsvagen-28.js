import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/Fastighet.module.css";

export default function Hjortstorpsvagen28() {
  return (
    <Layout title="Hjortstorpsvägen 28">
      <div className={styles.hero}>
        <img
          className={styles.heroImage}
          src="/Hjortstorpsvagen28.jpg"
          alt="Hjortstorpsvägen 28"
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Hjortstorpsvägen 28</h1>
          <p className={styles.heroLocation}>Örebro</p>
        </div>
      </div>

      <div className={styles.breadcrumb}>
        <Link href="/fastigheterna">Fastigheterna</Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span>Hjortstorpsvägen 28</span>
      </div>

      <div className={styles.content}>
        <div className={styles.description}>
          <h2>Om fastigheten</h2>
          <p>
            Hjortstorpsvägen 28 ligger i Hjortstorp, ett lugnt och trivsamt
            bostadsområde i norra Örebro. Fastigheten erbjuder smarta och
            välplanerade lägenheter med gemensam tvättstuga.
          </p>
          <p>
            Området erbjuder goda kommunikationer med buss till centrala Örebro
            samt närhet till förskolor, skolor och dagligvaruhandel. Natursköna
            promenadstråk finns i direkt anslutning till bostadsområdet.
          </p>
        </div>

        <div className={styles.bofakta}>
          <h3 className={styles.bofaktaTitle}>Bofakta</h3>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Antal lägenheter</span>
            <span className={styles.bofaktaValue}>12</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Storlek</span>
            <span className={styles.bofaktaValue}>21-71 m²</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Rum</span>
            <span className={styles.bofaktaValue}>1–2 rok</span>
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
            <span className={styles.bofaktaLabel}>Garage</span>
            <span className={styles.bofaktaValue}>3 platser</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Parkering</span>
            <span className={styles.bofaktaValue}>1 plats</span>
          </div>
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
          <p>Intresserad av en lägenhet i denna fastighet?</p>
          <Link href="/intresseanmalan" className="btn-primary">
            Gör en intresseanmälan
          </Link>
        </div>
      </div>
    </Layout>
  );
}
