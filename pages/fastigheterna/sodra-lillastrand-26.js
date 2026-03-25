import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/Fastighet.module.css";

export default function SodraLillastrand26() {
  return (
    <Layout title="Södra Lillåstrand 26">
      <div className={styles.hero}>
        <img
          className={styles.heroImage}
          src="/Salillastrand26.jpg"
          alt="Södra Lillåstrand 26"
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Södra Lillåstrand 26</h1>
          <p className={styles.heroLocation}>Örebro, norr</p>
        </div>
      </div>

      <div className={styles.breadcrumb}>
        <Link href="/fastigheterna">Fastigheterna</Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span>Södra Lillåstrand 26</span>
      </div>

      <div className={styles.content}>
        <div className={styles.description}>
          <h2>Om fastigheten</h2>
          <p>
            Södra Lillåstrand 26 ligger vackert beläget i norra Örebro, nära
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
