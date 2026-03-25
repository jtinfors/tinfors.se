import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/Fastighet.module.css";

export default function Hjortstorpsvagen9() {
  return (
    <Layout title="Hjortstorpsvägen 9">
      <div className={styles.hero}>
        <img
          className={styles.heroImage}
          src="/Hjortstorpsvagen9.jpg"
          alt="Hjortstorpsvägen 9"
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Hjortstorpsvägen 9</h1>
          <p className={styles.heroLocation}>Örebro</p>
        </div>
      </div>

      <div className={styles.breadcrumb}>
        <Link href="/fastigheterna">Fastigheterna</Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span>Hjortstorpsvägen 9</span>
      </div>

      <div className={styles.content}>
        <div className={styles.description}>
          <h2>Om fastigheten</h2>
          <p>
            Hjortstorpsvägen 9 är beläget i det populära Hjortstorp i norra
            Örebro. Fastigheten erbjuder moderna och nyrenoverade lägenheter med
            bra planlösningar i varierande storlekar.
          </p>
          <p>
            Lägenheterna har genomgått en omfattande renovering och vissa är
            utrustade med egen tvättmaskin och torktumlare samt diskmaskin.
            Området har goda kommunikationer och närhet till service, skolor och
            grönområden.
          </p>
        </div>

        <div className={styles.bofakta}>
          <h3 className={styles.bofaktaTitle}>Bofakta</h3>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Antal lägenheter</span>
            <span className={styles.bofaktaValue}>16</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Storlek</span>
            <span className={styles.bofaktaValue}>31–75 m²</span>
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
            <span className={styles.bofaktaLabel}>Tvättmaskin</span>
            <span className={styles.bofaktaValue}>I vissa lägenheter</span>
          </div>
          <div className={styles.bofaktaRow}>
            <span className={styles.bofaktaLabel}>Parkering</span>
            <span className={styles.bofaktaValue}>6 platser</span>
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
