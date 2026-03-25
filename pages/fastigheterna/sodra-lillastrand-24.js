import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/Fastighet.module.css";

export default function SodraLillastrand24() {
  return (
    <Layout title="Södra Lillåstrand 24">
      <div className={styles.hero}>
        <img
          className={styles.heroImage}
          src="/Salillastrand24.jpg"
          alt="Södra Lillåstrand 24"
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Södra Lillåstrand 24</h1>
          <p className={styles.heroLocation}>Örebro, norr</p>
        </div>
      </div>

      <div className={styles.breadcrumb}>
        <Link href="/fastigheterna">Fastigheterna</Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span>Södra Lillåstrand 24</span>
      </div>

      <div className={styles.content}>
        <div className={styles.description}>
          <h2>Om fastigheten</h2>
          <p>
            Södra Lillåstrand 24 ligger vackert beläget i norra Örebro, nära
            Svartån och med promenadavstånd till stadens centrum. Fastigheten
            erbjuder trivsamma lägenheter i en lugn och grön miljö.
          </p>
          <p>
            Området bjuder på närhet till natursköna promenadstråk längs ån samt
            goda kommunikationer med buss till centrala Örebro. I närheten finns
            även mataffär och andra bekvämligheter.
          </p>
        </div>

        <div className={styles.bofakta}>
          <h3 className={styles.bofaktaTitle}>Bofakta</h3>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Antal lägenheter</span>
            <span className={styles.bofaktaValue}>8</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Storlek</span>
            <span className={styles.bofaktaValue}>35–108 m²</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Rum</span>
            <span className={styles.bofaktaValue}>1–4 rok</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Område</span>
            <span className={styles.bofaktaValue}>Örebro, norr</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Tvättmaskin</span>
            <span className={styles.bofaktaValue}>I vissa lägenheter</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Tvättstuga</span>
            <span className={styles.bofaktaValue}>Gemensam</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Parkering</span>
            <span className={styles.bofaktaValue}>4 platser</span>
          </div>
        </div>
      </div>

      <div className={styles.mapSection}>
        <h2 className={styles.mapTitle}>Hitta hit</h2>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2048.5!2d15.2134!3d59.2956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c14000b6e3e7d%3A0x0!2zU8O2ZHJhIExpbGzDpXN0cmFuZCAyNCwgw5ZyZWJybw!5e0!3m2!1ssv!2sse"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Karta – Södra Lillåstrand 24"
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
